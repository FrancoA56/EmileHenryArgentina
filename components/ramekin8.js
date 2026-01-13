"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/ramekin8/1.webp",
  "/img/ramekin8/2.webp",
  "/img/ramekin8/3.webp",
  "/img/ramekin8/4.webp",
  "/img/ramekin8/5.webp",
  "/img/ramekin8/6.webp",
  "/img/ramekin8/7.webp",
  "/img/ramekin8/8.webp",
];

export default function Ramekin8() {
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
      <section className={styles.main} id="ramekin8">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Ramekin N°8:</div>
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
              El Ramekin N°8 es perfecto para porciones individuales pequeñas
              como cremas, dips o flanes. Su cerámica HR® garantiza una cocción
              pareja y una presentación impecable directamente del horno a la
              mesa. <br />
              Ideal para flanes, salsas y degustaciones.
              <br /> Apto para horno, microondas, lavavajillas y freezer. <br />
              Conserva temperatura y realza sabores. <br />
              Cerámica esmaltada sin metales pesados.<br /> Fabricado en Francia con la calidad y artesanía que
              caracteriza a Emile Henry.
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Línea</div>
            <div className={styles.main_sub_text_linea}>
              <span className={styles.boldi}>Tradicional</span>
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Colores</div>
            <div className={styles.variaciones_color}>
              <div className={styles.colorado} title="Colorado"></div>
              <div className={styles.marfil} title="Marfil"></div>
              <div className={styles.newblue} title="New Blue"></div>
              <div className={styles.toscane} title="Toscane"></div>
              <div className={styles.amarillo} title="Amarillo"></div>
              <div className={styles.blueFlame} title="Blue Flame"></div>
              <div className={styles.negro} title="Negro"></div>
              <div className={styles.bellele} title="Belle-lle"></div>
              <div className={styles.roble} title="Roble"></div>
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
                alt={`Ramekin ${i + 1}`}
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
              alt={`Ramekin ${selectedImageIndex + 1}`}
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
