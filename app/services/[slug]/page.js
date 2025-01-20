import AllServices from "@/components/sections/allServices";
import Article from "@/components/sections/article";
import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Testimonials from "@/components/sections/testimonials";
import Title from "@/components/sections/title"
import { data } from "@/data/data";

export default async function Service({ params }) {
    const slug = (await params).slug
    // return <div>My Post: {slug}</div>
    return(
        <main className="flex flex-col w-full px-5 md:px-0">
            <Title data={data} />
            <Article data={data} />
            <AllServices data={data}/>
            <Cta data={data}/>
            <Testimonials data={data}/>
            <Faq data={data}/>
            <Footer data={data}/>
        </main>
    )
  }