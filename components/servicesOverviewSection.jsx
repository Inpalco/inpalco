import Image from "next/image";
import Link from "next/link";

export default function ServicesOverview({data, services}) {

    return (
        <div className="flex w-full items-center justify-center py-14 md:py-20">
            <div className="flex flex-col items-center w-full max-w-7xl gap-4 px-4 md:gap-10">
                <div className="flex flex-col gap-4 flex-1 text-center">
                    <h2>{data.title}</h2>
                    <p className="secondary">{data.content}</p>
                </div>
                <div className="w-full grid grid-cols-1 gap-6 items-stretch justify-items-center md:grid-cols-3">
                    {services.map((item, index) => (
                        <div key={index} className="flex flex-row items-start justify-center gap-6 p-8 bg-white border border-slate-300 rounded-2xl transition hover:bg-purple-100 hover:scale-105 hover:border-purple-400 hover:drop-shadow-lg">
                            <Image src={item.data.icon.url} alt={item.data.icon.alt} width={32} height={32} />
                            <div className="flex flex-col gap-6">
                                <h3>{item.data.title}</h3>
                                <p className="secondary">{item.data.content}</p>
                            </div>
                        </div>
                    ))}
                </div>                
            </div>
        </div>
    )
}