import Image from "next/image";
import logoEmile from "../public/img/logo-emily.png";
import logoCas from "../public/img/CAS-logotipo-2.png";
import Link from "next/link";
import { TfiInstagram } from "react-icons/tfi";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <section id="footer" className={styles.footer_section}>
      <div className={styles.footer_columns}>
        {/* Columna 1: Logo Emile */}
        <div className={styles.footer_col}>
          <Image
            src={logoEmile}
            alt="Emile Henry"
            className={styles.footer_logo}
          />
        </div>

        {/* Columna 2: Links */}
        <div className={styles.footer_col_links}>
          <Link href="#inicio">PRODUCTOS</Link>
          <Link href="/#donde-comprar">DÓNDE COMPRAR</Link>
          <Link href="/#contacto">CONTACTO</Link>
        </div>

        {/* Columna 3: Redes */}
        <div className={styles.footer_row}>
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
