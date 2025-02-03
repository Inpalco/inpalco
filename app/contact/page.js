// import ContactForm from "@/components/ContactForm";

// export default function Contact({data}) {
//     return (
//         <div className="flex w-full items-center justify-center py-14 md:py-20">
//             <div className="flex flex-col items-start w-full max-w-7xl gap-10 px-4 md:gap-20 md:flex-row">
//                 <div className="flex flex-col gap-4 w-full flex-1">
//                     {/* <h2>{data.title}</h2> */}
//                     <h2>Title</h2>
//                     {/* <p className="secondary">{data.content}</p> */}
//                     <p className="secondary">Lorem</p>
//                 </div>
//                 <div className="w-full flex-1">
//                   <ContactForm/>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Footer from "@/components/footer";

export default async function Contact() {
  const client = createClient();
  const page = await client.getSingle("contact");
  const footer = await client.getSingle("footer");

  return (
    <main id="topo">
      <SliceZone 
        slices={page.data.slices} 
        components={components} 
      />
      <Footer data={footer.data} />
    </main>
  )
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("contact");

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