import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact/Contact";
import Pricing from "@/components/Home/Pricing/Pricing";
import Profile from "@/components/Home/Profile/Profile";
import Services from "@/components/Home/Service/Service";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      {/* <Employee /> */}
      <Profile />
      <Pricing />
      <Contact />
    </>
  );
}
