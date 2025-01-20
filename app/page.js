import Advantages from "@/components/sections/advantages";
import Content from "@/components/sections/content";
import ContentReverse from "@/components/sections/contentReverse";
import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import LastPosts from "@/components/sections/lastPosts";
import ServicesOverview from "@/components/sections/servicesOverview";
import Testimonials from "@/components/sections/testimonials";

import { data } from "@/data/data";

export default function Home() {

  return (
    <main className="flex flex-col w-full px-5 md:px-0">
      <Hero data={data}/>
      <ContentReverse data={data}/>
      <Content data={data}/>
      <ServicesOverview data={data}/>
      <Advantages data = {data}/>
      <Cta data={data}/>
      <LastPosts data={data}/>
      <Testimonials data={data}/>
      <Faq data={data}/>
      <Footer data={data}/>
    </main>
  );
}
