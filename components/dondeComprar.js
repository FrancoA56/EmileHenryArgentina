"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import sprinklesMore from "../public/img/sprinkles-more.jpg";
import sprinklesMoreNordelta from "../public/img/sprinkles-more-nordelta.jpg";
import denisRos from "../public/img/denis-ros-banner.png";

// Agregá las imágenes en public/img/ o usá URLs si querés
const images = [sprinklesMore, sprinklesMoreNordelta, denisRos];

export default function DondeComprar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="donde-comprar-main" id="donde-comprar">
      <h2 className="donde-comprar-title">DÓNDE COMPRAR</h2>

      <div className="carousel">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <Image
              src={src}
              alt={`Imagen ${index + 1}`}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
