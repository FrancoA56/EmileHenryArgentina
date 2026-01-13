"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/storage/1.webp",
  "/img/storage/2.webp",
  "/img/storage/3.webp",
  "/img/storage/4.webp",
  "/img/storage/5.webp",
  "/img/storage/6.webp",
  "/img/storage/7.webp",
];

export default function Storage() {
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
      <section className={styles.main} id="storage">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Storage Bowl:</div>
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
              El Storage Bowl de Emile Henry combina diseño inteligente y
              materiales naturales para conservar frutas y verduras frescas por
              más tiempo. Su base de cerámica esmaltada evita la luz directa,
              disminuyendo la germinación de vegetales como papas y cebollas,
              mientras que los orificios de ventilación mantienen la circulación
              justa de aire. Su tapa de corcho natural sirve como frutera, es
              antibacterial y ayuda a evitar la condensación y el deterioro de
              la fruta. Además, le da un toque cálido y sofisticado a tu cocina
              o comedor. <br />
              Base de cerámica esmaltada: no mancha ni absorbe olores. <br />
              Tapa multifunción de corcho: frutera y cobertura a la vez. <br />
              Ventilación natural: 3 orificios que previenen humedad. <br />
              Conservación inteligente: recrea las condiciones de una bodega
              Ideal para cebollas, papas, remolachas y frutas. <br />
              Fácil de limpiar: cerámica apta lavavajillas, tapa con paño húmedo.{" "}
              <br />
              Capacidad total: 9,5 litros. <br />
              Diseñado y fabricado en Francia para quienes eligen funcionalidad
              sin renunciar a la belleza.
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Línea</div>
            <div className={styles.main_sub_text_linea}>
              <span className={styles.boldi}>Tradicional</span>
            </div>{" "}
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Colores</div>
            <div className={styles.variaciones_color}>
              <div className={styles.colorado} title="Colorado"></div>
              <div className={styles.blueFlame} title="Blue Flame"></div>
              <div className={styles.marfil} title="Marfil"></div>
              <div className={styles.negro} title="Negro"></div>
              <div className={styles.newblue} title="New Blue"></div>
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
                alt={`Storage ${i + 1}`}
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
              alt={`Storage ${selectedImageIndex + 1}`}
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
