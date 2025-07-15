import Image from "next/image";
import logoEmile from "../public/img/logo-emily.png";

export default function Nav() {
  return (
    <div className="hero">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/video/emilehenry-video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div className="overlay">
        <div className="video-dark-top" />

        {/* Hover trigger en top */}
        <div className="hover-trigger">
          <div className="nav-links">
            <a href="/productos">PRODUCTOS</a>
            <a href="#donde-comprar">DÓNDE COMPRAR</a>
            <a href="#contacto">CONTACTO</a>
          </div>
        </div>

        {/* Barra roja */}
        <div className="hover-bar" />

        <div className="content">
          <div className="logo">
            <Image src={logoEmile} alt="EmileHenryAR" />
          </div>
        </div>
      </div>
      <div className="main-text montserrat">
        <strong> EL PLACER DE </strong>
      </div>
      <div className="main-text-2 montserrat"> LA COMIDA CASERA</div>
    </div>
  );
}
