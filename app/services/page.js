import AllServices from "@/components/sections/allServices";
import ContentReverse from "@/components/sections/contentReverse";
import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import HowItWorks from "@/components/sections/howItWorks";
import Testimonials from "@/components/sections/testimonials";
import Title from "@/components/sections/title";
import { data } from "@/data/data";

export default function Services() {
  return (
    <main className="flex flex-col w-full px-5 md:px-0">
      <Title data={data} />
      <ContentReverse data={data}/>
      <AllServices data={data}/>
      <HowItWorks data={data}/>
      <Cta data={data}/>
      <Testimonials data={data}/>
      <Faq data={data}/>
      <Footer data={data}/>
    </main>
  );
}
