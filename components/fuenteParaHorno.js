"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/fuente/1.jpg",
  "/img/fuente/2.jpg",
  "/img/fuente/3.jpg",
  "/img/fuente/4.jpg",
  "/img/fuente/5.webp",
  "/img/fuente/6.jpg",
  "/img/fuente/7.jpeg",
  "/img/fuente/8.jpeg",
];

export default function Fuentes() {
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
      <section className={styles.main} id="fuenteHorno">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Fuentes para Horno:</div>
          <div className={styles.donde}>
            <Link href="/#donde-comprar" className={styles.donde}>
              <div className={styles.main_comprar}>¿Dónde comprar? </div>
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
              Todo tipo de recetas pueden prepararse y servirse en este plato
              pequeño pero generoso: gratinados, tians… Hecho de cerámica HR®
              (Alta Resistencia), distribuye el calor de manera uniforme durante
              toda la cocción y luego mantiene la comida caliente una vez
              servida en la mesa, permitiendo disfrutar del contenido hasta el
              final de la comida. Resistente y duradero, puede usarse en el
              horno, bajo el grill o para recalentar o descongelar en el
              microondas. Su tamaño compacto y su forma elegante hacen que el
              plato individual Emile Henry luzca atractivo al servirse en la
              mesa, ya sea para un gratinado individual o como guarnición para
              dos personas. Fabricado en Francia, cuenta con una garantía de 10
              años.
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
              <div className={styles.blanco} title="Blanco"></div>
              <div className={styles.bellele} title="Belle-lle"></div>
              <div className={styles.newblue} title="New Blue"></div>
              <div
                className={styles.blancoBrillante}
                title="Blanco brillante"
              ></div>
              <div className={styles.toscane} title="Toscane"></div>
              <div className={styles.verde} title="Verde"></div>
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
