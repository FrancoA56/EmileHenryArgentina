import Image from "next/image";
import logoEmile from "../public/img/logo-emily.png";
import logoCas from "../public/img/CAS-logotipo-2.png";
import Link from "next/link";
import styles from "./footer.module.css";
import { IoLogoInstagram } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function Footer() {
  return (
    <section id="footer" className={styles.footer_section}>
      <div className={styles.footer_columns}>
        {/* Columna 1: Logo Emile */}
        <div className={styles.footer_col}>
          <Link href="/"></Link>
          <Image
            src={logoEmile}
            alt="Emile Henry"
            className={styles.footer_logo}
          />
        </div>

        {/* Columna 2: Links */}
        <div className={styles.footer_col_links}>
          <Link href="#donde-comprar">DÓNDE COMPRAR</Link>
          <Link href="/preguntasfrecuentes">PREGUNTAS FRECUENTES</Link>
          <Link href="/acercade">SOBRE NOSOTROS</Link>
          <Link href="/productos">PRODUCTOS</Link>
        </div>

        {/* Columna 3: Redes logo y descripcion*/}
        {/* <div className={styles.footer_row}>
          <div className={styles.footer_row_col}>
            <TfiInstagram className={styles.pt} />
            <a
              href="https://instagram.com/emilehenryarg"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer_red}
            >
              Instagram
            </a>
          </div>
          <div className={styles.footer_row_col}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:info@emilehenry.com.ar" className={styles.footer_red}>info@emilehenry.com.ar</a>
          </div>
        </div> */}
        {/* Columna 3: Redes solo logo*/}

        <div className={styles.footer_row_col}>
            <a
              href="https://instagram.com/emilehenryarg"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer_red}
            >
              <IoLogoInstagram className={styles.icon} />
            </a>
            <a
              href="mailto:info@emilehenry.com.ar"
              className={styles.footer_red}
            >
              <HiOutlineEnvelope className={styles.icon} />
            </a>
        </div>
      </div>

      {/* Línea blanca */}
      <hr className={styles.footer_divider} />

      {/* Abajo final */}
      <div className={styles.footer_bottom}>
        <p>© 2025 EMILE HENRY ARGENTINA. Todos los derechos reservados.</p>
        <a href="https://www.castradeandco.com/" target="_blank">
          <Image src={logoCas} alt="CAS" className={styles.cas_logo} />
        </a>
      </div>
    </section>
  );
}
