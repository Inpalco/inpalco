import Section from "../ui/section";
import Accordion from "../ui/accordion";

export default function Faq({data}) {

  return(
    <Section className="flex-col md:flex-row">
      {/* LEFT */}
      <div className="flex flex-col gap-4 w-full h-full">
        <h2>{data.mainContent.faq.title}</h2>
        <p className="secondary">{data.mainContent.faq.content}</p>
      </div>

      {/* RIGHT */}
      <div className="w-full">
        <ul className="flex flex-col gap-8">
          {data.mainContent.faq.questions.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </ul>
      </div>
    </Section>
  )
}