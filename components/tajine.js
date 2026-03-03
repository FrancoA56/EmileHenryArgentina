"use client";
import Image from "next/image";
import styles from "./productos.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const imagenesFuentes = [
  "/img/tajine/1.jpg",
  "/img/tajine/2.jpg",
  "/img/tajine/3.jpg",
  "/img/tajine/4.jpg",
  "/img/tajine/5.webp",
  "/img/tajine/6.webp",
  "/img/tajine/7.webp",
];

export default function Tajine() {
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
      <section className={styles.main} id="tajine">
        <div className={styles.title_underline}>
          <div className={styles.main_title}>Tajine:</div>
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
              El Tajine de 27 cm de Emile Henry es la pieza ideal para recetas a
              fuego lento llenas de sabor y tradición. Fabricado en cerámica
              Flame®, permite cocinar directamente sobre la hornalla o en el
              horno, conservando la humedad y resaltando los sabores naturales
              de cada ingrediente. Su tapa cónica distintiva favorece la
              circulación del vapor, manteniendo la preparación tierna, jugosa y
              aromática, perfecta para carnes especiadas, vegetales y guisos.
              <br /> Cerámica Flame® resistente al fuego directo y al horno
              Ideal para cocciones lentas y saludables.
              <br /> Distribuye el calor de forma pareja y controlada. <br />{" "}
              Tapa cónica que concentra el vapor y potencia los sabores. <br />{" "}
              Apto para hornallas a gas y horno.
              <br /> Fácil de limpiar y resistente al desgaste. <br /> Rinde de
              4 a 6 porciones. <br /> Hecho a mano en Francia. <br /> Una pieza
              única que lleva tus platos caseros a otro nivel.
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Línea</div>
            <div className={styles.main_sub_text_línea}>
              <span className={styles.boldi}>Tradicional</span>
              <span className={styles.boldi}>Delight</span>
            </div>
          </div>
          <div className={styles.main_block}>
            <div className={styles.main_sub_title}>Colores</div>
            <div className={styles.variaciones_color}>
              <div className={styles.colorado} title="Colorado"></div>
              <div className={styles.marfil} title="Marfil"></div>
              <div className={styles.delight2} title="Delight"></div>
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
                alt={`Tajine ${i + 1}`}
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
              alt={`Tajine ${selectedImageIndex + 1}`}
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
