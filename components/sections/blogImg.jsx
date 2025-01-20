import Image from "next/image";
import Section from "../ui/section";

export default function BLogImg({data}) {
  
  return(
    <Section>
      <Image width={1920} height={1080} src={data.mainContent.posts[0].image} alt={data.mainContent.posts[0].alt} className="w-full h-96 object-cover rounded-3xl"/>
    </Section>
  )
}