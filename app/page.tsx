import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact/Contact";
import Pricing from "@/components/Home/Pricing/Pricing";
import Services from "@/components/Home/Services/Services";




export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Pricing />
      <Contact />
    </>
  );
}
