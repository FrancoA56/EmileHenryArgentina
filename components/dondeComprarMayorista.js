"use client";
import Image from "next/image";
import styles from "./dondeComprarMayorista.module.css";

export default function DondeComprarMayorista() {
  const bannerTop = "/img/wholesaleBannerTop.png";
  const bannerWsp = "/img/wholesaleBannerWsp.png";
  const bannerMail = "/img/wholesaleBannerMail.png";

  return (
    <section className={styles.donde_comprar_main} id="donde-comprar">
      <h2 className={styles.donde_comprar_title}>NUESTRO CANAL MAYORISTA</h2>

      <div className={styles.bannerContainer}>
        {/* Parte superior */}
        <Image
          src={bannerTop}
          alt="Banner mayorista superior"
          width={2400}
          height={304}
          className={styles.bannerTop}
        />

        {/* Parte inferior con dos imágenes lado a lado */}
        <div className={styles.bannerBottom}>
          <a
            href="https://wa.me/5491123053139"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={bannerWsp}
              alt="Contacto por WhatsApp"
              width={1200}
              height={316}
              className={styles.bannerBottomImg}
            />
          </a>

          <a
            href="mailto:hola@ws-dyr.com" // ← poné tu mail acá
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={bannerMail}
              alt="Contacto por Mail"
              width={1200}
              height={316}
              className={styles.bannerBottomImg}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
