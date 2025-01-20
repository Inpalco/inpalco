import Button from "../ui/button";
import Image from "next/image";
import Section from "../ui/section";

export default function ContentReverse({data}) {
  return (
    // CONTAINER
    <Section className="flex-col md:flex-row-reverse">
      {/* LEFT */}
      <div className="flex flex-col w-full min-w-80 gap-4">
        <h2>{data.slices.contentSectionReverse.title}</h2>
        <p className="secondary">{data.slices.contentSectionReverse.content}</p>
        {
          data.slices.contentSectionReverse.href && <Button href={data.slices.contentSectionReverse.href}>{data.slices.contentSectionReverse.cta}</Button>
        }
      </div>
      {/* RIGHT */}
      <div className="flex w-full">
        <Image 
          className="object-cover rounded-xl md:h-80"
          src={data.slices.contentSectionReverse.image}
          width={1920} 
          height={1080} 
          alt={data.slices.contentSectionReverse.alt} 
        />
      </div>
    </Section>
  )
}