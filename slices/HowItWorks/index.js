import HowItWOrksSection from "@/components/howItWorksSection";

/**
 * @typedef {import("@prismicio/client").Content.HowItWorksSlice} HowItWorksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HowItWorksSlice>} HowItWorksProps
 * @param {HowItWorksProps}
 */
const HowItWorks = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HowItWOrksSection data={slice.primary} />
    </section>
  );
};

export default HowItWorks;
