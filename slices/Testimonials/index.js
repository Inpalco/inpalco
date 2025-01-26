import TestimonialsSection from "@/components/testimonialsSection";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param {TestimonialsProps}
 */
const Testimonials = ({ slice, context }) => {

  const { testimonials } = context;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TestimonialsSection data={slice.primary} testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
