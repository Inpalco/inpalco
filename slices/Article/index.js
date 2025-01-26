import ArticleSection from "@/components/articleSection";

/**
 * @typedef {import("@prismicio/client").Content.ArticleSlice} ArticleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleSlice>} ArticleProps
 * @param {ArticleProps}
 */
const Article = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ArticleSection data={slice.primary} />
    </section>
  );
};

export default Article;
