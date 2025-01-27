import BlogHeroSection from "@/components/blogHeroSection";
import Footer from "@/components/footer";
import PostsSection from "@/components/postsSection";
import { createClient } from "@/prismicio";

export default async function Blog() {
  const client = createClient();
  const posts = await client.getAllByType("posts");
  const footer = await client.getSingle("footer");

  return (
    <main id="topo" className="flex flex-col w-full px-5 md:px-0">
      <BlogHeroSection data={posts} />
      <PostsSection data={posts} />
      <Footer data={footer.data}/>
    </main>
  );
}
