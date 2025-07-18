"use client";
import Image from "next/image";
import logoEmile from "../public/img/logo-emily.png";
import { useRef } from "react";
import image1 from "../public/img/slide-1.png";
import image2 from "../public/img/slide-2.png";
import image3 from "../public/img/slide-3.png";
import image4 from "../public/img/slide-4.png";
import image5 from "../public/img/slide-5.png";
import image6 from "../public/img/slide-6.png";
import styles from "./productCarrusel.module.css";

export default function ProductCarousel({ title }) {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 300;
    if (direction === "left") container.scrollLeft -= scrollAmount;
    else container.scrollLeft += scrollAmount;
  };

  // Simulamos 6 productos (todos con el mismo logo)
  const items = [image1, image2, image3, image4, image5, image6];

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
