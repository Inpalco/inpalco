import Image from "next/image";
import Section from "../ui/section";
import { SecondaryButton } from "../ui/button";

export default function AllServices({data}) {

  return(
    <Section className="flex-col">
      {/* TITLE */}
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h2>{data.slices.allServices.title}</h2>
        <p className="secondary">{data.slices.allServices.content}</p>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {data.mainContent.services.map((item, index) => (

          <div key={index} className="flex flex-col gap-4 justify-center items-center text-center mb-10">
            <Image src={`${item.icon}`} alt="alt" width={48} height={48} />
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <h3>{item.title}</h3>
              <p className="secondary">{item.content}</p>
            </div>
            <SecondaryButton href={`/services/${item.id}`}>Saba mais</SecondaryButton>
          </div>

        ))}
      </div>
    </Section>
  )
}