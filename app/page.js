import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Footer from "@/components/footer";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");
  const posts = await client.getAllByType("posts");
  const services = await client.getAllByType("services");
  const testimonials = await client.getAllByType("testimonials");
  const footer = await client.getSingle("footer");

  const contextItems = {
    posts,
    services,
    testimonials
  }  

  const scrollToTop = () => {
    document.getElementById('topo').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main id="topo">
      <SliceZone 
        slices={page.data.slices} 
        components={components} 
        context={contextItems}
      />
      <Footer data={footer.data} />
    </main>
  )
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: isFilled.keyText(page.data.meta_title)
        ? page.data.meta_title
        : undefined,
      description: isFilled.keyText(page.data.meta_description)
        ? page.data.meta_description
        : undefined,
      images: isFilled.image(page.data.meta_image)
        ? [asImageSrc(page.data.meta_image)]
        : undefined,
    },
  };
}
