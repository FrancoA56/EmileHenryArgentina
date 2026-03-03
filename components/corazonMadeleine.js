"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/corazonMadeleine/1.webp",
  "/img/corazonMadeleine/2.jpg",
  "/img/corazonMadeleine/3.jpg",
  "/img/corazonMadeleine/4.webp",
  "/img/corazonMadeleine/5.webp",
];

export default function CorazonMadeleine() {
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
      <section className={styles.main} id="corazon">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Molde Corazon:</div>
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
              El Molde Corazón de Emile Henry está pensado para preparar y
              compartir recetas llenas de amor. Ideal para fondant de chocolate,
              budines acaramelados, tortas de vainilla y postres especiales, su
              delicada forma transforma cada preparación en un verdadero
              protagonista en la mesa. <br />
              Su cerámica esmaltada distribuye el calor de manera uniforme,
              asegurando una cocción homogénea hasta el centro y un levado
              óptimo en cada receta. Además, su acabado brillante y ornamental
              realza la presentación, permitiendo hornear y servir directamente
              en la misma fuente. <br />
              Cerámica esmaltada: Distribución homogénea del calor para
              resultados perfectos. <br />
              Diseño en forma de corazón: Ideal para ocasiones especiales y
              celebraciones. <br />
              Superficie naturalmente antiadherente: Resistente a rayaduras y
              apta para cortar y servir en la fuente. <br />
              Libre de PFAS y materiales tóxicos. <br />
              Apto para horno y lavavajillas. <br />
              Capacidad máxima: 2 L. Capacidad útil: 1,8 L. Medidas: 26,5 x 24,5
              x 6,5 cm.
              <br />
              Fabricado artesanalmente en Francia.
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Línea</div>
            <div className={styles.main_sub_text_línea}>
              <span className={styles.boldi}>Madeleine</span>
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Colores</div>
            <div className={styles.variaciones_color}>
              <div className={styles.roseCandy} title="Rose Candy"></div>
              <div className={styles.marfil} title="Marfil"></div>
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
                alt={`Corazon Madeleine ${i + 1}`}
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
              alt={`Corazon Madeleine ${selectedImageIndex + 1}`}
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
