import ProductCarousel from "@/components/productCarrusel";
import Footer from "@/components/footerProductos";
import Nav from "@/components/navProductos";

const imagenesTajines = [
  "/img/tajine/1.webp",
  "/img/tajine/2.webp",
  "/img/tajine/3.webp",
  "/img/tajine/4.webp",
  "/img/tajine/5.webp",
  "/img/tajine/6.webp",
];
const imagenesFuentes = [
  "/img/fuente/1.webp",
  "/img/fuente/2.webp",
  "/img/fuente/3.webp",
  "/img/fuente/4.webp",
  "/img/fuente/5.webp",
  "/img/fuente/6.webp",
];
const imagenesRamekin = [
  "/img/ramekin/1.webp",
  "/img/ramekin/2.webp",
  "/img/ramekin/3.webp",
  "/img/ramekin/4.webp",
  "/img/ramekin/5.webp",
  "/img/ramekin/6.webp",
];
const imagenesEnsaladera = [
  "/img/ensaladera/1.webp",
  "/img/ensaladera/2.webp",
  "/img/ensaladera/3.webp",
  "/img/ensaladera/4.webp",
  "/img/ensaladera/5.webp",
  "/img/ensaladera/6.webp",
];

export default function Productos() {
  return (
    <>
      <Nav />
      <main className="productos-page ">
        <ProductCarousel title="Tajines" items={imagenesTajines} />
        <ProductCarousel title="Fuentes de horno" items={imagenesFuentes} />
        <ProductCarousel title="Ramekin" items={imagenesRamekin} />
        <ProductCarousel
          title="Ensaladeras"
          items={imagenesEnsaladera}
        />
      </main>
      <Footer />
    </>
  );
}
