"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logoEmile from "../public/img/emilelogoblanco.png";
import styles from "./nav.module.css";
import Link from "next/link";
import WhatsApp from "./whatsApp";
import { HiBars4 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const frases = [
  "LA COMIDA CASERA",
  "UNA COCINA AUTÉNTICA",
  "SABORES QUE ABRAZAN",
];
export default function Nav() {
  const [currentFrase, setCurrentFrase] = useState(0);
  const [fade, setFade] = useState(true);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  const [menuOpen, setMenuOpen] = useState(false);

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
          {!isMobile ? (
            <div className={styles.hover_trigger}>
              <div className={styles.nav_container}>
                <div className={styles.logo}>
                  <Link href="/">
                    <Image src={logoEmile} alt="EmileHenryAR" />
                  </Link>
                </div>
                <div className={styles.nav_links}>
                  {/* <Link href="/productos">PRODUCTOS</Link> */}
                  <Link href="#donde-comprar">DÓNDE COMPRAR</Link>
                  <Link href="/preguntasfrecuentes">PREGUNTAS FRECUENTES</Link>
                  <Link href="/acercade">SOBRE NOSOTROS</Link>
                  <Link href="/productos">PRODUCTOS</Link>
                </div>
                {/* ICONO HAMBURGUESA */}
                <div
                  className={styles.hamburger}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <></> : <HiBars4 />}
                </div>
              </div>
            </div>
          ) : (
              <div className={styles.nav_container}>
                <div className={styles.logo}>
                  <Link href="/">
                    <Image src={logoEmile} alt="EmileHenryAR" />
                  </Link>
                </div>
                <div className={styles.nav_links}>
                  {/* <Link href="/productos">PRODUCTOS</Link> */}
                  <Link href="#donde-comprar">DÓNDE COMPRAR</Link>
                  <Link href="/preguntasfrecuentes">PREGUNTAS FRECUENTES</Link>
                  <Link href="/acercade">ACERCA DE</Link>
                  <Link href="/productos">PRODUCTOS</Link>
                </div>
                {/* ICONO HAMBURGUESA */}
                <div
                  className={styles.hamburger}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <></> : <HiBars4 />}
                </div>
              </div>
          )}
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
        {/* MENÚ DESLIZABLE MÓVIL */}
        <div
          className={`${styles.mobile_menu} ${
            menuOpen ? styles.mobile_menu_open : ""
          }`}
        >
          <div className={styles.cruz} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RxCross2 /> : <></>}
          </div>
          <Link href="/#donde-comprar" onClick={() => setMenuOpen(false)}>
            DÓNDE COMPRAR
          </Link>
          <Link href="/preguntasfrecuentes" onClick={() => setMenuOpen(false)}>
            PREGUNTAS FRECUENTES
          </Link>
          <Link href="/acercade" onClick={() => setMenuOpen(false)}>
            ACERCA DE
          </Link>
          <Link href="/productos" onClick={() => setMenuOpen(false)}>
            PRODUCTOS
          </Link>
        </div>
      </div>
      <WhatsApp />
    </>
  );
}
