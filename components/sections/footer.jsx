'use client'
import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/button";


export default function Footer({data}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email)
      .then(() => setCopied(true))
      .catch((err) => console.error("Erro ao copiar o e-mail:", err));
    
    setTimeout(() => setCopied(false), 2000); // Reseta o estado após 2 segundos
  };

  return(
    <footer className="flex items-center justify-center w-full bg-slate-100 rounded-3xl md:rounded-none">
      <div className="flex items-center flex-col gap-20 my-16 justify-between max-w-7xl md:p-10 md:flex-row w-full mx-5 md:mx-0">
        {/* LEFT */}
        <div className="flex flex-col gap-5">
          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-2">
            { data.mainContent.footer.facebook && (
              <Link target="_blank" href={data.mainContent.footer.facebook} className="p-2 rounded-full hover:bg-orange-200 transition">
                <FacebookLogo size={32} className="text-orange-500" />
              </Link> ) 
            }
            { data.mainContent.footer.instagram && (
              <Link target="_blank" href={data.mainContent.footer.instagram} className="p-2 rounded-full hover:bg-orange-200 transition">
                <InstagramLogo size={32} className="text-orange-500" />
              </Link> ) 
            }
            { data.mainContent.footer.x && (
              <Link target="_blank" href={data.mainContent.footer.x} className="p-2 rounded-full hover:bg-orange-200 transition">
                <XLogo size={32} className="text-orange-500" />
              </Link> ) 
            }
          </div>
          {/* INFO */}
          <div className="flex flex-col gap-2">
            <span onClick={() => copyToClipboard(data.mainContent.footer.email)} className="text-base cursor-pointer text-slate-800">{data.mainContent.footer.email}</span>
            {copied && <p className="text-green-500">E-mail copiado para a área de transferência!</p>}
            <span className="text-base text-slate-800">{data.mainContent.footer.phone}</span>
            <span className="text-base text-slate-800">{data.mainContent.footer.address}</span>
            <span className="text-base text-slate-800">{data.mainContent.footer.copy}</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end gap-5">
          <Button href={"/terms"}>Termos de uso</Button>
          <Button href={"/policy"}>Política de privacidade</Button>
          <Link className="p-4 rounded-full transition text-purple-600 font-medium hover:bg-purple-100" href={"#"}>Ir para o topo da página</Link>
        </div>
      </div>
    </footer>
  )
}