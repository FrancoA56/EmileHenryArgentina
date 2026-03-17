import FuenteHorno from "@/components/fuenteParaHorno";
import MoldeClafoutis from "@/components/moldeClafoutis";
import MoldeCorazon from "@/components/moldeCorazon";
import MoldeTartera from "@/components/moldeTart";
import MoldeRectangular from "@/components/moldeRectangular";
import MoldeOnduladoBajo from "@/components/moldeOnduladoBajo";
import MoldeOnduladoAlto from "@/components/moldeOnduladoAlto";
import MoldeSouffle from "@/components/moldeSouffle";
import Image from "next/image";
import Link from "next/link";
import styles from "./fuente.module.css";

export const metadata = {
  title: "Fuentes Para Horno",
  description:
    "Conocé los productos de la categoria fuentes para horno de la marca Emile Henry en Argentina.",
  alternates: {
    canonical: "https://www.emilehenry.com.ar/fuente",
  },
};

export default function FuentesParaHorno() {
  const moldeCorazon = "/img/fuentes/moldeCorazonpng.png";
  const moldeOnduladoAlto = "/img/fuentes/moldeOnduladoAltopng.png";
  const fuenteHorno = "/img/fuentes/fuentepng.png";
  const moldeRectangular = "/img/fuentes/moldeRectangularpng.png";
  const moldeCircular = "/img/fuentes/moldeCircularTartpng.png";
  const moldeClafoutis = "/img/fuentes/moldeClafoutispng.png";
  const moldeOnduladoBajo = "/img/fuentes/moldeOnduladoBajopng.png";
  const moldeSouffle = "/img/fuentes/moldeSoufflepng.png";

  const productos = [
    {
      imagen: fuenteHorno,
      titulo: "Fuente para Horno",
      link: "/fuente/#fuenteHorno",
    },
    {
      imagen: moldeClafoutis,
      titulo: "Molde Clafoutis",
      link: "/fuente/#moldeClafoutis",
    },
    {
      imagen: moldeCorazon,
      titulo: "Molde Corazón",
      link: "/fuente/#moldeCorazon",
    },
    {
      imagen: moldeCircular,
      titulo: "Molde Circular Tart",
      link: "/fuente/#moldeCircularTart",
    },
    {
      imagen: moldeRectangular,
      titulo: "Molde Rectangular",
      link: "/fuente/#moldeRectangular",
    },

    {
      imagen: moldeOnduladoBajo,
      titulo: "Molde Ondulado Bajo",
      link: "/fuente/#moldeOnduladoBajo",
    },
    {
      imagen: moldeOnduladoAlto,
      titulo: "Molde Ondulado Alto",
      link: "/fuente/#moldeOnduladoAlto",
    },
    {
      imagen: moldeSouffle,
      titulo: "Molde Souffle",
      link: "/fuente/#moldeSouffle",
    },
  ];

  return (
    <>
      <section>
        <div className={styles.image_container}>
          <Image
            src="/img/fuentes/1.webp"
            alt="FuenteDeHorno"
            className={styles.main_image}
            fill
          />
          <div className={styles.overlay} />
          <span className={styles.text}>Moldes y Fuentes</span>
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
      <FuenteHorno />
      <MoldeClafoutis />
      <MoldeCorazon />
      <MoldeTartera />
      <MoldeRectangular />
      <MoldeOnduladoBajo />
      <MoldeOnduladoAlto />
      <MoldeSouffle />
    </>
  );
}
