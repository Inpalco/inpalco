import Image from "next/image";
import Section from "../ui/section";
import Link from "next/link";

const truncateText = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  }
  return text;
}

export default function AllPosts({data}) {

  const lenght = 100;

  return(
    <Section className="flex-col">
      {/* ITEMS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {data.mainContent.posts.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 mb-4">
            <Image src={item.image} width={1920} height={1080} alt={item.alt} className="object-cover rounded-3xl w-full h-48"/>
            <h3>{item.title}</h3>
            <p className="secondary">{truncateText(item.content, lenght)}</p>
            <div className="flex items-center gap-3">
              <span className="text-slate-500">{item.date}</span>
              <span className="text-slate-500">{item.author}</span>
            </div>
            <Link href={`/blog/${item.id}`} className={`px-4 py-2 rounded-full transition font-semibold text-purple-600 hover:text-purple-600 hover:bg-purple-100 w-max`}>Ler postagem</Link>
          </div>
        ))}
      </div>
    </Section>
  )
}