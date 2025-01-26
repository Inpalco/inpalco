import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";

export default function TestimonialsSection({data, testimonials}) {

    return (
        <div className="flex w-full items-center justify-center py-14 md:py-20">
            <div className="flex flex-col items-center w-full max-w-7xl gap-4 px-4 md:gap-10">
                <div className="flex flex-col gap-4 flex-1 text-center">
                    <h2>{data.title}</h2>
                    <p className="secondary">{data.content}</p>
                </div>
                <div className="w-full grid grid-cols-1 gap-6 items-stretch justify-items-center md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center justify-center gap-6 p-8 bg-white border border-slate-300 rounded-2xl transition hover:bg-purple-100 hover:scale-105 hover:border-purple-400 hover:drop-shadow-lg">
                            <Image 
                                src={item.data.avatar.url} 
                                alt={item.data.avatar.alt} 
                                width={72} 
                                height={72}
                                className="object-cover rounded-full w-28 h-28" />
                            <div className="flex flex-col gap-6">
                                <h3>{item.data.name}</h3>
                                <p className="secondary">{item.data.comment}</p>
                            </div>
                            <div className="flex items-center justify-center gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                key={index}
                                weight="fill"
                                width={24}
                                height={24}
                                className="text-yellow-400"
                                />
                            ))}
                            </div>
                        </div>
                    ))}
                </div>                
            </div>
        </div>
    )
}