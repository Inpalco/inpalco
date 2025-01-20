import AllPosts from "@/components/sections/allPosts";
import BlogHero from "@/components/sections/blogHero";
import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Testimonials from "@/components/sections/testimonials";
import { data } from "@/data/data";

export default function Blog() {
  return (
    <main className="flex flex-col w-full px-5 md:px-0">
      <BlogHero data={data}/>
      <AllPosts data={data}/>
      <Cta data={data}/>
      <Testimonials data={data}/>
      <Faq data={data}/>
      <Footer data={data}/>
    </main>
  );
}
