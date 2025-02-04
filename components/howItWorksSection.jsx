import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";

export default function HowItWOrksSection({data}) {

    return (
        <div className="flex w-full items-center justify-center py-14 md:py-20">
            <div className="flex flex-col items-center w-full max-w-7xl gap-4 px-4 md:gap-10">
                <div className="flex flex-col gap-4 flex-1 text-center">
                    <h2>{data.title}</h2>
                    <p className="secondary">{data.content}</p>
                </div>
                <div className="w-full grid grid-cols-1 gap-6 items-stretch justify-items-center md:grid-cols-5">
                    {data.steps.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center justify-center gap-6 p-2 rounded-2xl transition hover:bg-purple-100 hover:scale-105 hover:drop-shadow-lg border border-slate-50 hover:text-purple-700 hover:border-purple-500">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center border border-purple-500">
                                <span className="font-medium text-xl text-purple-700">{item.step}</span>
                            </div>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>                
            </div>
        </div>
    )
}