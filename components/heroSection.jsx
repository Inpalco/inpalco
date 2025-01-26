import Image from "next/image";
import Link from "next/link";
import Icon1 from "@/public/Icon-1.svg";
import Icon2 from "@/public/Icon-2.svg";

export default function HeroSection({data}) {
    return (
        <div className="flex w-full items-center justify-center md:pt-12 md:pb-20">
            <div className="flex flex-col-reverse items-center w-full md:max-w-7xl gap-10 px-4 md:gap-20 md:flex-row">
                <div className="flex flex-col gap-4 flex-1">
                    <span>{data.tag}</span>
                    <h1>{data.title}</h1>
                    <p className="secondary">{data.content}</p>
                    {
                        data.link &&
                        <Link className="text-white font-medium text-lg bg-purple-500 text-center py-4 px-8 rounded-full w-full transition mt-2 hover:bg-orange-500 md:w-max hover:scale-105 hover:drop-shadow-lg" href={`${data.link}`}>{data.cta}</Link>
                    }
                </div>
                <div className="relative my-10 md:m-0">
                    <Image 
                        className="object-cover flex-1 w-full md:max-w-xl min-h-[20rem] h-[30rem] rounded-3xl"
                        src={data.image.url} 
                        width={960}
                        height={480}
                        alt={data.image.alt}/>
                    <Image
                        className="absolute top-0 left-0 md:-left-10 animation"
                        src={Icon1}
                        width={120}
                        height={120}
                        alt="Imagem que representa uma pessoa em caderia de rodas com as mãos para cima." />
                    <Image
                        className="absolute -bottom-10 right-0 md:-right-16 animation"
                        src={Icon2}
                        width={120}
                        height={120}
                        alt="Imagem que representa uma pessoa dançando." />
                </div>
            </div>
        </div>
    )
}