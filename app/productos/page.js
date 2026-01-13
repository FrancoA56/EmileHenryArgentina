import ProductosClient from "./productosClient.js";

export const metadata = {
  title: "Productos",
  description: "Conocé los productos de la marca Emile Henry en Argentina.",
  alternates: {
    canonical: "https://www.emilehenry.com.ar/productos",
  },
};

export default function ProductosPage() {
  return <ProductosClient />;
}
