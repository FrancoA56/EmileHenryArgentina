"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/vinagrera/1.jpg",
  "/img/vinagrera/2.jpg",
  "/img/vinagrera/3.jpg",
  "/img/vinagrera/4.jpg",
  "/img/vinagrera/5.jpg",
  "/img/vinagrera/6.webp",
  "/img/vinagrera/7.webp",
  "/img/vinagrera/8.webp",
];

export default function Vinagrera() {
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
      <section className={styles.main} id="vinagrera">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Vinagrera:</div>
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
              Una herramienta indispensable para conservar con elegancia el
              vinagre a granel o las mezclas caseras de vinagres aromatizados.
              Fabricada con materiales naturales, la cerámica Emile Henry
              protege el vinagre de la luz, preservando sus aromas y sabores, y
              evitando la formación de bacterias. El pico vertedor de acero
              inoxidable y corcho impide la circulación del aire y facilita su
              uso al desglasar, preparar una marinada o simplemente hacer una
              vinagreta. Su forma redondeada hace que la Vinagrera sea fácil de
              manipular y combine perfectamente con la Aceitera, formando un dúo
              atractivo sin riesgo de confundirlas. Gracias a su amplia gama de
              colores, se adapta a cualquier estilo de decoración.
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
              <div className={styles.blanco} title="Blanco"></div>
              <div className={styles.negro} title="Negro"></div>
              <div className={styles.toscane} title="Toscane"></div>
              <div className={styles.bellele} title="Belle-lle"></div>
              <div className={styles.blueFlame} title="Blue Flame"></div>
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
                alt={`Vinagrera ${i + 1}`}
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
              alt={`Vinagrera ${selectedImageIndex + 1}`}
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
