import Image from "next/image";

export default function TeamSection({data}) {

    return (
        <div className="flex w-full items-center justify-center py-14 md:py-20">
            <div className="flex flex-col items-center w-full max-w-7xl gap-4 px-4 md:gap-10">
                <div className="flex flex-col gap-4 flex-1 text-center">
                    <h2>{data.title}</h2>
                    <p className="secondary">{data.content}</p>
                </div>
                <div className="w-full grid grid-cols-1 gap-6 items-stretch justify-items-center md:grid-cols-3">
                    {data.team.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center justify-center gap-6 p-8 border border-slate-50 rounded-2xl transition hover:bg-purple-100 hover:scale-105 hover:border-purple-500 hover:drop-shadow-lg">
                            <Image 
                                src={item.image.url} 
                                alt={item.image.alt} 
                                width={72} 
                                height={72}
                                className="object-cover rounded-full w-28 h-28" />
                            <div className="flex flex-col gap-6">
                                <h3>{item.name}</h3>
                                <span>{item.job}</span>
                                <p className="secondary">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>                
            </div>
        </div>
    )
}