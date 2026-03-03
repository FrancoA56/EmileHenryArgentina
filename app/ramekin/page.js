import Footer from "@/components/footerProductos";
import Nav from "@/components/navProductos";
import Ramekin8 from "@/components/ramekin8";
import Ramekin9 from "@/components/ramekin9";
import Ramekin10 from "@/components/ramekin10";
import RamekinCreme from "@/components/ramekinCreme";
import Image from "next/image";
import Link from "next/link";
import styles from "./ramekin.module.css";

export const metadata = {
  title: "Ramekin",
  description:
    "Conocé los productos de la categoria ramekin de la marca Emile Henry en Argentina.",
  alternates: {
    canonical: "https://www.emilehenry.com.ar/ramekin",
  },
};

export default function Ramekin() {
  const ramekin8 = "/img/ramekin/ramekin8.png";
  const ramekin9 = "/img/ramekin/ramekin9.png";
  const ramekin10 = "/img/ramekin/ramekin10.png";
  const ramekinCreme = "/img/ramekin/creme.png";

  const productos = [
    {
      imagen: ramekin8,
      titulo: "Ramekin N°8",
      link: "/ramekin/#ramekin8",
    },
    {
      imagen: ramekin9,
      titulo: "Ramekin N°9",
      link: "/ramekin/#ramekin9",
    },
    {
      imagen: ramekin10,
      titulo: "Ramekin N°10",
      link: "/ramekin/#ramekin10",
    },
    {
      imagen: ramekinCreme,
      titulo: "Ramekin Creme Brulee",
      link: "/ramekin/#ramekinCreme",
    },
  ];

  return (
    <>
      <Nav />
      <section>
        <div className={styles.image_container}>
          <Image
            src="/img/ramekin/4.webp"
            alt="Ramekin"
            className={styles.main_image}
            fill
          />
          <div className={styles.overlay} />
          <span className={styles.text}>Ramekines</span>
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
      <Ramekin8 />
      <Ramekin9 />
      <Ramekin10 />
      <RamekinCreme />
      <Footer />
    </>
  );
}
