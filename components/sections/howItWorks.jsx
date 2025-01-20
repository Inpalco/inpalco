import Section from "../ui/section";

export default function HowItWorks({data}) {

  return(
    <Section className="flex-col">
      {/* TITLE */}
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h2>{data.slices.howItWorks.title}</h2>
        <p className="secondary">{data.slices.howItWorks.content}</p>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        {data.slices.howItWorks.steps.map((item, index) => (

          <div key={index} className="flex flex-col gap-4 justify-center items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center border border-purple-500 rounded-full">
              <span className="text-lg text-purple-500">{item.step}</span>
            </div>
            <p>{item.description}</p>
          </div>

        ))}
      </div>
    </Section>
  )
}