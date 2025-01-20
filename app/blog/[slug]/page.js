import Article from "@/components/sections/article";
import BLogImg from "@/components/sections/blogImg";
import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import LastPosts from "@/components/sections/lastPosts";
import Testimonials from "@/components/sections/testimonials";
import Title from "@/components/sections/title"
import { data } from "@/data/data";

export default async function BlogPage({ params }) {
    const slug = (await params).slug
    // return <div>My Post: {slug}</div>
    return(
        <main className="flex flex-col w-full px-5 md:px-0">
            <Title data={data} />
            <BLogImg data={data} />
            <Article data={data} />
            <LastPosts data={data}/>
            <Cta data={data}/>
            <Testimonials data={data}/>
            <Faq data={data}/>
            <Footer data={data}/>
        </main>
    )
  }