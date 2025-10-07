"use client";
import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import styles from "./contacto.module.css";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    honeypot: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.honeypot) return;

    const formPayload = {
      access_key: "TU_API_KEY_WEB3FORMS",
      subject: "Nuevo mensaje desde el formulario de contacto",
      from_name: form.nombre,
      replyto: form.email,
      message: form.mensaje,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formPayload),
      });

      if (res.ok) {
        alert("Mensaje enviado correctamente.");
        setForm({ nombre: "", email: "", mensaje: "", honeypot: "" });
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      alert("Error de red al enviar el formulario.");
    }
  };

  return (
    <section id="contacto" className={styles.contacto_section}>
      <div className={styles.overlay}>
        <div className={styles.contacto_container}>
          {/* Columna izquierda: Formulario */}
          <div className={styles.form_container}>
            <h2 className={styles.title}>¿Querés contactarnos?</h2>
            <p className={styles.subtitle}>
              Completá el formulario y te responderemos a la brevedad.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="honeypot"
                style={{ display: "none" }}
                value={form.honeypot}
                onChange={handleChange}
              />

              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className={styles.input}
              />

              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={form.email}
                onChange={handleChange}
                required
                className={styles.input}
              />

              <textarea
                name="mensaje"
                placeholder="Escribí tu mensaje..."
                value={form.mensaje}
                onChange={handleChange}
                required
                className={styles.textarea}
              />

              <button type="submit" className={styles.btn_enviar}>
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Columna derecha: Información de contacto */}
          <div className={styles.info_container}>
            <h3 className={styles.info_title}>Contacto directo</h3>

            <ul className={styles.info_list}>
              <li>
                <FaWhatsapp className={styles.icon} />
                <a
                  href="https://wa.me/5491123053139"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 9 11 2305 3139
                </a>
              </li>
              <li>
                <FaEnvelope className={styles.icon} />
                <a href="mailto:info@emilehenry.com.ar">
                  info@emilehenry.com.ar
                </a>
              </li>
              <li>
                <FaMapMarkerAlt className={styles.icon} />
                <span>Buenos Aires, Argentina</span>
              </li>
              <li>
                <FaClock className={styles.icon} />
                <span>Lun a Vie: 9:00 - 18:00 hs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
