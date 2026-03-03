"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/platterMadeleine/1.webp",
  "/img/platterMadeleine/2.jpg",
  "/img/platterMadeleine/3.webp",
  "/img/platterMadeleine/4.webp",
  "/img/platterMadeleine/5.webp",
];

export default function PlatterMadeleine() {
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
          : selectedImageIndex - 1,
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === imagenesFuentes.length - 1
          ? 0
          : selectedImageIndex + 1,
      );
    }
  };

  return (
    <>
      <section className={styles.main} id="platter">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Rectangular Platter:</div>
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
              La Rectangular Platter de Emile Henry es ideal para presentar
              tortas, budines, panes y postres con elegancia y estilo. Su
              formato alargado y estrecho permite servir piezas enteras o en
              porciones, realzando cada preparación en la mesa. <br />
              Sus curvas suaves y su diseño refinado combinan un estilo
              contemporáneo con un aire clásico, convirtiéndola en una pieza
              versátil tanto para recetas dulces como saladas. <br />
              Cerámica de alta calidad: Material neutro que no altera sabores ni
              retiene olores.
              <br /> Formato alargado: Ideal para tortas, panes, budines y mini
              pastelería. <br />
              Superficie resistente: Permite cortar directamente en la fuente
              sin dañarla.
              <br />
              Versátil: Apta para horno, microondas y freezer. <br />
              Apta para lavavajillas. Duradera y resistente al uso diario.
              <br />
              Medidas: 31,5 x 15 x 2 cm. Peso: 0,73 kg.
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Línea</div>
            <div className={styles.main_sub_text_línea}>
              <span className={styles.boldi}>Madeleine</span>
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Colores</div>
            <div className={styles.variaciones_color}>
              <div className={styles.roseCandy} title="Rose Candy"></div>
              <div className={styles.marfil} title="Marfil"></div>
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
                alt={`Rectangular Platter ${i + 1}`}
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
              alt={`Rectangular Platter ${selectedImageIndex + 1}`}
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
