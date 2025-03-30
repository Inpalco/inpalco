import Link from "next/link";
import Footer from "@/components/footer";
import { createClient } from "@/prismicio";
import GoogleForm from "@/components/research/researchForm";

export default async function SurveyOne() {

    const client = createClient();
    const footer = await client.getSingle("footer");
    
    return(
        <main id="topo">
            {/* TITLE */}
            <div className="flex w-full items-center justify-center py-20 bg-purple-100">
                <div className="flex flex-col w-full max-w-7xl gap-2 px-4">
                    <Link className="text-purple-700 font-medium text-lg text-left w-full mb-4 transition hover:text-orange-500 md:w-max hover:scale-105" href="/surveys">Voltar</Link>
                    <span className="text-purple-700">Pesquisa</span>
                    <h1 className="text-purple-600">A Presença de Pessoas com Deficiência nas Redes Sociais</h1>
                </div>
            </div>
            {/* SURVEYS */}
            <div className="flex w-full items-center justify-center py-14 md:py-20">
                <div className="flex flex-col items-center w-full max-w-7xl gap-4 px-4 md:gap-10">
                    <GoogleForm />              
                </div>
            </div>
            <Footer data={footer.data}/>
        </main>
    )
}