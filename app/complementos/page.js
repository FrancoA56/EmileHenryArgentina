"use client";
import Footer from "@/components/footerProductos";
import Nav from "@/components/navProductos";
import Bowl from "@/components/bowl";
import CheeseBox from "@/components/cheeseBox";
import Cobertor from "@/components/cobertor";
import Deep from "@/components/deep";
import Salt from "@/components/salt";
import Porta from "@/components/porta";
import Salero from "@/components/salero";
import Storage from "@/components/storage";
import Image from "next/image";
import Link from "next/link";
import styles from "./complementos.module.css";

export default function Complementos() {
  const bowl = "/img/complementos/bowl.png";
  const cheeseBox = "/img/complementos/cheeseBox.png";
  const cobertor = "/img/complementos/cobertor.png";
  const deep = "/img/complementos/deep.png";
  const salt = "/img/complementos/salt.png";
  const porta = "/img/complementos/porta.png";
  const salero = "/img/complementos/salero.png";
  const storage = "/img/complementos/storage.png";

  const productos = [
    {
      imagen: bowl,
      titulo: "Bowl Preparacion",
      link: "/complementos/#bowl",
    },
        {
      imagen: cheeseBox,
      titulo: "Cheese Box",
      link: "/complementos/#cheeseBox",
    },
    {
      imagen: cobertor,
      titulo: "Cobertor Charlotte",
      link: "/complementos/#cobertor",
    },
    {
      imagen: deep,
      titulo: "Deep Storage Bowl",
      link: "/complementos/#deep",
    },
    {
      imagen: salt,
      titulo: "Salt Pot",
      link: "/complementos/#hogaza",
    },
    {
      imagen: porta,
      titulo: "Porta Utensillos",
      link: "/complementos/#porta",
    },
    {
      imagen: salero,
      titulo: "Salero",
      link: "/complementos/#salero",
    },
    {
      imagen: storage,
      titulo: "Storage",
      link: "/complementos/#storage",
    }
  ];

  return (
    <>
      <Nav />
      <section>
        <div className={styles.image_container}>
          <Image
            src="/img/complementos/1.webp"
            alt="Complementos"
            className={styles.main_image}
            fill
          />
          <div className={styles.overlay} />
          <span className={styles.text}>Complementos</span>
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
      <Bowl />
      <CheeseBox />
      <Cobertor />
      <Deep />
      <Salt />
      <Porta />
      <Salero />
      <Storage />
      <Footer />
    </>
  );
}
