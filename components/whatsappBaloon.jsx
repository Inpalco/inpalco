import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function WhatsappBaloon() {
    return(
        <div className="fixed z-50 bottom-2 right-2 animationBounce">
            <Link target="_blank" href={`https://wa.me/55996698296`} aria-label="Entre em contato conosco via whatsapp!" className="w-max p-4 rounded-full bg-green-500 hover:bg-green-300 group transition flex items-center gap-2 shadow-md">
                <WhatsappLogo weight="fill" size={32} className="text-white group-hover:text-green-800" />
            </Link>
        </div>
    )
}