import ProductCarousel from "@/components/productCarrusel";
import Footer from "@/components/footerProductos";
export default function Productos() {
  return (
    <>
    <main className="productos-page ">
      <ProductCarousel title="Tajines" />
      <ProductCarousel title="Fuentes de horno" />
      <ProductCarousel title="Accesorios para pizza" />
      <ProductCarousel title="Almacenamiento" />
    </main>
    <Footer/>
    </>
  );
}
