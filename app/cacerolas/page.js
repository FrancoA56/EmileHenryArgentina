import Footer from "@/components/footerProductos";
import Nav from "@/components/navProductos";
import Tajines from "@/components/tajine";
import CacerolaRedonda from "@/components/cacerolaRedonda";
import CacerolaOvalada from "@/components/cacerolaOvalada";
import Cocotte from "@/components/cocotte";
import CheeseBaker from "@/components/cheeseBaker";
import Cookpot from "@/components/cookpot";
import Image from "next/image";
import Link from "next/link";
import styles from "./cacerolas.module.css";

export const metadata = {
  title: "Cacerolas",
  description:
    "Conocé los productos de la categoria cacerolas de la marca Emile Henry en Argentina.",
  alternates: {
    canonical: "https://www.emilehenry.com.ar/cacerolas",
  },
};

export default function Cacerolas() {
  const tajine = "/img/cacerolas/tajine.png";
  const cacerolaRedonda = "/img/cacerolas/cacerolaRedonda.png";
  const cacerolaOvalada = "/img/cacerolas/cacerolaOvalada.png";
  const cocotte = "/img/cacerolas/cocotte.png";
  const cheeseBaker = "/img/cacerolas/cheeseBaker.png";
  const cookpot = "/img/cacerolas/cookpot.png";

  const productos = [
    {
      imagen: tajine,
      titulo: "Tajine",
      link: "/cacerolas/#tajine",
    },
    {
      imagen: cacerolaRedonda,
      titulo: "Cacerola Redonda",
      link: "/cacerolas/#cacerolaRedonda",
    },
    {
      imagen: cacerolaOvalada,
      titulo: "Cacerola Ovalada",
      link: "/cacerolas/#cacerolaOvalada",
    },
    {
      imagen: cocotte,
      titulo: "Cocotte",
      link: "/cacerolas/#cocotte",
    },
    {
      imagen: cheeseBaker,
      titulo: "Cheese Baker",
      link: "/cacerolas/#cheeseBaker",
    },

    {
      imagen: cookpot,
      titulo: "Cookpot",
      link: "/cacerolas/#cookpot",
    },
  ];

  return (
    <>
      <Nav />
      <section>
        <div className={styles.image_container}>
          <Image
            src="/img/cacerolas/1.webp"
            alt="Cacerolas"
            className={styles.main_image}
            fill
          />
          <div className={styles.overlay} />
          <span className={styles.text}>Cacerolas</span>
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
      <Tajines />
      <CacerolaRedonda />
      <CacerolaOvalada />
      <Cocotte />
      <CheeseBaker />
      <Cookpot />
      <Footer />
    </>
  );
}
