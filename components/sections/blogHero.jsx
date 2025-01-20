import Button from "../ui/button";
import Image from "next/image";;
import Section from "../ui/section";

const truncateText = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  }
  return text;
}

export default function BlogHero({data}) {
  
  const lenght = 200;
  const allPosts = data.mainContent.posts;
  const mostRecentPost = allPosts.reduce((latest, current) => {
    const latestDate = new Date(latest.date.split("/").reverse().join("-"));
    const currentDate = new Date(current.date.split("/").reverse().join("-"));
    return currentDate > latestDate ? current : latest;
  }, allPosts[0]);
  
  return (
    // CONTAINER
    <Section className="flex-col md:flex-row mt-0">
        {/* LEFT */}
        <div className="flex w-full">
          <Image 
            className="object-cover rounded-3xl md:h-[22rem]"
            src={mostRecentPost.image}
            width={1920} 
            height={1080} 
            alt="Imagem de teste" 
          />
        </div>
        {/* RIGHT */}
        <div className="flex flex-col w-full gap-6">
          <h1>{mostRecentPost.title}</h1>
          <p className="secondary">{truncateText(mostRecentPost.content, lenght)}</p>
          <div className="flex items-center gap-3">
            <span className="text-slate-500">{mostRecentPost.date}</span>
            <span className="text-slate-500">{mostRecentPost.author}</span>
          </div>
          <Button href={`/blog/${mostRecentPost.id}`}>Ler postagem completa</Button>
        </div>
    </Section>
  )
}