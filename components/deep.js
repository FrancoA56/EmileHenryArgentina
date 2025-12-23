"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/deep/1.webp",
  "/img/deep/2.jpg",
  "/img/deep/3.jpg",
  "/img/deep/4.webp",
  "/img/deep/5.webp",
  "/img/deep/6.webp",
  "/img/deep/7.webp",
];

export default function Deep() {
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
      <section className={styles.main} id="deep">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Deep Storage Bowl:</div>
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
              El Deep Storage Bowl de Emile Henry combina cerámica esmaltada de
              alta calidad con una tapa de corcho natural para ofrecer un
              sistema de almacenamiento único. Su diseño inteligente regula la
              humedad y ventilación, creando el ambiente perfecto para conservar
              frutas y verduras con todo su sabor y frescura. <br />
              Base de cerámica esmaltada: Fácil limpieza y protección contra
              manchas. <br />
              Tapa de corcho natural: Absorbe humedad y evita la proliferación
              de bacterias. <br />
              Ventilación controlada: 3 orificios estratégicos para flujo de
              aire óptimo. <br />
              Doble función: Almacena verduras en la base + frutas en la tapa
              cóncava. <br />
              Materiales seguros: 100% libres de tóxicos y metales pesados{" "}
              <br />
              Fácil mantenimiento: Base apta para lavavajillas, tapa limpiable
              con paño. <br />
              Fabricado en Francia, este innovador bowl es la solución perfecta
              para quienes buscan practicidad y diseño en su cocina. Un
              accesorio que combina tecnología de conservación con la elegancia
              característica de Emile Henry.
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
                alt={`Deep Storage ${i + 1}`}
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
              alt={`Deep Storage ${selectedImageIndex + 1}`}
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
