import Button from "../ui/button";
import Image from "next/image";
import Section from "../ui/section";

export default function Hero({data}) {
  return (
    // CONTAINER
    <Section className="flex-col md:flex-row mt-0">
        {/* LEFT */}
        <div className="flex flex-col w-full gap-4">
          <span>{data.slices.hero.tag}</span>
          <h1>{data.slices.hero.title}</h1>
          <p className="secondary">{data.slices.hero.content}</p>
          <Button href={data.slices.hero.href}>{data.slices.hero.cta}</Button>
        </div>
        {/* RIGHT */}
        <div className="flex w-full">
          <Image 
            className="object-cover rounded-xl md:h-[22rem]"
            src={data.slices.hero.image}
            width={1920} 
            height={1080} 
            alt={data.slices.hero.alt}
          />
        </div>
    </Section>
  )
}