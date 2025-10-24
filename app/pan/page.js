"use client";
import Footer from "@/components/footerProductos";
import Nav from "@/components/navProductos";
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

export default function Pan() {
  const baguette = "/img/pan/baguette.png";
  const miniBaguette = "/img/pan/miniBaguette.png";
  const ciabatta = "/img/pan/ciabatta.png";
  const focaccia = "/img/pan/focaccia.png";
  const hogaza = "/img/pan/hogaza.png";
  const cloche = "/img/pan/cloche.png";
  const corona = "/img/pan/corona.png";

  const productos = [
    {
      imagen: baguette,
      titulo: "Molde Baguette",
      link: "/pan/#baguette",
    },
        {
      imagen: miniBaguette,
      titulo: "Molde Mini Baguette",
      link: "/pan/#miniBaguette",
    },
    {
      imagen: ciabatta,
      titulo: "Molde Ciabatta",
      link: "/pan/#ciabatta",
    },
    {
      imagen: focaccia,
      titulo: "Molde Focaccia",
      link: "/pan/#focaccia",
    },
    {
      imagen: hogaza,
      titulo: "Molde Hogaza",
      link: "/pan/#hogaza",
    },

    {
      imagen: cloche,
      titulo: "Molde Cloche",
      link: "/pan/#cloche",
    },
    {
      imagen: corona,
      titulo: "Molde Corona",
      link: "/pan/#corona",
    }
  ];

  return (
    <>
      <Nav />
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
      <Baguette />
      <MiniBaguette />
      <Ciabatta />
      <Focaccia />
      <Hogaza />
      <Cloche />
      <Corona />
      <Footer />
    </>
  );
}
