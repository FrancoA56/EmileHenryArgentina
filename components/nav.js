"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logoEmile from "../public/img/emilelogoblanco.png";
import styles from "./nav.module.css";
import Link from "next/link";
import WhatsApp from "./whatsApp";

const frases = [
  "LA COMIDA CASERA",
  "UNA COCINA AUTÉNTICA",
  "SABORES QUE ABRAZAN",
];
export default function Nav() {
  const [currentFrase, setCurrentFrase] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // ocultar con animación
      setTimeout(() => {
        setCurrentFrase((prev) => (prev + 1) % frases.length);
        setFade(true); // mostrar con animación
      }, 500); // duración de la salida
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.hero}>
        <video
          className={styles.video_bg}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/video/emilehenry-video.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>

        <div className={styles.overlay}>
          <div className={styles.video_dark_top} />
          <div className={styles.hover_trigger}>
            <div className={styles.nav_container}>
              <div className={styles.logo}>
                <Image src={logoEmile} alt="EmileHenryAR" />
              </div>
              <div className={styles.nav_links}>
                {/* <Link href="/productos">PRODUCTOS</Link> */}
                <Link href="#donde-comprar">DÓNDE COMPRAR</Link>
                <Link href="#contacto">CONTACTO</Link>
              </div>
            </div>
          </div>
          <div className={styles.hover_bar} />
        </div>

        <div className={styles.main_text}>
          <strong> EL PLACER DE </strong>
        </div>
        <div
          className={`${styles.main_text_2} ${
            fade ? styles.fade_in : styles.fade_out
          }`}
        >
          {frases[currentFrase]}
        </div>
      </div>
      <WhatsApp />
    </>
  );
}
