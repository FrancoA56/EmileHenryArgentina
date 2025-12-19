"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/rectangular/1.webp",
  "/img/rectangular/2.webp",
  "/img/rectangular/3.webp",
  "/img/rectangular/4.webp",
  "/img/rectangular/5.webp",
  "/img/rectangular/6.webp",
  "/img/rectangular/7.webp",
  "/img/rectangular/8.webp",
];

export default function MoldeRectangular() {
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
      <section className={styles.main} id="moldeRectangular">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Molde Rectangular Tart:</div>
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
              El Molde Rectangular Estrecho para Tartas de Emile Henry le da una
              nueva dimensión a tus recetas de tartas. Gracias a sus bordes
              altos, podés preparar no solo tartas largas y delgadas, sino
              también quiches y clafoutis deliciosos. Fabricado con cerámica HR®
              (Alta Resistencia), distribuye el calor de manera uniforme y
              cocina hasta el centro sin quemar los bordes. Con o sin base de
              masa, tus preparaciones pueden cortarse y servirse directamente en
              el molde sin riesgo de rayar la superficie. Un molde rectangular
              para tartas es original, fácil de servir y práctico para envolver
              cuando se trata de picnics o almuerzos para llevar. Hecho en
              Francia, este producto cuenta con una garantía de 10 años.
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Línea</div>
            <div className={styles.main_sub_text_linea }>
              <span className={styles.boldi}>Tradicional</span>
            </div>{" "}
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Colores</div>
            <div className={styles.variaciones_color}>
              <div className={styles.colorado} title="Colorado"></div>
              <div className={styles.marfil} title="Marfil"></div>
              <div className={styles.amarillo} title="Amarillo"></div>
              <div className={styles.bellele} title="Belle-lle"></div>
              <div className={styles.toscane} title="Toscane"></div>
              <div className={styles.verde} title="Verde"></div>
              <div
                className={styles.blancoBrillante}
                title="Blanco brillante"
              ></div>
              <div className={styles.gris} title="Gris"></div>
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
