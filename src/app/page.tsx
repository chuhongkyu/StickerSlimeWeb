import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Section1 from "@/components/section1";
import Stack from "@/components/stack";


export default function Home() {
  return (
    <main>
      <Header/>
      <Banner/>
      <Stack/>
      <Section1/>
      <Stack/>
      <Footer/>
    </main>
  );
}
