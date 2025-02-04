import Image from "next/image";
import Link from "next/link";

export default function BlogOverviewSection({data, posts}) {  

    // Função para pegar os primeiros 100 caracteres do conteúdo do post
    const getExcerpt = (content) => {
        // Extrai o texto de todos os elementos no array content
        const text = content.map(item => item.text).join(' ');
        
        // Retorna os primeiros 100 caracteres
        return text.slice(0, 100);
    };

    return (
        <div className="flex w-full items-center justify-center py-14 md:py-20">
            <div className="flex flex-col items-center w-full max-w-7xl gap-4 px-4 md:gap-10">
                <div className="flex flex-col gap-4 flex-1 text-center">
                    <h2>{data.title}</h2>
                    <p className="secondary">{data.content}</p>
                </div>
                <div className="w-full grid grid-cols-1 gap-6 items-stretch justify-items-center md:grid-cols-3">
                    {posts.slice(0, 3).map(post => (
                        <div key={post.id} className="flex flex-col gap-4 w-full mb-6 md:mb-0">
                            <Image 
                                src={post.data.image.url} 
                                alt={post.data.image.alt} 
                                width={960} 
                                height={480} 
                                className="object-cover w-full h-40 md:h-[16rem] rounded-3xl" />
                            <h3>{post.data.title}</h3>
                            <p className="secondary">{getExcerpt(post.data.content)}...</p>
                            <div className="flex items-center gap-4">
                                <span>{post.data.author}</span>
                                <span>{post.data.date}</span>
                            </div>
                            <Link className="text-purple-700 font-medium text-lg text-center w-full transition hover:text-orange-500 md:w-max hover:scale-105 md:bg-none md:border-none bg-purple-50 border border-purple-500 p-4 rounded-full hover:border-orange-500" href={`/blog/${post.uid}`}>Ler mais</Link>
                        </div>
                    ))}
                </div>                
                <div className="flex items-center text-center flex-col gap-10 md:text-left md:flex-row">
                    <p className="secondary flex-1 mt-6">{data.footer}</p>
                    <Link className="text-white font-medium text-lg bg-purple-700 text-center py-4 px-8 rounded-full w-full transition md:mt-2 hover:bg-orange-500 md:w-max hover:scale-105 hover:drop-shadow-lg" href="/blog">Veja todos os posts</Link>
                </div>
            </div>
        </div>
    )
}