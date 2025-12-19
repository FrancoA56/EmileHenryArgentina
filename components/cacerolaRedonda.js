"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/cacerolaRedonda/1.webp",
  "/img/cacerolaRedonda/2.webp",
  "/img/cacerolaRedonda/3.webp",
  "/img/cacerolaRedonda/4.webp",
  "/img/cacerolaRedonda/5.webp",
];

export default function CacerolaRedonda() {
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
      <section className={styles.main} id="cacerolaRedonda">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Cacerola Redonda:</div>
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
              Descubrí la magia de cocinar con la cacerola redonda Emile Henry,
              disponible en tres tamaños para adaptarse a todas tus necesidades
              culinarias. Fabricada con la exclusiva cerámica Flame®, ofrece una
              cocción lenta y uniforme que realza los sabores naturales de tus
              ingredientes. Tecnología Flame Ceramic®: Distribución perfecta del
              calor para intensificar los sabores Cocción saludable: Material
              100% libre de plomo, cadmio y níquel Tapa inteligente: Sistema de
              condensación que conserva jugos y aromas Multiversátil: Compatible
              con todas las cocinas de gas y horno (250°C) Fácil cuidado: Apta
              lavavajillas y resistente a manchas Garantía Emile Henry: 10 años
              de respaldo oficial. Modelos disponibles: • 2.5L (ideal para 2-4
              prociones) • 4L (ideal para 4-6 porciones) • 5.3L (ideal para 6-8
              porciones) Fabricación francesa con tradición artesanal desde
              1850. La elección profesional para quienes buscan excelencia en
              cada preparación.
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
                alt={`Cacerola Redonda ${i + 1}`}
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
              alt={`Cacerola Redonda ${selectedImageIndex + 1}`}
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
