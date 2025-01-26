import BlogOverviewSection from "@/components/blogOverviewSection";

/**
 * @typedef {import("@prismicio/client").Content.BlogOverviewSlice} BlogOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogOverviewSlice>} BlogOverviewProps
 * @param {BlogOverviewProps}
 */

const BlogOverview = ({ slice, context }) => {

  const {posts} = context;

  return (
    <BlogOverviewSection data={slice.primary} posts={posts} />
  );
};

export default BlogOverview;
