"use client";
import Image from "next/image";
import styles from "./page.module.css";
import bannerMadeleine from "@/public/img/platterMadeleine/1.webp";
import bannerBbq from "@/public/img/dishGrillBBQ/1.webp";
import Link from "next/link";

export default function NewPage() {
  return (
    <>
      {/* ===== HERO SUPERIOR ===== */}
      <section className={styles.hero}>
        <h1>New In</h1>
        <p>Disfrutá de nuestros nuevos ingresos</p>
      </section>

      <div className={styles.wrapper}>
        {/* ===== MADELEINE ===== */}
        <section className={styles.splitSection}>
          <div className={styles.imageSide}>
            <Image
              src={bannerMadeleine}
              alt="línea Madeleine"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.textSide}>
            <h2>Línea Madeleine</h2>
            <h3>Elegancia y tradición francesa</h3>
            <p>
              Con su encantador origen francés, su rica historia y su carga
              evocadora, Madeleine no es solo un nombre, sino un eco que resuena
              con el legado de Emile Henry. <br />
              Por eso es el nombre perfecto para nuestra nueva colección
              dedicada a tortas y postres.
            </p>
            <Link href="/madeleine" className={styles.button}>
              Ver colección
            </Link>
          </div>
        </section>
        <div className={styles.mobile}>
          <div className={styles.mobileDivider}></div>
        </div>

        {/* ===== BBQ ===== */}
        <section className={`${styles.splitSection} ${styles.reverse}`}>
          <div className={styles.textSide}>
            <h2>Línea BBQ</h2>
            <h3>Potencia y sabor al máximo</h3>
            <p>
              Plancha, parrilla o fuego a leña: diseñadas para asar, grillar y
              hornear, nuestras piezas revelan aromas ahumados, texturas
              caramelizadas y una generosa doradura en cada bocado.
            </p>
            <Link href="/bbq" className={styles.button}>
              Ver colección
            </Link>
          </div>

          <div className={styles.imageSide}>
            <Image
              src={bannerBbq}
              alt="línea BBQ"
              fill
              className={styles.image}
            />
          </div>
        </section>
      </div>
    </>
  );
}
