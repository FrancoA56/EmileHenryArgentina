"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/fuenteRedondaMadeleine/1.webp",
  "/img/fuenteRedondaMadeleine/2.jpg",
  "/img/fuenteRedondaMadeleine/3.webp",
  "/img/fuenteRedondaMadeleine/4.jpg",
];

export default function FuenteRedonda() {
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
      <section className={styles.main} id="fuenteRedonda">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Fuente Redonda:</div>
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
              La Fuente Redonda de Emile Henry es ideal para preparar tortas,
              budines, flanes, crumbles y todo tipo de postres, tanto calientes
              como fríos. Su cerámica distribuye el calor de manera uniforme y
              suave, garantizando una cocción homogénea hasta el centro y
              resultados perfectamente levados en cada horneado. <br />
              Sus curvas delicadas y su diseño refinado la convierten en una
              pieza elegante para llevar directamente a la mesa, combinando
              funcionalidad y presentación en un solo producto. <br />
              Cerámica de alta calidad: Difusión homogénea del calor para una
              cocción precisa.
              <br /> Versátil: Ideal para tortas, flanes, crumbles y postres
              fríos. <br />
              Materiales 100% naturales: Libre de PFAS, plomo y PBA.
              <br /> Superficie resistente: No transfiere sabores, no retiene
              olores y permite cortar y servir directamente en la fuente. <br />
              Naturalmente antiadherente: Con mínimo engrasado previo al
              horneado. <br />
              Apta para horno y lavavajillas.
              <br />
              Capacidad máxima: 2,4 L. Capacidad útil: 2,2 L. Medidas: 27 cm de
              diámetro x 6,5 cm de alto.
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
                alt={`Fuente Redonda ${i + 1}`}
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
              alt={`Fuente Redonda ${selectedImageIndex + 1}`}
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
