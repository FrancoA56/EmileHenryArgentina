import styles from "./whatsAppAlert.module.css";

function AlertWsp() {
  return (
    <div className={styles.alert}>
      ¿Necesitás ayuda?{" "}
      <a
        href="https://wa.me/5491123053139"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Contáctanos
      </a>
    </div>
  );
}

export default AlertWsp;
