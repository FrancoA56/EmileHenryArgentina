"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/dishGrillBBQ/1.webp",
  "/img/dishGrillBBQ/2.webp",
  "/img/dishGrillBBQ/3.webp",
];

export default function DishGrillBbq() {
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
      <section className={styles.main} id="dishGrill">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Dish Grill:</div>
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
              El BBQ Grill Dish de Emile Henry es una plancha lisa ideal para
              asar carnes, pescados y pollo con resultados uniformes y precisos.
              Su amplia superficie permite preparar varias porciones al mismo
              tiempo, ofreciendo practicidad y eficiencia en cada uso.
              <br /> Los bordes elevados ayudan a contener jugos y aceites,
              manteniendo la cocción más limpia y controlada.
              <br />
              Cerámica de alta calidad: Distribución homogénea del calor para
              una cocción pareja.
              <br />
              Superficie amplia: Ideal para carnes, pescados y pollo.
              <br />
              Bordes elevados: Evitan derrames y mantienen los jugos contenidos.
              <br />
              Revestimiento resistente: Duradero incluso con uso frecuente.
              <br />
              Fácil limpieza. Apto para lavavajillas.
              <br />
              Capacidad máxima: 1,9 L. Capacidad útil: 1,7 L. Medidas: 42,5 x
              27,5 x 4 cm. Peso: 1,8 kg.
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
