import TopLinks from "@/components/topLinks";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import OurServices from "@/components/ourServices";
import OurProocess from "@/components/ourProcess";
import IntroVideo from "@/components/introVideo";
import WhyChooseUs from "@/components/whyChooseUs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <OurServices />
      <OurProocess />
      <IntroVideo />
      <WhyChooseUs />
    </>
  );
}
