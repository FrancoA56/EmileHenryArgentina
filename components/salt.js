"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/salt/1.webp",
  "/img/salt/2.webp",
  "/img/salt/3.webp",
  "/img/salt/4.webp",
  "/img/salt/5.webp",
  "/img/salt/6.webp",
  "/img/salt/7.webp",
  "/img/salt/8.webp",
];

export default function Salt() {
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
      <section className={styles.main} id="salt">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Salt Pot:</div>
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
              El Salt Pot de Emile Henry está diseñado para conservar la sal de
              forma óptima, evitando que la humedad la dañe. Su tapa ajustada
              protege la sal de salpicaduras y polvo, mientras que su interior
              de cerámica mantiene la frescura y textura del condimento intacta.
              Ideal para mantener tu sal gruesa a mano y con estilo. <br />
              Cerámica HR® que regula la humedad interior.
              <br />
              Tapa de corcho con cierre preciso para mayor protección.
              <br /> Libre de plomo, cadmio y níquel. 
              Apto para lavavajillas.
              <br /> Diseño minimalista y elegante, ideal para dejar a la vista,
              este pequeño contenedor es el toque final para una cocina
              organizada, funcional y sofisticada. <br />
              Ideal para quienes buscan productos que duren y que sumen belleza
              a su cocina.
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
              <div className={styles.marfil} title="Blanco Opaco"></div>
              <div className={styles.blueFlame} title="Blue Flame"></div>
              <div className={styles.negro} title="Negro"></div>
              <div className={styles.marfil} title="Marfil"></div>
              <div className={styles.gris} title="Gris"></div>
              <div className={styles.negro} title="Negro Opaco"></div>
              <div className={styles.newblue} title="New Blue"></div>
              <div className={styles.silex} title="Silex"></div>
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
                alt={`Porta Utensillos ${i + 1}`}
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
              alt={`Salt Pot ${selectedImageIndex + 1}`}
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
