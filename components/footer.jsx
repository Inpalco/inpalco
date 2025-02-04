'use client'
import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Footer({data}) {
    return (
        <div className="flex w-full items-center justify-center py-14 md:py-20">
            <div className="flex flex-col items-center justify-between w-full max-w-7xl gap-10 px-4 md:gap-20 md:flex-row">
                <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-2">
                        { data.facebook && (
                        <Link target="_blank" href={data.facebook} aria-label="Acesse nosso perfil do Facebook!" className="p-2 rounded-full hover:bg-orange-200 transition">
                            <FacebookLogo size={32} className="text-orange-500" />
                        </Link> ) 
                        }
                        { data.instagram && (
                        <Link target="_blank" href={data.instagram} aria-label="Acesse nosso perfil do Instagram!" className="p-2 rounded-full hover:bg-orange-200 transition">
                            <InstagramLogo size={32} className="text-orange-500" />
                        </Link> ) 
                        }
                        { data.x && (
                        <Link target="_blank" href={data.mainContent.footer.x} aria-label="Acesse nosso perfil do X!" className="p-2 rounded-full hover:bg-orange-200 transition">
                            <XLogo size={32} className="text-orange-500" />
                        </Link> ) 
                        }
                    </div>
                    <div className="flex flex-col gap-4 flex-1">
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                        <p>{data.address}</p>
                        <p>{data.copy}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 flex-1 items-end">
                    <Link className="py-4 px-4 rounded-full text-center text-purple-700 transition hover:bg-orange-100 hover:text-orange-500 hover:scale-105 bg-purple-100 w-full md:w-max" href={"/terms"}>Termos de Uso</Link>
                    <Link className="py-4 px-4 rounded-full text-center text-purple-700 transition hover:bg-orange-100 hover:text-orange-500 hover:scale-105 bg-purple-100 w-full md:w-max" href={"/policy"}>Política de Privacidade</Link>
                    <Link className="py-4 px-4 rounded-full text-center text-purple-700 transition hover:bg-orange-100 hover:text-orange-500 hover:scale-105 w-full md:w-max" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} href={"#"}>Ir para o topo da página</Link>
                </div>
            </div>
        </div>
    )
}