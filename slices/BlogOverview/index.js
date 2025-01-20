/**
 * @typedef {import("@prismicio/client").Content.BlogOverviewSlice} BlogOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogOverviewSlice>} BlogOverviewProps
 * @param {BlogOverviewProps}
 */
const BlogOverview = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_overview (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BlogOverview;
