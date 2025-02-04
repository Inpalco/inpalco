import Image from "next/image";
import Link from "next/link";

export default function DefaultSection({data, reverse}) {
    return (
        <div className="flex w-full items-center justify-center py-14 md:py-20">
            <div className={`flex flex-col-reverse items-center w-full max-w-7xl gap-10 px-4 md:gap-20 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="flex flex-col gap-4 flex-1">
                    <h2>{data.title}</h2>
                    <p className="secondary">{data.content}</p>
                    {
                        data.link &&
                        <Link className="text-white font-medium text-lg bg-purple-700 text-center py-4 px-8 rounded-full w-full transition mt-2 hover:bg-orange-500 md:w-max hover:scale-105 hover:drop-shadow-lg" href={`${data.link}`}>{data.cta}</Link>
                    }
                </div>
                <Image 
                    className="object-cover flex-1 w-full md:max-w-xl h-[20rem] md:h-[25rem] rounded-3xl animation"
                    src={data.image.url} 
                    width={960}
                    height={480}
                    alt={data.image.alt}/>
            </div>
        </div>
    )
}