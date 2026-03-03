import Footer from "@/components/footerProductos";
import Nav from "@/components/navProductos";
import PotBbq from "@/components/potBbq";
import CheeseBaker from "@/components/cheeseBakerBbq";
import Grill from "@/components/dishGrillBbq";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "línea BBQ",
  description:
    "Conocé los nuevo productos de la línea BBQ de la marca Emile Henry en Argentina.",
  alternates: {
    canonical: "https://www.emilehenry.com.ar/bbq",
  },
};

export default function Bbq() {
  const grill = "/img/bbq/grill.webp";
  const pot = "/img/bbq/pot.webp";
  const cheese = "/img/bbq/cheese.webp";

  const productos = [
    {
      imagen: grill,
      titulo: "Grill Dish BBQ",
      link: "/bbq/#dishGrill",
    },
    {
      imagen: pot,
      titulo: "Pot BBQ",
      link: "/bbq/#pot",
    },
    {
      imagen: cheese,
      titulo: "Cheese Baker BBQ",
      link: "/bbq/#cheeseBaker",
    },
  ];

  return (
    <>
      <Nav />
      <section>
        <div className={styles.image_container}>
          <Image
            src="/img/bbqBanner.webp"
            alt="BBQ"
            className={styles.main_image}
            fill
          />
          <div className={styles.overlay} />
          <span className={styles.text}>BBQ</span>
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
      <Grill />
      <PotBbq />
      <CheeseBaker />
      <Footer />
    </>
  );
}
