"use client";
import Image from "next/image";
import styles from "./dondeComprarMayorista.module.css";

export default function DondeComprarMayorista() {
  return (
    <section className={styles.donde_comprar_main} id="donde-comprar">
      <h2 className={styles.donde_comprar_title}>NUESTRO CANAL MAYORISTA</h2>

      {/* ===== DESKTOP ===== */}
      <div className={`${styles.bannerContainer} ${styles.desktop}`}>
        <Image
          src="/img/wholesaleBannerTop.png"
          alt="Banner mayorista superior"
          width={2400}
          height={304}
          className={styles.bannerTop}
        />

        <div className={styles.bannerBottom}>
          <a
            href="https://wa.me/5491123053139"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/wholesaleBannerWsp.png"
              alt="Contacto por WhatsApp"
              width={1200}
              height={316}
              className={styles.bannerBottomImg}
            />
          </a>

          <a
            href="mailto:hola@ws-dyr.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/wholesaleBannerMail.png"
              alt="Contacto por Mail"
              width={1200}
              height={316}
              className={styles.bannerBottomImg}
            />
          </a>
        </div>
      </div>

      {/* ===== MOBILE ===== */}
      <div className={`${styles.bannerContainer} ${styles.mobile}`}>
        <Image
          src="/img/wholesaleBannerTopMovil.png"
          alt="Banner mayorista superior mobile"
          width={1200}
          height={600}
          className={styles.bannerTop}
        />

        <div className={styles.bannerBottom}>
          <a
            href="https://wa.me/5491123053139"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/wholesaleBannerWspMovil.png"
              alt="Contacto WhatsApp mobile"
              width={1200}
              height={600}
              className={styles.bannerBottomImg}
            />
          </a>

          <a
            href="mailto:hola@ws-dyr.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/wholesaleBannerMailMovil.png"
              alt="Contacto Mail mobile"
              width={1200}
              height={600}
              className={styles.bannerBottomImg}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
