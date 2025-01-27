import ArticleSection from "@/components/articleSection";
import BlogImg from "@/components/BlogImg";
import Footer from "@/components/footer";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

export default async function Blog({params}) {

    // Função para pegar os primeiros 100 caracteres do conteúdo do post
    const getExcerpt = (content) => {
        // Extrai o texto de todos os elementos no array content
        const text = content.map(item => item.text).join(' ');

        // Retorna os primeiros 100 caracteres
        return text.slice(0, 100);
    };

    const client = createClient();
    const { slug } = await params;
    const post = await client.getByUID("posts", slug);
    const posts = await client.getAllByType("posts");
    const footer = await client.getSingle("footer");

    return (
        <main id="topo" className="flex flex-col w-full px-5 md:px-0">
            <div className="flex w-full items-center justify-center pt-10">
                <div className="flex flex-col items-center w-full max-w-7xl gap-10 px-4 md:gap-20">
                    <div className="flex flex-col w-full gap-2">
                        <div className="relative">
                            <Link className="text-white font-medium text-lg text-center w-full mb-4 transition hover:text-orange-500 md:w-max hover:scale-105 absolute top-16 left-16" href={"/blog"}>Voltar</Link>
                            <BlogImg data={post.data} />
                            <h1 className="text-white font-3xl absolute bottom-16 left-16">{post.data.title}</h1>
                        </div>
                        <PrismicRichText field={post.data.content} />
                    </div>         
                </div>
            </div>
            <div className="flex w-full items-center justify-center py-14 md:py-20">
                <div className="flex flex-col items-center w-full max-w-7xl gap-4 px-4 md:gap-10">
                    <div className="flex flex-col gap-4 flex-1 text-center">
                        <h2>Últimas postagens</h2>
                        <p className="secondary">Foque por dentro do projeto, acompanhe as nossas postagens e veja como a In Palco está tornando o mundo mais acessível.</p>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-6 items-stretch justify-items-center md:grid-cols-3">
                        {posts.slice(0, 3).map(post => (
                            <div key={post.id} className="flex flex-col gap-4 w-full">
                                <Image 
                                    src={post.data.image.url} 
                                    alt={post.data.image.alt} 
                                    width={960} 
                                    height={480} 
                                    className="object-cover w-full md:h-[16rem] rounded-3xl" />
                                <h3>{post.data.title}</h3>
                                <p className="secondary">{getExcerpt(post.data.content)}...</p>
                                <div className="flex items-center gap-4">
                                    <span>{post.data.author}</span>
                                    <span>{post.data.date}</span>
                                </div>
                                <Link className="text-purple-500 font-medium text-lg text-center w-full transition hover:text-orange-500 md:w-max hover:scale-105" href={`/blog/${post.uid}`}>Ler mais</Link>
                            </div>
                        ))}
                    </div>                
                </div>
            </div>
            <Footer data={footer.data}/>
        </main>
    );
}
