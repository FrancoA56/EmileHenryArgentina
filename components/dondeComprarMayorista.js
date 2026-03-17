"use client";
import Image from "next/image";
import styles from "./dondeComprarMayorista.module.css";
import banner from "@/public/img/bannerWholesale.webp";
import logo from "@/public/img/logoWs.png";
import { FaWhatsapp, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export default function DondeComprarMayorista() {
  return (
    <section className={styles.donde_comprar_main} id="donde-comprar">
      <div className={styles.border}>
        <p className={styles.hero_text}>
          Venta mayorista: distribución para comercios.
        </p>

        <div className={styles.banner}>
          <Image
            src={banner}
            alt="Banner mayorista"
            fill
            className={styles.banner_img}
            priority
          />

          {/* Overlay oscuro */}
          <div className={styles.overlay}></div>

          {/* Contenido */}
          <div className={styles.banner_content}>
            <Image
              src={logo}
              alt="Logo Wholesale by D&R"
              className={styles.logo}
            />
            <h3>
              Sumalos a tu tienda y ofrecele
              <br /> a tus clientes lo mejor.
            </h3>
            <div className={styles.icons}>
              <a
                href="https://wa.me/5491131618802"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/wholesale.dyr/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a href="mailto:hola@ws-dyr.com">
                <FaRegEnvelope />
              </a>

              <a
                href="https://www.ws-dyr.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mundo}
              >
                <TfiWorld />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
