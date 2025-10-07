"use client";
import Footer from "@/components/footerProductos";
import Nav from "@/components/navProductos";
import Image from "next/image";
import styles from "../../components/productCarrusel.module.css";
import { useRef } from "react";

const imagenesRamekin = [
  "/img/ramekin/1.webp",
  "/img/ramekin/2.webp",
  "/img/ramekin/3.webp",
  "/img/ramekin/4.webp",
  "/img/ramekin/5.webp",
  "/img/ramekin/6.webp",
];

export default function Ramekin() {
  const title = "Ramekins";
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
            {imagenesRamekin.map((image, i) => (
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
