import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function WhatsappBaloon() {
    return(
        <div className="fixed z-50 bottom-2 right-2 animationBounce">
            <Link target="_blank" href={`https://wa.me/55996698296`} className="w-max p-4 rounded-full bg-green-50 hover:bg-green-500 group transition flex items-center gap-2 shadow-md">
                <WhatsappLogo size={32} className="text-green-500 group-hover:text-white" />
            </Link>
        </div>
    )
}