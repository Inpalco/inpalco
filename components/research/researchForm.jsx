'use client';
import { useState, useEffect } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

export default function GoogleForm() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula um tempo de carregamento antes de esconder o loader
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, [FormfacadeEmbed]);

    return (
        <div className="relative">
            {isLoading ? 
                <div className="flex flex-col gap-4 p-8 w-full rounded-xl items-center justify-center bg-white">
                    <CircleNotch size={48} className="text-purple-500 animate-spin" />
                    <p className="text-xl">Carregando pesquisa</p>
                </div>
            :
                <FormfacadeEmbed
                    formFacadeURL="https://formfacade.com/include/103444691370887618546/form/1FAIpQLSftx1NWJ-6JTieExOzgZzbEiOp_Jp9efvLgBiebjr3A8yEThA/classic.js/?div=ff-compose"
                    onLoad={() => setIsLoading(false)}
                    onSubmitForm={() => console.log('Form submitted')}
                />
            }
        </div>
    );
}
