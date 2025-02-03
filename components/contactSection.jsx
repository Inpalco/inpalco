import Link from "next/link";
import ContactForm from "./ContactForm";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";


export default function ContactSection({data}) {
    return(
        <div className="flex w-full items-center justify-center py-14 md:py-20">
            <div className="flex flex-col items-start w-full max-w-7xl gap-10 px-4 md:gap-20 md:flex-row">
                <div className="flex flex-col gap-4 w-full flex-1">
                    <h2>{data.title}</h2>
                    <p className="secondary">{data.content}</p>
                    <div className="flex items-center">
                        <Link target="_blank" href={`https://wa.me/${data.whatsapp}`} className="p-4 rounded-full hover:bg-orange-200 transition flex items-center gap-2 w-max pr-6">
                            <WhatsappLogo size={32} className="text-green-500" />
                            <p>Whatsapp</p>
                        </Link>
                        <Link target="_blank" href={data.instagram} className="p-4 rounded-full hover:bg-orange-200 transition flex items-center gap-2 w-max pr-6">
                            <InstagramLogo size={32} className="text-orange-500" />
                            <p>Instagram</p>
                        </Link>
                    </div>
                </div>
                <div className="w-full flex-1">
                  <ContactForm/>
                </div>
            </div>
        </div>
    )
}