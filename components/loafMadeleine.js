"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/loafMadeleine/1.webp",
  "/img/loafMadeleine/2.jpg",
  "/img/loafMadeleine/3.jpg",
  "/img/loafMadeleine/4.webp",
  "/img/loafMadeleine/5.webp",
];

export default function LoafMadeleine() {
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
      <section className={styles.main} id="loaf">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Loaf Madeleine:</div>
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
              La Loaf Dish de Emile Henry es ideal para preparar budines, tortas
              clásicas, panes dulces y recetas saladas con una presentación
              impecable. Su formato rectangular profundo permite elaborar desde
              un budín marmolado o carrot cake hasta terrinas y panes caseros.
              Gracias a su cerámica de alta calidad, el calor se distribuye de
              manera uniforme y suave hasta el centro de la preparación,
              favoreciendo un levado perfecto y una cocción homogénea. <br />
              Su acabado esmaltado brillante realza la presentación y permite
              llevarla directamente a la mesa.
              <br /> Cerámica de alta calidad: Difusión homogénea del calor para
              resultados perfectos. <br />
              Formato profundo y versátil: Ideal para budines, tortas, panes
              dulces y recetas saladas. <br />
              Superficie resistente: Permite cortar y servir directamente en la
              fuente.
              <br /> Naturalmente antiadherente: Con mínimo engrasado previo al
              horneado.
              <br /> Materiales 100% naturales: Libre de PFAS, plomo y BPA. No
              transfiere sabores ni retiene olores.
              <br /> Apta para horno, freezer, microondas y lavavajillas.
              <br /> Capacidad máxima: 2 L. Capacidad útil: 1,8 L. Medidas: 29 x
              13,5 x 9 cm.
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
                alt={`Loaf Madeleine ${i + 1}`}
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
              alt={`Loaf Madeleine ${selectedImageIndex + 1}`}
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
