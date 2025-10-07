"use client";
import Image from "next/image";
import { useRef } from "react";
import styles from "./productCarrusel.module.css";

export default function ProductCarousel({ title, items }) {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 300;
    if (direction === "left") container.scrollLeft -= scrollAmount;
    else container.scrollLeft += scrollAmount;
  };

  return (
    <section className={styles.product_carousel}>
      <h2 className={styles.carousel_title}>{title}</h2>

      <div className={styles.carousel_wrapper}>
        <button className={styles.arrow_left} onClick={() => scroll("left")}>
          ‹
        </button>

        <div className={styles.carousel} ref={carouselRef}>
          {items.map((image, i) => (
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

        <button className={styles.arrow_right} onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </section>
  );
}
