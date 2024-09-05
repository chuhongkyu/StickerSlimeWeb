import Banner from "@/components/index/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Section1 from "@/components/index/section1";
import Stack from "@/components/stack";


export default function Home() {
  return (
    <main>
      <Banner/>
      <Stack/>
      <Section1/>
      <Stack/>
    </main>
  );
}
