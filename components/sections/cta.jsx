import Section from "../ui/section";
import Button from "../ui/button";
import Image from "next/image";

export default function Cta({data}) {
  return(
    <Section className="flex-col md:flex-row gap-0 md:gap-6" mainClassName="bg-purple-100 rounded-2xl">
      {/* TITLE */}
      <div className="flex flex-col w-full min-w-80 flex-1 gap-4 p-6">
        <h2 className="text-purple-500">{data.slices.cta.title}</h2>
        <p className="text-purple-800">{data.slices.cta.content}</p>
        <Button href={data.slices.cta.href}>{data.slices.cta.cta}</Button>
      </div>
      {/* RIGHT */}
        <Image 
          className="object-cover rounded-xl md:h-60 md:w-60"
          src={data.slices.cta.image}
          width={1920} 
          height={1080} 
          alt={data.slices.cta.alt}
        />
    </Section>
  )
}