import Image from "next/image";
import logoEmile from "../public/img/logo-emily.png";
import logoCas from "../public/img/CAS-logotipo-2.png";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="footer" className="footer-section">
      <div className="footer-columns">
        {/* Columna 1: Logo Emile */}
        <div className="footer-col">
          <Image src={logoEmile} alt="Emile Henry" className="footer-logo" />
        </div>

        {/* Columna 2: Links */}
        <div className="footer-col footer-links">
          <Link href="#inicio">PRODUCTOS</Link>
          <Link href="/#donde-comprar">DÓNDE COMPRAR</Link>
          <Link href="/#contacto">CONTACTO</Link>
        </div>

        {/* Columna 3: Redes */}
        <div className="footer-col">
          <a
            href="https://instagram.com/emilehenryarg"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-red"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Línea blanca */}
      <hr className="footer-divider" />

      {/* Abajo final */}
      <div className="footer-bottom">
        <p>© 2025 EMILE HENRY ARGENTINA. Todos los derechos reservados.</p>
        <Image src={logoCas} alt="CAS" className="cas-logo" />
      </div>
    </section>
  );
}
