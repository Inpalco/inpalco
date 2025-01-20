import { SecondaryButton } from "../ui/button"
import Section from "../ui/section"

export default function Title({data}) {
  return(
    // CONTAINER
    <section className="flex w-full mb-16 bg-purple-100 p-6 md:p-0 rounded-3xl md:rounded-none justify-center">
      <div className="flex flex-col gap-6 my-6 max-w-7xl md:p-10">
        { data.slices.title.previousPage && <SecondaryButton href={data.slices.title.previousPage}>Voltar</SecondaryButton>}
        <span className="text-slate-800">{data.slices.title.tag}</span>
        <h1 className="text-purple-500">{data.slices.title.title}</h1>
        <p className="text-slate-800">{data.slices.title.content}</p>
      </div>
    </section>
  )
}