import Footer from "@/components/footerProductos";
import Nav from "@/components/navProductos";
import Platos from "@/components/platos";
import Ensaladeras from "@/components/ensaladeras";
import Jarras from "@/components/jarras";
import Aceitera from "@/components/aceitera";
import Vinagrera from "@/components/vinagrera";
import Mantequera from "@/components/mantequera";
import Appetizer from "@/components/appetizer";
import ButterBell from "@/components/butterBell";
import Image from "next/image";
import Link from "next/link";
import styles from "./vajilla.module.css";

export const metadata = {
  title: "Vajilla",
  description:
    "Conocé los productos de la categoria vajilla de la marca Emile Henry en Argentina.",
  alternates: {
    canonical: "https://www.emilehenry.com.ar/vajilla",
  },
};

export default function Vajilla() {
  const plato = "/img/vajilla/plato.png";
  const ensaladera = "/img/vajilla/ensaladera.png";
  const jarra = "/img/vajilla/jarra.png";
  const aceitera = "/img/vajilla/aceitera.png";
  const vinagrera = "/img/vajilla/vinagrera.png";
  const mantequera = "/img/vajilla/mantequera.png";
  const appetizer = "/img/vajilla/appetizer.png";
  const butterBell = "/img/vajilla/butterBell.png";

  const productos = [
    {
      imagen: plato,
      titulo: "Platos",
      link: "/vajilla/#platos",
    },
    {
      imagen: ensaladera,
      titulo: "Ensaladera",
      link: "/vajilla/#ensaladera",
    },
    {
      imagen: jarra,
      titulo: "Jarra",
      link: "/vajilla/#jarra",
    },
    {
      imagen: aceitera,
      titulo: "Aceitera",
      link: "/vajilla/#aceitera",
    },
    {
      imagen: vinagrera,
      titulo: "Vinagrera",
      link: "/vajilla/#vinagrera",
    },

    {
      imagen: mantequera,
      titulo: "Mantequera",
      link: "/vajilla/#mantequera",
    },
    {
      imagen: appetizer,
      titulo: "Appetizer",
      link: "/vajilla/#appetizer",
    },
    {
      imagen: butterBell,
      titulo: "Butter Bell",
      link: "/vajilla/#butterBell",
    },
  ];

  return (
    <>
      <Nav />
      <section>
        <div className={styles.image_container}>
          <Image
            src="/img/vajilla/1.webp"
            alt="vajilla"
            className={styles.main_image}
            fill
          />
          <div className={styles.overlay} />
          <span className={styles.text}>Vajilla</span>
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
      <Platos />
      <Ensaladeras />
      <Jarras />
      <Aceitera />
      <Vinagrera />
      <Mantequera />
      <Appetizer />
      <ButterBell />
      <Footer />
    </>
  );
}
