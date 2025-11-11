"use client";
import Image from "next/image";
import styles from "./dondeComprarMayorista.module.css";

export default function DondeComprarMayorista() {
  const denisRos = "/img/wholesale-banner.png";

  return (
    <section className={styles.donde_comprar_main} id="donde-comprar">
      <h2 className={styles.donde_comprar_title}>NUESTRO CANAL MAYORISTA</h2>

      <div className={styles.imgContainer}>
        <Image
          src={denisRos}
          alt="denisRos"
          width={1200}   // poné el ancho real de tu imagen
          height={310}   // y el alto real (se ajustará automáticamente)
          className={styles.img}
        />
      </div>
    </section>
  );
}
