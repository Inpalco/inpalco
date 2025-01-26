import Image from "next/image";
import Link from "next/link";

export default function CtaSection({data}) {
    return (
        <div className="flex w-full items-center justify-center py-40 bg-purple-100">
            <div className="flex flex-col-reverse items-center w-full max-w-7xl gap-10 px-4 md:gap-40 md:flex-row">
                <div className="flex flex-col gap-4 flex-1">
                    <h2 className="text-purple-600">{data.title}</h2>
                    <p>{data.content}</p>
                    {
                        data.link &&
                        <Link className="text-white font-medium text-lg bg-purple-500 text-center py-4 px-8 rounded-full w-full transition mt-2 hover:bg-orange-500 md:w-max hover:scale-105 hover:drop-shadow-lg" href={`${data.link}`}>{data.cta}</Link>
                    }
                </div>
                <Image 
                    className="object-cover w-full max-w-80 animation"
                    src={data.image.url} 
                    width={512}
                    height={512}
                    alt={data.image.alt}/>
            </div>
        </div>
    )
}