"use client";
import Image from "next/image";
import styles from "./dondeComprar.module.css";

import denisRos from "../public/img/DenisBlanco.png";
import sprinklesMore from "../public/img/sprinkles-moreBlanco.png";

import bannerDenis from "@/public/img/bannerDenis.webp";
import bannerSprinkles from "@/public/img/bannerSprinkles.webp";

export default function DondeComprar() {
  return (
    <section className={styles.donde_comprar_main} id="donde-comprar">
      <div className={styles.history_title}>¿Dónde Comprar?</div>

      <div className={styles.border}>
        <p className={styles.hero_text}>
          Venta minorista: locales y tiendas disponibles.
        </p>

        <div className={styles.grid}>
          {/* DENIS ROS */}
          <a
            href="https://www.denis-ros.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bannerCard}
          >
            <Image
              src={bannerDenis}
              alt="Banner Denis Ros"
              className={styles.bannerImage}
            />

            <div className={styles.overlay}></div>

            <div className={styles.logoContainer}>
              <Image src={denisRos} alt="Denis Ros" className={styles.logo} />
            </div>
          </a>

          {/* SPRINKLES MORE */}
          <a
            href="https://www.sprinklesmore.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bannerCard}
          >
            <Image
              src={bannerSprinkles}
              alt="Banner Sprinkles More"
              className={styles.bannerImage}
            />

            <div className={styles.overlay}></div>

            <div className={styles.logoContainer}>
              <Image
                src={sprinklesMore}
                alt="Sprinkles More"
                className={styles.logo}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
