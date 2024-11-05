import ModernExperience from "@/components/Home/AnotherExperience/Experience";
import AnotherOwner from "@/components/Home/AnotherOwner/AnotherOwner";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact/Contact";
import Owners from "@/components/Home/Owners/Owners";
import Pricing from "@/components/Home/Pricing/Pricing";
import Projects from "@/components/Home/Projects/Projects";
import Services from "@/components/Home/Service/Service";
 
 

export default function Home() {
  return (
    <>
      <Banner />
      <Services/>
      <Pricing/>
      {/* <Projects/> */}
      {/* <Owners/> */}
      <ModernExperience/>
      <AnotherOwner/>
      <Contact />
    </>
  );
}
