"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/cheese/1.webp",
  "/img/cheese/2.webp",
  "/img/cheese/3.webp",
  "/img/cheese/4.webp",
  "/img/cheese/5.webp",
  "/img/cheese/6.webp",
  "/img/cheese/7.webp",
];

export default function CheeseBaker() {
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
      <section className={styles.main} id="cheeseBaker">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Cheese Baker:</div>
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
              Diseñado especialmente para mantener tus quesos fundidos en su
              punto perfecto, el Cheese Baker combina funcionalidad y diseño en
              cerámica artesanal. Ideal tanto para fondues tradicionales como
              para modernos dips de queso, es el accesorio que transformará tus
              reuniones en experiencias gourmet. Cerámica de alta resistencia:
              Distribuye el calor uniformemente para una fusión perfecta Diseño
              pensado para el queso: Forma óptima para mantener la temperatura
              ideal Multiusos: Apto para horno convencional, microondas y
              lavavajillas Material seguro: 100% libre de plomo, cadmio y
              níquel. Estilo atemporal: Acabado esmaltado en variados colores
              para combinar con tu vajilla Capacidad: 0.8 litros (ideal para 4-6
              personas) Perfecto para: • Fondues de queso tradicionales • Dips
              gourmet (queso azul, cheddar fundido, etc.) • Raclette estilo
              francés • Creaciones con chocolate fundido Fabricado en Francia
              con garantía de 10 años.
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Línea</div>
            <div className={styles.main_sub_text}>
              <span className={styles.boldi}>Tradicional</span>
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Colores</div>
            <div className={styles.variaciones_color}>
              <div className={styles.colorado} title="Colorado"></div>
              <div className={styles.negro} title="Negro"></div>
              <div className={styles.newblue} title="New Blue"></div>
              <div className={styles.amarillo} title="Amarillo"></div>
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
                alt={`CheeseBaker ${i + 1}`}
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
              alt={`CheeseBaker ${selectedImageIndex + 1}`}
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
