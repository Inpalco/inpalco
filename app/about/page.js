import DefaultSection from "@/components/defaultSection";
import Article from "@/components/sections/article";
import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import HowItWorks from "@/components/sections/howItWorks";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import Title from "@/components/sections/title";
import { data } from "@/data/data";

export default function About() {
  return (
    <main className="flex flex-col w-full px-5 md:px-0">
      <DefaultSection/>
      {/* <Title data={data} />
      <ContentReverse data={data}/>
      <Content data={data}/>
      <Article data={data}/>
      <Advantages data={data}/>
      <HowItWorks data={data}/>
      <Team data={data}/>
      <Cta data={data}/>
      <Testimonials data={data}/>
      <Faq data={data}/>
      <Footer data={data}/> */}
    </main>
  );
}
