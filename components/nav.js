import Image from "next/image";
import logoEmile from "../public/img/emilelogoblanco.png";
import styles from "./nav.module.css";

export default function Nav() {
  return (
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
              <a href="/productos">PRODUCTOS</a>
              <a href="#donde-comprar">DÓNDE COMPRAR</a>
              <a href="#contacto">CONTACTO</a>
            </div>
          </div>
        </div>
        <div className={styles.hover_bar} />
      </div>
      <div className={styles.main_text}>
        <strong> EL PLACER DE </strong>
      </div>
      <div className={styles.main_text_2}> LA COMIDA CASERA</div>
    </div>
  );
}
