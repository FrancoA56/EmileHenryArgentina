import styles from "./preguntas.module.css";
import Nav from "@/components/navProductos";
import Footer from "@/components/footerProductos";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Link from "next/link";

export const metadata = {
  title: "Preguntas Frecuentes | Emile Henry Argentina",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre nuestros productos",
  alternates: {
    canonical: "https://www.emilehenry.com.ar/preguntasfrecuentes",
  },
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <Nav />

      <div className={styles.page_container}>
        <div className={styles.content_wrapper}>
          <div className={styles.header_section}>
            <h1 className={styles.main_title}>Preguntas Frecuentes</h1>
            <p className={styles.subtitle}>
              Encuentra respuestas a las preguntas más comunes sobre nuestros
              productos de cerámica
            </p>
          </div>

          <div className={styles.faq_container}>
            {/* Pregunta 1 */}
            <details className={styles.faq_item}>
              <summary className={styles.faq_pregunta}>
                ¿Qué hace especial a la cerámica de Emile Henry?
                <span className={styles.icon}>+</span>
              </summary>
              <div className={styles.faq_respuesta}>
                Nuestras piezas son especiales porque están elaboradas con
                cerámica francesa de alta resistencia, fabricada a partir de
                arcillas naturales de Borgoña, lo que permite su uso tanto a
                altas como a bajas temperaturas. <br />
                Además, no contienen plomo ni cadmio y son 100 % seguras para el
                contacto con alimentos. Cada producto se fabrica de forma
                artesanal, lo que garantiza una gran durabilidad y una
                distribución de calor excepcional. Sus esmaltes son resistentes
                y seguros, y mantienen su color intacto incluso con el uso
                continuo. <br />
                Los diseños combinan elegancia y funcionalidad, convirtiéndose
                en herramientas confiables para cocinar y hornear. Disponibles
                en una amplia variedad de colores, los esmaltes no se agrietan,
                no se decoloran ni pierden intensidad con el paso del tiempo.
              </div>
            </details>

            {/* Pregunta 2 */}
            <details className={styles.faq_item}>
              <summary className={styles.faq_pregunta}>
                ¿Puedo usar los productos en el horno?
                <span className={styles.icon}>+</span>
              </summary>
              <div className={styles.faq_respuesta}>
                Sí, nuestros productos pueden utilizarse en el horno, siempre
                que se trate de piezas de cerámica para cocción (como fuentes,
                moldes, cazuelas o refractarios). Estos productos están
                fabricados con cerámica de alta resistencia, diseñada
                específicamente para soportar altas temperaturas y ofrecer una
                cocción uniforme.
                <br /> Sin embargo, no todos los productos Emile Henry son aptos
                para horno. Algunos artículos catalogados como utensilios de
                cocina o accesorios no están destinados a la cocción y no deben
                introducirse en el horno. <br />
                Para un uso seguro, recomendamos comprobar la categoría y las
                especificaciones de cada producto antes de utilizarlo en el
                horno.
              </div>
            </details>

            {/* Pregunta 3 */}
            <details className={styles.faq_item}>
              <summary className={styles.faq_pregunta}>
                ¿Cómo debo limpiar mis productos Emile Henry?
                <span className={styles.icon}>+</span>
              </summary>
              <div className={styles.faq_respuesta}>
                La mayoría de nuestros productos son aptos para lavavajillas.
                Para manchas difíciles, recomendamos remojar en agua tibia con
                detergente suave. <br />
                Evitar el uso de esponjas abrasivas.
              </div>
            </details>

            {/* Pregunta 4 */}
            <details className={styles.faq_item}>
              <summary className={styles.faq_pregunta}>
                ¿Tienen garantía los productos?
                <span className={styles.icon}>+</span>
              </summary>
              <div className={styles.faq_respuesta}>
                Sí, ofrecemos una garantía de 5 a 10 años en todos nuestros
                productos contra defectos de fabricación.
                <br /> La garantía no cubre daños por uso inadecuado o
                accidentes.
              </div>
            </details>

            {/* Pregunta 5 */}
            <details className={styles.faq_item}>
              <summary className={styles.faq_pregunta}>
                ¿Dónde puedo comprar productos Emile Henry?
                <span className={styles.icon}>+</span>
              </summary>
              <div className={styles.faq_respuesta}>
                Puedes encontrar nuestros productos en las tiendas autorizadas
                listadas en nuestra sección{" "}
                <Link href="/#donde-comprar">Dónde comprar</Link>
                <br />
                También contamos con distribuidores mayoristas autorizados.
              </div>
            </details>

            {/* Pregunta 6 */}
            <details className={styles.faq_item}>
              <summary className={styles.faq_pregunta}>
                ¿Los productos son aptos para inducción?
                <span className={styles.icon}>+</span>
              </summary>
              <div className={styles.faq_respuesta}>
                No todos los productos Emile Henry son aptos para cocinas de
                inducción. Solo la línea Delight, es compatible con este tipo de
                placas, ya que cuenta con una base adaptada que permite una
                correcta transmisión del calor.
                <br />
                Para un uso adecuado, recomendamos comprobar la línea y las
                especificaciones de cada producto antes de su utilización.
              </div>
            </details>
          </div>

          <div className={styles.contact_section}>
            <h2 className={styles.contact_title}>
              ¿No encontraste lo que buscabas?
            </h2>
            <p className={styles.contact_text}>
              Nuestro equipo está para ayudarte con cualquier consulta
            </p>
            <div className={styles.contact_links}>
              <a
                href="mailto:info@emilehenry.com.ar"
                className={styles.contact_button}
              >
                Contactar Soporte <HiOutlineEnvelope className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
