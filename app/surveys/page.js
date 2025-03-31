import Link from "next/link";
import Footer from "@/components/footer";
import { createClient } from "@/prismicio";
import { ListMagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export default async function Surveys() {

    const client = createClient();
    const footer = await client.getSingle("footer");
    
    return(
        <main id="topo">
            {/* TITLE */}
            <div className="flex w-full items-center justify-center py-20 bg-purple-100">
                <div className="flex flex-col w-full max-w-7xl gap-2 px-4">
                    <Link className="text-purple-700 font-medium text-lg text-left w-full mb-4 transition hover:text-orange-500 md:w-max hover:scale-105" href="/">Voltar</Link>
                    <span className="text-purple-700">Pesquisas</span>
                    <h1 className="text-purple-600">Central de pesquisas</h1>
                    <p>Bem-vindo à nossa Central de Pesquisas! Aqui, lançamos pesquisas periódicas sobre diversos temas, como acessibilidade, cultura e inclusão. Sua participação é essencial para impulsionar mudanças e tornar nossos projetos ainda mais relevantes. Contribua com sua opinião e ajude a construir um futuro mais acessível para todos!</p>
                </div>
            </div>
            {/* SURVEYS */}
            <div className="flex w-full items-center justify-center py-14 md:py-20">
                <div className="flex flex-col items-center w-full max-w-7xl gap-4 px-4 md:gap-10">
                    <div className="flex flex-col gap-4 flex-1 text-center">
                        <h2>Pesquisas em andamento</h2>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-6 items-stretch justify-items-center md:grid-cols-3">
                    {/* ITEMS */}
                        {/* PESQUISA 1 */}
                        <div className="flex flex-row items-start justify-center gap-6 p-8 bg-white border border-slate-300 rounded-2xl transition  hover:scale-105 hover:border-purple-400 group hover:drop-shadow-lg">
                            <ListMagnifyingGlass size={32} className="text-purple-500 min-w-8"/>
                            <div className="flex flex-col gap-6">
                                <h3>A Presença de Pessoas com Deficiência nas Redes Sociais</h3>
                                <p className="secondary">Esta pesquisa tem como objetivo compreender a experiência de pessoas com deficiência nas redes sociais, identificando desafios de acessibilidade e formas de tornar esses espaços mais inclusivos.</p>
                                <Link className="py-4 px-4 rounded-full text-center text-purple-700 transition hover:bg-purple-500 hover:text-white  bg-purple-100 w-full md:w-max" href={"/surveys/survey-one"}>Responder pesquisa</Link>
                            </div>
                        </div>
                        {/* PESQUISA 2 */}
                        <div className="flex flex-row items-start justify-center gap-6 p-8 bg-white border border-slate-300 rounded-2xl transition  hover:scale-105 hover:border-purple-400 group hover:drop-shadow-lg">
                            <ListMagnifyingGlass size={32} className="text-purple-500 min-w-8"/>
                            <div className="flex flex-col gap-6">
                                <h3>(Teste) A Presença de Pessoas com Deficiência nas Redes Sociais</h3>
                                <p className="secondary">Esta pesquisa tem como objetivo compreender a experiência de pessoas com deficiência nas redes sociais, identificando desafios de acessibilidade e formas de tornar esses espaços mais inclusivos.</p>
                                <Link className="py-4 px-4 rounded-full text-center text-purple-700 transition hover:bg-purple-500 hover:text-white  bg-purple-100 w-full md:w-max" href={"/surveys/survey-two"}>Responder pesquisa</Link>
                            </div>
                        </div>

                    </div>                
                </div>
            </div>
            <Footer data={footer.data}/>
        </main>
    )
}