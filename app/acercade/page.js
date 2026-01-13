import styles from "./acercade.module.css";
import Nav from "@/components/navProductos";
import Footer from "@/components/footerProductos";
import pizza from "../../public/img/pizza.jpg";
import granhorno from "../../public/img/granHorno.jpeg";
import Image from "next/image";

export const metadata = {
  title: "Acerca de Emile Henry | Historia y Tradición",
  description:
    "Conoce la historia de Emile Henry, más de 170 años de tradición cerámica francesa",
  alternates: {
    canonical: "https://www.emilehenry.com.ar/acercade",
  },
};

export default function AcercaDePage() {
  return (
    <>
      <Nav />
      <div className={styles.page_container}>
        <div className={styles.hero_section}></div>

        <div className={styles.content_wrapper}>
          <div className={styles.hero_content}>
            <div className={styles.history_title}>Nosotros</div>
            <p className={styles.hero_text}>
              Más de 170 años de tradición y excelencia en cerámica artesanal
              francesa
            </p>
          </div>
          <section className={styles.mission_section}>
            <div className={styles.section_card}>
              <div className={styles.section_text}>
                En <p className={styles.bold}>Emile Henry</p>, creemos en la
                cocina como un momento para disfrutar, compartir y crear
                recuerdos. Diseñamos piezas de cerámica que acompañan cada
                receta, desde las más simples hasta las más especiales, cuidando
                los sabores y logrando una cocción uniforme y natural.
                Fabricamos cada producto en Francia, con dedicación y respeto
                por la tradición, para que puedas llevar del horno a la mesa
                mucho más que comida: experiencias para compartir. excelencia.
              </div>
            </div>
          </section>

          <section className={styles.history_section}>
            <h2 className={styles.history_title}>Nuestra Historia</h2>
            <div className={styles.timeline}>
              <div className={styles.timeline_item}>
                <div className={styles.timeline_marker}>1850</div>
                <div className={styles.timeline_content}>
                  <h3 className={styles.timeline_heading}>Los Inicios</h3>
                  <p className={styles.timeline_text}>
                    Emile Henry funda la compañía en Marcigny, Borgoña, Francia.
                    Comienza la producción de cerámica utilizando las ricas
                    arcillas locales de la región.
                  </p>
                </div>
              </div>

              <div className={styles.timeline_item}>
                <div className={styles.timeline_marker}>1920</div>
                <div className={styles.timeline_content}>
                  <h3 className={styles.timeline_heading}>
                    Innovación y Crecimiento
                  </h3>
                  <p className={styles.timeline_text}>
                    La empresa desarrolla técnicas innovadoras de esmaltado y
                    cocción que hacen que sus productos sean más resistentes y
                    versátiles para el uso diario.
                  </p>
                </div>
              </div>

              <div className={styles.timeline_item}>
                <div className={styles.timeline_marker}>1985</div>
                <div className={styles.timeline_content}>
                  <h3 className={styles.timeline_heading}>
                    Expansión Internacional
                  </h3>
                  <p className={styles.timeline_text}>
                    Emile Henry comienza su expansión internacional, llevando la
                    calidad y tradición francesa a cocinas de todo el mundo,
                    incluida Argentina.
                  </p>
                </div>
              </div>

              <div className={styles.timeline_item}>
                <div className={styles.timeline_marker}>Hoy</div>
                <div className={styles.timeline_content}>
                  <h3 className={styles.timeline_heading}>Presente y Futuro</h3>
                  <p className={styles.timeline_text}>
                    Continuamos siendo una empresa familiar que mantiene viva la
                    tradición artesanal mientras incorporamos las últimas
                    innovaciones para crear productos perfectos para la cocina
                    moderna.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className={styles.values_section}>
        <div className={styles.images_grid}>
          <div className={`${styles.image_item} ${styles.image_up}`}>
            <Image src={granhorno} alt="Gran horno Emile Henry" />
          </div>

          <div className={`${styles.image_item} ${styles.image_down}`}>
            <Image src={pizza} alt="Pizza en horno Emile Henry" />
          </div>
        </div>
      </section>

      <section className={styles.cta_section}>
        <div className={styles.cta_card}>
          <h2 className={styles.cta_title}>Descubrí Nuestros Productos</h2>
          <p className={styles.cta_text}>
            Explora nuestra colección de productos de cerámica artesanal
          </p>
          <a href="/productos" className={styles.cta_button}>
            Ver Productos
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
