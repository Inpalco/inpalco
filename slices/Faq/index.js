import FaqSection from "@/components/faqSection";

/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param {FaqProps}
 */
const Faq = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FaqSection data={slice.primary} />
    </section>
  );
};

export default Faq;
