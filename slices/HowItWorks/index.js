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
      Placeholder component for how_it_works (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HowItWorks;
