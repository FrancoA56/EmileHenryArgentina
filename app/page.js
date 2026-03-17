import DondeComprar from "@/components/dondeComprar";
import DondeComprarMayorista from "@/components/dondeComprarMayorista";

export const metadata = {
  title: "Inicio",
  description:
    "Conocé la marca Emile Henry y sus vendedores disponibles en Argentina.",
};


export default function Home() {
  return (
    <>
      <DondeComprar id="donde-comprar" />
      <DondeComprarMayorista id="donde-comprar-Mayorista" />
    </>
  );
}
