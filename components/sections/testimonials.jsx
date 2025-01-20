import Card from "../ui/card";
import Image from "next/image";
import Section from "../ui/section";
import Button from "../ui/button";

export default function Testimonials({data}) {


  return(
    <Section className="flex-col">
      {/* TITLE */}
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h2>{data.slices.testimonials.title}</h2>
        <p className="secondary">{data.slices.testimonials.content}</p>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {data.mainContent.testimonials.map((item, index) => (
          <Card key={index} title={item.name} content={item.comment} stars>
            <Image src={`${item.avatar}`} alt="alt" width={1920} height={1080} className="w-12 h-12 object-cover rounded-full" />
          </Card>
        ))}
      </div>
    </Section>
  )
}