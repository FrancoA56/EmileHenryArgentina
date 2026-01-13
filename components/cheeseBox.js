"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/cheeseBox/1.webp",
  "/img/cheeseBox/2.webp",
  "/img/cheeseBox/3.webp",
  "/img/cheeseBox/4.webp",
  "/img/cheeseBox/5.webp",
  "/img/cheeseBox/6.webp",
];

export default function CheeseBox() {
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
      <section className={styles.main} id="cheeseBox">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Cheese Box:</div>
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
              Ideal para conservar en ambientes frescos, la Cheese Box de
              cerámica es una solución práctica y elegante para guardar,
              proteger y servir todo tipo de quesos. Mantiene el contenido
              resguardado en la heladera o en una cava, y su tapa reversible
              funciona como una refinada bandeja de presentación. <br />
              Con una capacidad de 3,5 litros, puede contener hasta 10 piezas
              pequeñas. Fue diseñada para un almacenamiento eficiente tanto
              dentro del refrigerador como en la propia caja: su formato angosto
              y profundo optimiza el espacio en los estantes, mientras que la
              tapa plana permite apilar otros recipientes encima. Las asas
              laterales facilitan su manipulación, ya sea en la heladera o en la
              mesa. Pensada para pasar directamente del frío a a la mesa, basta
              con invertir la tapa, disponer los quesos enteros o en rodajas y
              presentar. <br />
              Resulta especialmente práctica para buffets y picadas, gracias a
              una bandeja de tamaño ideal y una estética cuidada. Sus líneas
              suaves y el esmaltado fino la convierten en una pieza atractiva de
              vajilla. Al finalizar, solo es necesario envolver los restos de
              queso, colocarlos nuevamente en la caja, limpiar la tapa, cerrar y
              guardar.
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
              <div className={styles.marfil} title="Marfil"></div>
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
                alt={`CheeseBox ${i + 1}`}
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
              alt={`CheeseBox  ${selectedImageIndex + 1}`}
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
