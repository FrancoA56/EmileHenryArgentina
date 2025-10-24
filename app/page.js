import Nav from "@/components/nav";
import DondeComprar from "@/components/dondeComprar";
import DondeComprarMayorista from "@/components/dondeComprarMayorista";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <DondeComprar id="donde-comprar" />
      <DondeComprarMayorista id="donde-comprar-Mayorista" />
      <Footer />
    </>
  );
}
