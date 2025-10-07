"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import sprinklesMore from "../public/img/sprinkles-more.jpg";
import sprinklesMoreNordelta from "../public/img/sprinkles-more-nordelta.jpg";
import denisRos from "../public/img/denis-ros-banner.png";
import styles from "./dondeComprar.module.css";

const images = [sprinklesMore, sprinklesMoreNordelta, denisRos];

export default function DondeComprar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize(); // set inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.donde_comprar_main} id="donde-comprar">
      <h2 className={styles.donde_comprar_title}>DONDE COMPRAR</h2>

      <div className={styles.carousel}>
        {images.map((src, index) => {
          const total = images.length;
          const relativeIndex = (index - currentIndex + total) % total;
          const offset = relativeIndex === 0 ? 0 : relativeIndex > total / 2 ? relativeIndex - total : relativeIndex;

          return (
            <div
              key={index}
              className={styles.carousel_slide}
              style={{
                transform: isMobile
                  ? `translateY(${offset * 120}%) scale(${1 - Math.abs(offset) * 0.2})`
                  : `translateX(${offset * 120}%) scale(${1 - Math.abs(offset) * 0.2})`,
                zIndex: 10 - Math.abs(offset),
                opacity: Math.abs(offset) > 2 ? 0 : 1,
              }}
            >
              <Image
                src={src}
                alt={`Imagen ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: offset === 0 ? "0 10px 20px rgba(0,0,0,0.2)" : "none",
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
