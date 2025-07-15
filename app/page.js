import Nav from "@/components/nav";
import DondeComprar from "@/components/dondeComprar";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <DondeComprar id="donde-comprar" />
      <Contacto id="contacto" />
      <Footer />
    </>
  );
}
