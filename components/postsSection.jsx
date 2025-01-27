import Image from "next/image";
import Link from "next/link";

export default function PostsSection({data}) {  

    // Função para pegar os primeiros 100 caracteres do conteúdo do post
    const getExcerpt = (content) => {
        // Extrai o texto de todos os elementos no array content
        const text = content.map(item => item.text).join(' ');
        
        // Retorna os primeiros 100 caracteres
        return text.slice(0, 100);
    };

    return (
        <div className="flex w-full items-center justify-center py-14 md:py-20">
                <div className="w-full max-w-7xl grid grid-cols-1 gap-6 items-stretch justify-items-center md:grid-cols-3">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 w-full">
                            <Image 
                                src={item.data.image.url} 
                                alt={item.data.image.alt} 
                                width={960} 
                                height={480} 
                                className="object-cover w-full md:h-[16rem] rounded-3xl" />
                            <h3>{item.data.title}</h3>
                            <p className="secondary">{getExcerpt(item.data.content)}...</p>
                            <div className="flex items-center gap-4">
                                <span>{item.data.author}</span>
                                <span>{item.data.date}</span>
                            </div>
                            <Link className="text-purple-500 font-medium text-lg text-center w-full transition hover:text-orange-500 md:w-max hover:scale-105" href={`/blog/${item.uid}`}>Ler mais</Link>
                        </div>
                    ))}
                </div>                
        </div>
    )
}