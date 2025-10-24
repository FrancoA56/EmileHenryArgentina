"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/tartera/1.webp",
  "/img/tartera/2.webp",
  "/img/tartera/3.webp",
  "/img/tartera/4.webp",
  "/img/tartera/5.webp",
  "/img/tartera/6.webp",
  "/img/tartera/7.webp",
  "/img/tartera/8.webp",
];

export default function Tartera() {
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
          : selectedImageIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === imagenesFuentes.length - 1
          ? 0
          : selectedImageIndex + 1
      );
    }
  };

  return (
    <>
      <section className={styles.main} id="moldeCircularTart">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Molde Circular Tart:</div>
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
              Eficiente desde la cocción hasta la presentación, nuestro nuevo
              Molde para Tarta distribuye el calor de manera uniforme y suave,
              lo que evita que la masa se seque. Con solo untar ligeramente
              manteca en el molde antes de colocar la masa, se garantiza que la
              tarta se desmolde fácilmente. Además, espolvorear un poco de
              azúcar sobre la manteca da como resultado una costra ligeramente
              caramelizada. ¿Necesitás recalentar una porción de quiche al día
              siguiente? Nuestro nuevo Molde para Tarta es apto para microondas.
              Su esmalte muy resistente, liso y brillante está preparado para el
              uso diario: se puede cortar directamente en el molde, lavar
              repetidamente en el lavavajillas e incluso limpiar con una esponja
              abrasiva. Aun así, cada tarta o quiche servida en este molde hará
              una entrada espectacular en la mesa, gracias a su diseño y colores
              elegantes.
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Línea</div>
            <div className={styles.main_sub_text}>
              <span className={styles.boldi}>Tradicional</span>
            </div>{" "}
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Colores</div>
            <div className={styles.variaciones_color}>
              <div className={styles.colorado} title="Colorado"></div>
              <div className={styles.marfil} title="Marfil"></div>
              <div className={styles.amarillo} title="Amarillo"></div>
              <div className={styles.newblue} title="New Blue"></div>
              <div className={styles.toscane} title="Toscane"></div>
              <div className={styles.bellele} title="Belle-lle"></div>
              <div className={styles.verde} title="Verde"></div>
              <div
                className={styles.blancoBrillante}
                title="Blanco brillante"
              ></div>
              <div className={styles.gris} title="Gris"></div>
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Tamaños</div>
            <div className={styles.main_sub_text}>
              <span className={styles.boldi}>Individual</span>
              <span className={styles.boldi}>Small</span>
              <span className={styles.boldi}>Medium</span>
              <span className={styles.boldi}>Large</span>
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
                alt={`Tajine ${i + 1}`}
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
              alt={`Tajine ${selectedImageIndex + 1}`}
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
