"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoEmile from "../public/img/emilelogoblanco.png";
import styles from "./navProductos.module.css";
import { HiBars4 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.hover_trigger}>
          <div className={styles.nav_container}>
            {/* LOGO */}
            <div className={styles.logo}>
              <Link href="/">
                <Image src={logoEmile} alt="EmileHenryAR" />
              </Link>
            </div>

            {/* LINKS DESKTOP */}
            <div className={styles.nav_links}>
              <Link href="/#donde-comprar">DÓNDE COMPRAR</Link>
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
  );
}
