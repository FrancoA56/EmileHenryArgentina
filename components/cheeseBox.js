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
              cerámica es práctica para guardar, proteger y servir todo tipo de
              quesos. Mantiene el contenido protegido en la heladera o en una
              cava, y su tapa se convierte en una elegante bandeja para servir
              al darle la vuelta. <br />
              Con una capacidad de 3,5 L, la Cheese Box puede contener hasta 10
              piezas. Fue diseñada para un almacenamiento óptimo, tanto dentro
              de la caja como en el refrigerador. Su forma angosta y profunda
              ocupa poco espacio en los estantes, y su tapa plana permite
              colocar otros recipientes encima. <br />
              Las asas laterales facilitan el manejo tanto en la heladera como
              en la mesa. Pensada para llevar el queso directamente de la
              heladera a la mesa, solo hay que dar vuelta la tapa, acomodar los
              quesos enteros o en rodajas y servir. <br />
              También resulta muy práctica para comidas tipo buffet o picadas,
              ya que su bandeja es elegante y de tamaño perfecto. Sus líneas
              suaves y su esmaltado fino la convierten en una pieza atractiva de
              vajilla. <br />
              Una vez finalizado el uso, simplemente envolvé los restos de
              queso, colocalos nuevamente en la caja, limpiá la tapa, cerrá y
              guardá.
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
