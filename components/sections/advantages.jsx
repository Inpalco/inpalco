import Image from "next/image";
import Section from "../ui/section";

export default function Advantages({data}) {

  return(
    <Section className="flex-col">
      {/* TITLE */}
      <div className="flex flex-col items-center gap-6 text-center">
        <h2>{data.slices.advantages.title}</h2>
        <p className="secondary">{data.slices.advantages.content}</p>
      </div>
      {/* ITEMS */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        
        {data.slices.advantages.items.map((item, index) => (
          <div key={index} className="flex items-start p-10 rounded-xl gap-6">

            <Image src={`${item.icon}`} alt="alt" width={48} height={48} />
            <div className="flex flex-col gap-3">
              <h3>{item.title}</h3>
              <p className="secondary">{item.content}</p>
            </div>

          </div>
        ))}

      </div>

    </Section>
  )
}