import styles from "./acercade.module.css";
import Nav from "@/components/navProductos";
import Footer from "@/components/footerProductos";

export const metadata = {
  title: "Acerca de Emile Henry | Historia y Tradición",
  description:
    "Conoce la historia de Emile Henry, más de 170 años de tradición cerámica francesa",
};

export default function AcercaDePage() {
  return (
    <>
      <Nav />
      <div className={styles.page_container}>
        <div className={styles.hero_section}>
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>Acerca de Nosotros</h1>
            <p className={styles.hero_text}>
              Más de 170 años de tradición y excelencia en cerámica artesanal
              francesa
            </p>
          </div>
        </div>

        <div className={styles.content_wrapper}>
          <section className={styles.mission_section}>
            <div className={styles.section_card}>
              <h2 className={styles.section_title}>Nuestra Misión</h2>
              <p className={styles.section_text}>
                En Emile Henry, nuestra misión es crear productos de cerámica de
                la más alta calidad que combinen funcionalidad, belleza y
                durabilidad. Desde 1850, hemos mantenido viva la tradición
                artesanal francesa, utilizando arcilla natural de Borgoña para
                crear piezas que acompañan a las familias por generaciones. Cada
                producto es el resultado de nuestra pasión por la cocina y
                nuestro compromiso con la excelencia.
              </p>
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

          <section className={styles.values_section}>
            <h2 className={styles.values_title}>Nuestros Valores</h2>
            <div className={styles.values_grid}>
              <div className={styles.value_card}>
                <div className={styles.value_icon}>🏺</div>
                <h3 className={styles.value_heading}>Tradición</h3>
                <p className={styles.value_text}>
                  Más de 170 años de sabiduría artesanal transmitida de
                  generación en generación.
                </p>
              </div>

              <div className={styles.value_card}>
                <div className={styles.value_icon}>✨</div>
                <h3 className={styles.value_heading}>Calidad</h3>
                <p className={styles.value_text}>
                  Cada pieza es inspeccionada cuidadosamente para garantizar los
                  más altos estándares.
                </p>
              </div>

              <div className={styles.value_card}>
                <div className={styles.value_icon}>🌍</div>
                <h3 className={styles.value_heading}>Sostenibilidad</h3>
                <p className={styles.value_text}>
                  Utilizamos materiales naturales y procesos responsables con el
                  medio ambiente.
                </p>
              </div>

              <div className={styles.value_card}>
                <div className={styles.value_icon}>❤️</div>
                <h3 className={styles.value_heading}>Pasión</h3>
                <p className={styles.value_text}>
                  El amor por la cocina y la cerámica es el corazón de todo lo
                  que hacemos.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.cta_section}>
            <div className={styles.cta_card}>
              <h2 className={styles.cta_title}>Descubrí Nuestros Productos</h2>
              <p className={styles.cta_text}>
                Explora nuestra colección de productos de cerámica
                artesanal
              </p>
              <a href="/productos" className={styles.cta_button}>
                Ver Productos
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
