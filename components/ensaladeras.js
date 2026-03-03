"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/ensaladera/1.jpg",
  "/img/ensaladera/2.jpg",
  "/img/ensaladera/3.jpg",
  "/img/ensaladera/4.jpg",
  "/img/ensaladera/5.jpeg",
  "/img/ensaladera/6.jpeg",
  "/img/ensaladera/7.jpeg",
  "/img/ensaladera/8.jpeg",
];

export default function Ensaladera() {
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
      <section className={styles.main} id="ensaladera">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Ensaladera:</div>
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
              Nuestras ensaladeras se distinguen por sus formas generosas y
              redondeadas. <br />
              Fabricadas con cerámica HR® (Alta Resistencia), son resistentes a
              los golpes y a los cambios de temperatura. <br />
              Pueden usarse en el horno, microondas, freezer y lavavajillas, y
              mantienen la temperatura durante toda la comida.<br /> Fabricado en Francia con la calidad y artesanía que
              caracteriza a Emile Henry.
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Línea</div>
            <div className={styles.main_sub_text_línea}>
              <span className={styles.boldi}>Tradicional</span>
            </div>{" "}
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Colores</div>
            <div className={styles.variaciones_color}>
              <div className={styles.colorado} title="Colorado"></div>
              <div className={styles.marfil} title="Marfil"></div>
              <div className={styles.negro} title="Negro"></div>
              <div className={styles.toscane} title="Toscane"></div>
              <div className={styles.amarillo} title="Amarillo"></div>
              <div className={styles.bellele} title="Belle-lle"></div>
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Tamaños</div>
            <div className={styles.main_sub_text_línea}>
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
                alt={`Ensaladera ${i + 1}`}
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
              alt={`Ensaladera ${selectedImageIndex + 1}`}
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
