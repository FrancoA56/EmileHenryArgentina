"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/cheeseBakerBBQ/1.webp",
  "/img/cheeseBakerBBQ/2.webp",
];

export default function CheeseBaker() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0
          ? imagenesFuentes.length - 1
          : selectedImageIndex - 1,
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === imagenesFuentes.length - 1
          ? 0
          : selectedImageIndex + 1,
      );
    }
  };

  return (
    <>
      <section className={styles.main} id="cheeseBaker">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Cheese Baker:</div>
          <div className={styles.donde}>
            <Link href="/#donde-comprar" className={styles.donde}>
              <div className={styles.main_sub_title}>¿Dónde comprar? </div>
              <div className={styles.link}>
                <FaExternalLinkAlt />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.especifics}>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Descripción</div>
            <div className={styles.main_sub_text}>
              El BBQ Cheese Baker de Emile Henry es ideal para preparar y servir
              quesos calientes de forma práctica y elegante. Perfecto para brie
              fundido, mini fondue o una cena estilo raclette, permite lograr
              una textura cremosa y perfectamente derretida. Su tapa conserva la
              humedad, intensifica los sabores y mantiene el calor hasta el
              momento de servir, para disfrutar directamente en la mesa.
              <br />
              Cerámica High Resistance®: Distribución uniforme del calor y
              excelente conservación de temperatura. <br />
              Con tapa: Mantiene la humedad y potencia el sabor del queso. Ideal
              para brie, mozzarella, queso de cabra y más.
              <br />
              Formato práctico: Perfecto para entradas, mini fondue o estilo
              raclette.
              <br />
              Esmalte resistente y no poroso: Fácil de limpiar y duradero.
              <br />
              Apto para horno y servicio directo a la mesa.
              <br />
              Fabricado en Francia. Garantía de 10 años.
              <br />
              Capacidad máxima: 1,2 L. Capacidad útil: 0,55 L. Medidas: 20 x 18
              x 10 cm. Peso: 1,1 kg.
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Línea</div>
            <div className={styles.main_sub_text_línea}>
              <span className={styles.boldi}>BBQ</span>
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Colores</div>
            <div className={styles.variaciones_color}>
              <div className={styles.negro2} title="Negro Opaco"></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.product_gallery}>
        <div className={styles.image_grid}>
          {imagenesFuentes.map((image, i) => (
            <div
              key={i}
              className={styles.grid_item}
              onClick={() => openLightbox(i)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Cheese Baker BBQ ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

      {selectedImageIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button
            className={styles.lightbox_arrow_left}
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            ‹
          </button>

          <div
            className={styles.lightbox_image_container}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imagenesFuentes[selectedImageIndex] || "/placeholder.svg"}
              alt={`Cheese Baker BBQ ${selectedImageIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <button
            className={styles.lightbox_arrow_right}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
