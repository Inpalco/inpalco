import Footer from "@/components/footer";
import { createClient } from "@/prismicio";
import Link from "next/link";

export default async function FinishSurvey() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <main id="topo">
      <div className="flex w-full items-center justify-center py-14 md:py-20">
      <div className="flex flex-col items-center w-full max-w-7xl gap-4 px-4 md:gap-10">
        <div className="flex w-full items-center justify-center py-14 md:py-20">
              <div className="flex flex-col w-full max-w-7xl gap-10 px-4 md:gap-20">
                  <div className="flex flex-col gap-4 flex-1 items-center">
                      <h2 className="text-center">Formulário enviado!</h2>
                      <div className="text-center leading-relaxed max-w-[50dvw]">
                        <p className="text-lg font-semibold">Sua pesquisa foi enviada com sucesso!</p>
                        <p className="pb-4">Os dados coletados ajudarão a entender quais redes sociais são mais utilizadas, como ocorre a interação com conteúdos culturais e de que maneira iniciativas inclusivas podem se conectar melhor com esse público no ambiente digital.</p>
                        <p>Agradecemos sua participação!</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                          <Link href={"/surveys"} className="px-8 py-4 rounded-full bg-purple-200 font-semibold text-purple-950 transition hover:bg-purple-300 cursor-pointer">Acessar a central de pesquisas</Link>
                          <Link href={"/"} className="px-6 py-3 rounded-full font-semibold text-zinc-700 transition hover:bg-zinc-300 cursor-pointer">Voltar ao inicio</Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <Footer data={footer.data}/>
    </main>
  );
}
