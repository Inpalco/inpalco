import Image from "next/image";
import Section from "../ui/section";

export default function Team({data}) {

  return(
    <Section className="flex-col">
      {/* TITLE */}
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h2>{data.slices.team.title}</h2>
        <p className="secondary">{data.slices.team.content}</p>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {data.slices.team.team.map((item, index) => (

          <div key={index} className="flex flex-col gap-4 justify-center items-center text-center">
            <Image src={`${item.avatar}`} alt={item.alt} width={1920} height={1080} className="w-36 h-36 object-cover rounded-full"/>
            <h3>{item.name}</h3>
            <span>{item.job}</span>
            <p className="secondary">{item.description}</p>
          </div>

        ))}
      </div>
    </Section>
  )
}