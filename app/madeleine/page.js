import Platter from "@/components/platterMadeleine";
import Redondo from "@/components/moldeMadeleine";
import Loaf from "@/components/loafMadeleine";
import Corazon from "@/components/corazonMadeleine";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "línea Madeleine",
  description:
    "Conocé los nuevo productos de la línea Madeleine de la marca Emile Henry en Argentina.",
  alternates: {
    canonical: "https://www.emilehenry.com.ar/madeleine",
  },
};

export default function Madeleine() {
  const loaf = "/img/madeleine/loaf.webp";
  const corazon = "/img/madeleine/corazon.webp";
  const platter = "/img/madeleine/platter.webp";
  const redonda = "/img/madeleine/redonda.webp";

  const productos = [
    {
      imagen: loaf,
      titulo: "Loaf",
      link: "/madeleine/#loaf",
    },
    {
      imagen: corazon,
      titulo: "Molde Corazon",
      link: "/madeleine/#corazon",
    },
    {
      imagen: platter,
      titulo: "Rectangular Platter",
      link: "/madeleine/#platter",
    },
    {
      imagen: redonda,
      titulo: "Fuente Redonda Madeleine",
      link: "/madeleine/#fuenteRedonda",
    },
  ];

  return (
    <>
      <section>
        <div className={styles.image_container}>
          <Image
            src="/img/madeleine/1.webp"
            alt="Madeleine"
            className={styles.main_image}
            fill
          />
          <div className={styles.overlay} />
          <span className={styles.text}>Madeleine</span>
        </div>

        <div className={styles.grid}>
          {productos.map((producto, index) => (
            <Link href={producto.link} key={index} className={styles.grid_item}>
              <div className={styles.image_wrapper}>
                <Image
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.titulo}
                  width={300}
                  height={300}
                />
              </div>
              <h3 className={styles.product_title}>{producto.titulo}</h3>
            </Link>
          ))}
        </div>
      </section>
      <section></section>
      <Loaf />
      <Corazon />
      <Platter />
      <Redondo />
    </>
  );
}
