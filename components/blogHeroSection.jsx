import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

export default function BlogHeroSection({data}) {

    // Função para pegar o post mais recente
    const getMostRecentPost = (posts) => {
        return posts.sort((a, b) => new Date(b.first_publication_date) - new Date(a.first_publication_date))[0];
    };

    const mostRecentPost = getMostRecentPost(data);
    console.log(mostRecentPost);
    
    // Função para pegar os primeiros 100 caracteres do conteúdo do post
    const getExcerpt = (content) => {
        // Extrai o texto de todos os elementos no array content
        const text = content.map(item => item.text).join(' ');
        
        // Retorna os primeiros 100 caracteres
        return text.slice(0, 400);
    };

    return (
        <div className="flex w-full items-center justify-center md:pt-12 md:pb-20">
            <div className="flex flex-col-reverse items-center w-full md:max-w-7xl gap-10 px-4 md:gap-20 md:flex-row">
                <Image 
                    className="object-cover flex-1 w-full md:max-w-xl min-h-[20rem] h-[30rem] rounded-3xl"
                    src={mostRecentPost.data.image.url} 
                    width={960}
                    height={480}
                    alt={mostRecentPost.data.image.alt}/>
                <div className="flex flex-col gap-4 flex-1">
                    <h1>{mostRecentPost.data.title}</h1>
                    <p className="secondary">{getExcerpt(mostRecentPost.data.content)}...</p>
                    <Link className="text-white font-medium text-lg bg-purple-500 text-center py-4 px-8 rounded-full w-full transition mt-2 hover:bg-orange-500 md:w-max hover:scale-105 hover:drop-shadow-lg" href={`/blog/${mostRecentPost.uid}`}>Ler post</Link>
                </div>
            </div>
        </div>
    )
}