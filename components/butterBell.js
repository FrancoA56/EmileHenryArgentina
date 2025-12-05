"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/butterBell/1.webp",
  "/img/butterBell/2.webp",
  "/img/butterBell/3.webp",
  "/img/butterBell/4.webp",
  "/img/butterBell/5.webp",
  "/img/butterBell/6.webp",
  "/img/butterBell/7.webp",
];

export default function ButterBell() {
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
      <section className={styles.main} id="butterBell">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Butter Bell:</div>
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
              El Butter Bell de Emile Henry reinventa la forma de conservar la
              manteca, combinando un diseño elegante con tecnología hermética de
              origen francés. Gracias a su sistema de sellado al vacío con agua,
              disfrutarás de manteca blanda y lista para untar en panes,
              tostadas o baguettes en cualquier momento, sin perder su frescura
              ni absorber olores. Tecnología hermética: El sistema de agua crea
              un sello natural que protege la manteca de oxidación y olores
              externos hasta 30 días sin refrigeración. Material premium:
              Fabricado en cerámica esmaltada de alta calidad, libre de plomo,
              cadmio y níquel. Diseño funcional: Base ergonómica y tapa ajustada
              para un manejo fácil y seguro. Fácil de usar: Solo coloca la
              manteca en la tapa, añade agua fría en la base y listo.
              Mantenimiento simple: Lavable a mano o en lavavajillas,
              conservando su brillo y higiene. Versatilidad: Ideal para manteca
              tradicional, salada o infusionada con hierbas. Garantía de 10
              años: Respaldado por la calidad y durabilidad de Emile Henry.
              Capacidad: Para 1 barra de manteca estándar (aprox. 125g).
              Fabricado en Francia, el Butter Bell es un clásico moderno que une
              funcionalidad y elegancia. ¡Descubrí el placer de la manteca
              fresca y untable en cada comida, como en una auténtica boulangerie
              parisina! 🥖🧈
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
              <div className={styles.marfil} title="Marfil"></div>
              <div className={styles.newblue} title="New Blue"></div>
              <div
                className={styles.blancoBrillante}
                title="Blanco brillante"
              ></div>
              <div className={styles.azulNoche} title="Azul Noche"></div>
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
                alt={`ButterBell ${i + 1}`}
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
              alt={`ButterBell ${selectedImageIndex + 1}`}
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
