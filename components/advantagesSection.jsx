import Image from "next/image";
import Link from "next/link";

export default function AdvantagesSection({data}) {
      return (
        <div className="flex w-full items-center justify-center py-14 md:py-20">
            <div className="flex flex-col items-center w-full max-w-7xl gap-4 px-4 md:gap-10">
                <div className="flex flex-col gap-4 flex-1 text-center">
                    <h2>{data.title}</h2>
                    <p className="secondary">{data.content}</p>
                </div>
                <div className="w-full grid grid-cols-1 my-10 gap-20 items-stretch justify-items-center md:grid-cols-2">
                    {data.items.map((item, index) => (
                        <div key={index} className="flex flex-row items-start justify-center gap-6 rounded-2xl transition  hover:scale-102">
                            <Image src={item.icon.url} alt={item.icon.alt} width={32} height={32} />
                            <div className="flex flex-col gap-2">
                                <h3>{item.title}</h3>
                                <p className="secondary">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>                
            </div>
        </div>
    )
}