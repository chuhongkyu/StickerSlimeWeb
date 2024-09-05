import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Stack from "@/components/stack";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Stack/>
      <Section1/>
      <Stack/>
      <Footer/>
    </main>
  );
}
