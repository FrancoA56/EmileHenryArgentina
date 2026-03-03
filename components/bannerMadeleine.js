"use client";
import Image from "next/image";
import styles from "./bannerMadeleine.module.css";
import bannerMadeleine from "@/public/img/bannermadeleineProductos.webp";
import bannerBbq from "@/public/img/bbqBannerProductos.webp";
import Link from "next/link";

export default function Banner() {
  return (
    <div className={styles.bannerWrapper}>
      {/* Banner 1 */}
      <section className={styles.banner}>
        <Link href="/madeleine" className={styles.link}>
          <div className={styles.imageContainer}>
            <Image
              src={bannerMadeleine}
              alt="Nueva línea Madeleine"
              fill
              priority
              className={styles.image}
            />
          </div>

          <div className={styles.overlay} />

          <div className={styles.content}>
            <h1 className={styles.title}>Nueva línea Madeleine</h1>
            <p className={styles.subtitle}>
              Elegancia francesa para tortas memorables{" "}
            </p>
          </div>
        </Link>
      </section>

      {/* Banner 2 */}
      <section className={styles.banner}>
        <Link href="/bbq" className={styles.link}>
          <div className={styles.imageContainer}>
            <Image
              src={bannerBbq}
              alt="Nueva línea BBQ"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.overlay} />

          <div className={styles.content}>
            <h1 className={styles.title}>Nueva línea BBQ</h1>
            <p className={styles.subtitle}>Aromas ahumados y dorado perfecto</p>
          </div>
        </Link>
      </section>
    </div>
  );
}
