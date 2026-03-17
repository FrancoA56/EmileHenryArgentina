import Baguette from "@/components/baguette";
import MiniBaguette from "@/components/miniBaguette";
import Ciabatta from "@/components/ciabatta";
import Focaccia from "@/components/focaccia";
import Hogaza from "@/components/hogaza";
import Cloche from "@/components/cloche";
import Corona from "@/components/corona";
import Image from "next/image";
import Link from "next/link";
import styles from "./pan.module.css";

export const metadata = {
  title: "Moldes de Pan",
  description:
    "Conocé los productos de la categoria moldes de pan de la marca Emile Henry en Argentina.",
  alternates: {
    canonical: "https://www.emilehenry.com.ar/pan",
  },
};

export default function Pan() {
  const productos = [
    {
      imagen: "/img/pan/ciabatta.png",
      titulo: "Molde Ciabatta",
      link: "/pan/#ciabatta",
    },
    {
      imagen: "/img/pan/hogaza.png",
      titulo: "Molde Hogaza",
      link: "/pan/#hogaza",
    },
    {
      imagen: "/img/pan/cloche.png",
      titulo: "Molde Cloche",
      link: "/pan/#cloche",
    },
    {
      imagen: "/img/pan/corona.png",
      titulo: "Molde Corona",
      link: "/pan/#corona",
    },
    {
      imagen: "/img/pan/focaccia.png",
      titulo: "Molde Focaccia",
      link: "/pan/#focaccia",
    },
    {
      imagen: "/img/pan/baguette.png",
      titulo: "Molde Baguette",
      link: "/pan/#baguette",
    },
    {
      imagen: "/img/pan/miniBaguette.png",
      titulo: "Molde Mini Baguette",
      link: "/pan/#miniBaguette",
    },
  ];

  // separar los productos
  const primerosCuatro = productos.slice(0, 4);
  const ultimosTres = productos.slice(4);

  return (
    <>
      <section>
        <div className={styles.image_container}>
          <Image
            src="/img/pan/1.webp"
            alt="FuenteDeHorno"
            className={styles.main_image}
            fill
          />
          <div className={styles.overlay} />
          <span className={styles.text}>Pan</span>
        </div>

        <div className={styles.productos}>
          {/* Primera fila: 4 columnas */}
          <div className={styles.gridFila1}>
            {primerosCuatro.map((producto, index) => (
              <Link
                href={producto.link}
                key={index}
                className={styles.grid_item}
              >
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

          {/* Segunda fila: 3 columnas (centradas) */}
          <div className={styles.gridFila2}>
            {ultimosTres.map((producto, index) => (
              <Link
                href={producto.link}
                key={index}
                className={styles.grid_item}
              >
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
        </div>
      </section>

      {/* Secciones individuales */}
      <Ciabatta />
      <Hogaza />
      <Cloche />
      <Corona />
      <Focaccia />
      <Baguette />
      <MiniBaguette />
    </>
  );
}
