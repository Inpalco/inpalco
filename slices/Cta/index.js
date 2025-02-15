import CtaSection from "@/components/cta";

/**
 * @typedef {import("@prismicio/client").Content.CtaSlice} CtaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaSlice>} CtaProps
 * @param {CtaProps}
 */
const Cta = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CtaSection data={slice.primary} />
    </section>
  );
};

export default Cta;
