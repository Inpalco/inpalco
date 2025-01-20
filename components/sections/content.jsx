import Button from "../ui/button";
import Image from "next/image";
import Section from "../ui/section";

export default function Content({data}) {
  return (
    // CONTAINER
    <Section className="flex-col md:flex-row">
      {/* LEFT */}
      <div className="flex flex-col w-full min-w-80 gap-4">
        <h2>{data.slices.contentSection.title}</h2>
        <p className="secondary">{data.slices.contentSection.content}</p>
        { 
          data.slices.contentSection.href && <Button href={data.slices.contentSection.href}>{data.slices.contentSection.cta}</Button>
        }
      </div>
      {/* RIGHT */}
      <div className="flex w-full">
        <Image 
          className="object-cover rounded-xl md:h-80"
          src={data.slices.contentSection.image}
          width={1920} 
          height={1080} 
          alt={data.slices.contentSection.alt} 
        />
      </div>
    </Section>
  )
}