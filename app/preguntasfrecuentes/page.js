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
        "Nuestra cerámica está hecha con arcilla natural de Borgoña, Francia. Es resistente al choque térmico, se puede usar en horno, microondas y lavavajillas. Además, distribuye el calor de manera uniforme para una cocción perfecta.",
    },
    {
      pregunta: "¿Puedo usar los productos en el horno?",
      respuesta:
        "Sí, todos nuestros productos de cerámica son aptos para horno hasta 270°C. También son resistentes al choque térmico, por lo que pueden pasar del refrigerador directamente al horno.",
    },
    {
      pregunta: "¿Cómo debo limpiar mis productos Emile Henry?",
      respuesta:
        "La mayoría de nuestros productos son aptos para lavavajillas. Para manchas difíciles, recomendamos remojar en agua tibia con detergente suave. Evitar el uso de esponjas abrasivas.",
    },
    {
      pregunta: "¿Tienen garantía los productos?",
      respuesta:
        "Sí, ofrecemos una garantía de 10 años en todos nuestros productos contra defectos de fabricación. La garantía no cubre daños por uso inadecuado o accidentes.",
    },
    {
      pregunta: "¿Dónde puedo comprar productos Emile Henry?",
      respuesta:
        "Puedes encontrar nuestros productos en las tiendas autorizadas listadas en nuestra sección 'Dónde Comprar'. También contamos con distribuidores en línea seleccionados.",
    },
    {
      pregunta: "¿Los productos son aptos para inducción?",
      respuesta:
        "Nuestros productos de cerámica no son aptos para inducción directa. Sin embargo, tenemos una línea especial con base magnética diseñada específicamente para cocinas de inducción.",
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
              <a
                href="mailto:info@emilehenry.com.ar"
                className={styles.contact_button}
              >
                Contactar Soporte <MdOutlineWhatsapp className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
