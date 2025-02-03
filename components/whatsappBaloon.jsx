import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function WhatsappBaloon() {
    return(
        <div className="fixed z-50 bottom-2 right-2 animationBounce hover:animate-none">
            <Link target="_blank" href={`https://wa.me/55996698296`} className="w-max p-4 rounded-full hover:bg-green-200 transition flex items-center gap-2">
                <WhatsappLogo size={32} className="text-green-500" />
            </Link>
        </div>
    )
}