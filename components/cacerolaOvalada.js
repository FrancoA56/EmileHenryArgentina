"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/cacerolaOvalada/1.webp",
  "/img/cacerolaOvalada/2.webp",
  "/img/cacerolaOvalada/3.webp",
  "/img/cacerolaOvalada/4.webp",
  "/img/cacerolaOvalada/5.webp",
  "/img/cacerolaOvalada/6.webp",
];

export default function CacerolaOvalada() {
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
      <section className={styles.main} id="cacerolaOvalada">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Cacerola Ovalada:</div>
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
              La cacerola ovalada Emile Henry combina lo mejor de la cocción
              lenta con un diseño elegante y funcional. Su cerámica Flame
              exclusiva garantiza una distribución uniforme del calor,
              resaltando los sabores naturales de tus ingredientes mientras
              conserva todos sus aromas y nutrientes. Perfecta para guisos,
              estofados y preparaciones para toda la familia. Cerámica Flame:
              Tecnología exclusiva que asegura una cocción lenta y uniforme,
              realzando los sabores de tus preparaciones. Tapa con sistema de
              goteo: Puntos en la parte inferior de la tapa redistribuyen los
              jugos y vapores sobre los alimentos, manteniéndolos jugosos y
              llenos de sabor. Material seguro y saludable: Libre de plomo,
              cadmio y níquel, garantizando una cocina 100% libre de tóxicos.
              Multiusos: Compatible con cocinas a gas y horno (hasta 250°C).
              Fácil limpieza: Superficie esmaltada resistente a manchas y apta
              para lavavajillas. Capacidad generosa: Ideal para 8 a 10
              porciones, perfecta para comidas familiares o reuniones. Diseño
              ergonómico: Asas integradas para un manejo seguro y cómodo.
              Garantía de 10 años: Respaldada por la calidad y artesanía de
              Emile Henry. Capacidad: 6 litros (aprox. 8-10 porciones).
              Fabricada en Francia, esta cacerola ovalada es la elección
              perfecta para quienes buscan resultados gourmet con la
              autenticidad de la cocción lenta. ¡Prepará platos llenos de sabor
              y tradición! 🍲
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Línea</div>
            <div className={styles.main_sub_text_linea }>
              <span className={styles.boldi}>Tradicional</span>
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Colores</div>
            <div className={styles.variaciones_color}>
              <div className={styles.colorado} title="Colorado"></div>
              <div className={styles.negro} title="Negro"></div>
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
                alt={`CacerolaOvalada ${i + 1}`}
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
              alt={`CacerolaOvalada ${selectedImageIndex + 1}`}
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
