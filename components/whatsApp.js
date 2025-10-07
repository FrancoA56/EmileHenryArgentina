import Imagen from "../public/img/whatsapp.png";
import { useState, useRef } from "react";
import AlertWsp from "./whatsAppAlert";
import styles from "./whatsApp.module.css";
import Image from "next/image";

function WhatsApp() {
  const [hover, setHover] = useState(false);
  const hideTimeout = useRef(null);
  const wsp = "5491123053139";

  const copiarWsp = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${wsp}`
      : `https://web.whatsapp.com/send?phone=${wsp}`;
    window.open(url, "_blank");
  };

  const handleMouseEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setHover(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setHover(false);
    }, 300);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hover && <AlertWsp />}
      <button
        onClick={copiarWsp}
        className={styles.button}
        aria-label="Contactar por WhatsApp"
      >
        <Image src={Imagen} alt="Icono de WhatsApp" className={styles.icon} />
      </button>
    </div>
  );
}

export default WhatsApp;
