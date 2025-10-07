import Image from "next/image";
import logoEmile from "../public/img/emilelogoblanco.png";
import styles from "./navProductos.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.video_dark_top} />

        <div className={styles.hover_trigger}>
          <div className={styles.nav_container}>
            <div className={styles.logo}>
              <Image src={logoEmile} alt="EmileHenryAR" />
            </div>
            <div className={styles.nav_links}>
              <Link href="/#donde-comprar">DÓNDE COMPRAR</Link>
              <Link href="/#contacto">CONTACTO</Link>
            </div>
          </div>
        </div>
        <div className={styles.hover_bar} />
      </div>
    </div>
  );
}
