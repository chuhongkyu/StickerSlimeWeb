import Banner from "@/components/index/banner";
import Section1 from "@/components/index/section1";
import Stack from "@/components/stack";
import Section2 from "@/components/index/section2";


export default function Home() {
  return (
    <main>
      <Banner/>
      <Stack/>
      <Section1/>
      <Stack/>
      <Section2/>
      <Stack/>
    </main>
  );
}
