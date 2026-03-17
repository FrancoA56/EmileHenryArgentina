
import Link from "next/link";

export default function NotFound() {
  const buttonStyle = {
    padding: "12px 22px",
    borderRadius: "6px",
    backgroundColor: "#81171e",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    transition: "0.2s",
  };

  return (
    <>

      <main
        style={{
          minHeight: "20vh",
          padding: "120px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "120px",
            fontWeight: "800",
            color: "#81171e",
            margin: 0,
          }}
        >
          404
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "500px",
            lineHeight: "1.5",
          }}
        >
          Esta página no existe o no está disponible.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Link href="/" style={buttonStyle}>
            Inicio
          </Link>

          <Link href="/productos" style={buttonStyle}>
            Productos
          </Link>

          <Link href="/new" style={buttonStyle}>
            Novedades
          </Link>

          <Link href="/preguntasfrecuentes" style={buttonStyle}>
            Preguntas frecuentes
          </Link>

          <Link href="/acercade" style={buttonStyle}>
            Sobre nosotros
          </Link>
        </div>
      </main>

    </>
  );
}