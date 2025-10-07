"use client";
import Footer from "@/components/footerProductos";
import Nav from "@/components/navProductos";
import Image from "next/image";
import styles from "../../components/productCarrusel.module.css";
import { useRef } from "react";

const imagenesFuentes = [
  "/img/fuente/1.webp",
  "/img/fuente/2.webp",
  "/img/fuente/3.webp",
  "/img/fuente/4.webp",
  "/img/fuente/5.webp",
  "/img/fuente/6.webp",
];

export default function Fuente() {
  const title = "Fuentes";
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 300;
    if (direction === "left") container.scrollLeft -= scrollAmount;
    else container.scrollLeft += scrollAmount;
  };

  return (
    <>
      <Nav />
      <section className={styles.product_carousel}>
        <h2 className={styles.carousel_title}>{title}</h2>

        <div className={styles.carousel_wrapper}>
          <button className={styles.arrow_left} onClick={() => scroll("left")}>
            ‹
          </button>

          <div className={styles.carousel} ref={carouselRef}>
            {imagenesFuentes.map((image, i) => (
              <div key={i} className={styles.product_card}>
                <Image
                  src={image}
                  alt="Producto Emile"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <p>Producto {i + 1}</p>
              </div>
            ))}
          </div>

          <button
            className={styles.arrow_right}
            onClick={() => scroll("right")}
          >
            ›
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
