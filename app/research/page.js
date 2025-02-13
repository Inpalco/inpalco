import { createClient } from "@/prismicio";
import Footer from "@/components/footer";
import ResearchForm from "@/components/research/researchForm";

export default async function Contact() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <main id="topo">
      <div className="flex w-full items-center justify-center py-14 md:py-20">
        <div className="flex flex-col items-start w-full max-w-7xl gap-10 px-4 md:gap-20 md:flex-row">
          <div className="flex flex-col gap-4 w-full flex-1">
            <ResearchForm />
            <Footer data={footer.data} />
          </div>
        </div>
      </div>
    </main>
  )
}