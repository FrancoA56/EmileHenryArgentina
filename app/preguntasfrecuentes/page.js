import styles from "./preguntas.module.css";
import Nav from "@/components/navProductos";
import Footer from "@/components/footerProductos";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdOutlineWhatsapp } from "react-icons/md";

export const metadata = {
  title: "Preguntas Frecuentes | Emile Henry Argentina",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre nuestros productos",
};

export default function PreguntasFrecuentesPage() {
  const preguntas = [
    {
      pregunta: "¿Qué hace especial a la cerámica de Emile Henry?",
      respuesta:
        "Nuestras piezas son especiales porque están elaboradas con cerámica francesa de alta resistencia, fabricada a partir de arcillas naturales de Borgoña, lo que permite su uso tanto a altas como a bajas temperaturas. Además, no contienen plomo ni cadmio y son 100 % seguras para el contacto con alimentos. Cada producto se fabrica de forma artesanal, lo que garantiza una gran durabilidad y una distribución de calor excepcional. Sus esmaltes son resistentes y seguros, y mantienen su color intacto incluso con el uso continuo. Los diseños combinan elegancia y funcionalidad, convirtiéndose en herramientas confiables para cocinar y hornear. Disponibles en una amplia variedad de colores, los esmaltes no se agrietan, no se decoloran ni pierden intensidad con el paso del tiempo.",
    },
    {
      pregunta: "¿Puedo usar los productos en el horno?",
      respuesta:
        "Sí, nuestros productos pueden utilizarse en el horno, siempre que se trate de piezas de cerámica para cocción (como fuentes, moldes, cazuelas o refractarios). Estos productos están fabricados con cerámica de alta resistencia, diseñada específicamente para soportar altas temperaturas y ofrecer una cocción uniforme. Sin embargo, no todos los productos Emile Henry son aptos para horno. Algunos artículos catalogados como utensilios de cocina o accesorios no están destinados a la cocción y no deben introducirse en el horno. Para un uso seguro, recomendamos comprobar la categoría y las especificaciones de cada producto antes de utilizarlo en el horno.",
    },
    {
      pregunta: "¿Cómo debo limpiar mis productos Emile Henry?",
      respuesta:
        "La mayoría de nuestros productos son aptos para lavavajillas. Para manchas difíciles, recomendamos remojar en agua tibia con detergente suave. Evitar el uso de esponjas abrasivas.",
    },
    {
      pregunta: "¿Tienen garantía los productos?",
      respuesta:
        "Sí, ofrecemos una garantía de 5 a 10 años en todos nuestros productos contra defectos de fabricación. La garantía no cubre daños por uso inadecuado o accidentes.",
    },
    {
      pregunta: "¿Dónde puedo comprar productos Emile Henry?",
      respuesta:
        "Puedes encontrar nuestros productos en las tiendas autorizadas listadas en nuestra sección 'Dónde Comprar'. También contamos con distribuidores mayoristas autorizados. ",
    },
    {
      pregunta: "¿Los productos son aptos para inducción?",
      respuesta:
        "No todos los productos Emile Henry son aptos para cocinas de inducción. Solo la línea especialmente diseñada para inducción es compatible con este tipo de placas, ya que cuenta con una base adaptada que permite una correcta transmisión del calor. Para un uso adecuado, recomendamos comprobar la línea y las especificaciones de cada producto antes de su utilización.",
    },
  ];

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
            {preguntas.map((item, index) => (
              <details key={index} className={styles.faq_item}>
                <summary className={styles.faq_pregunta}>
                  {item.pregunta}
                  <span className={styles.icon}>+</span>
                </summary>
                <div className={styles.faq_respuesta}>
                  <p>{item.respuesta}</p>
                </div>
              </details>
            ))}
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
