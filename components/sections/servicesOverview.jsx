import Card from "../ui/card";
import Image from "next/image";
import Section from "../ui/section";
import Button from "../ui/button";

export default function ServicesOverview({data}) {

  return(
    <Section className="flex-col">
      {/* TITLE */}
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h2>{data.slices.servicesOverview.title}</h2>
        <p className="secondary">{data.slices.servicesOverview.content}</p>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {data.mainContent.services.map((item, index) => (
          <Card key={index} title={item.title} content={item.content}>
            <Image src={`${item.icon}`} alt="alt" width={48} height={48} />
          </Card>
        ))}
      </div>
      {/* CTA */}
      <Button href={"/contact"}>Learn More</Button>
    </Section>
  )
}