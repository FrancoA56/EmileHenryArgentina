"use client";
import { useState } from "react";
import styles from "./contacto.module.css";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    pais: "",
    ciudad: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    // Aquí podrías hacer un fetch o llamar una función para enviar por email
  };

  return (
    <section
    id="contacto"
    className={styles.contacto_section}
    >
      <h2 className={styles.contacto_title}>CONTACTO</h2>
      <form className={styles.contacto_form} onSubmit={handleSubmit}>
        <div className={styles.form_row}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={form.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_row}>
          <input
            type="text"
            name="pais"
            placeholder="País"
            value={form.pais}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={form.ciudad}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_row}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
          />
        </div>

        <div className={styles.form_row}>
          <textarea
            name="mensaje"
            placeholder="Escribí tu mensaje..."
            value={form.mensaje}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
        </div>
        
        <button type="submit" className={styles.enviar_btn}>
          Enviar
        </button>
      </form>
    </section>
  );
}
