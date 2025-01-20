/**
 * @typedef {import("@prismicio/client").Content.AdvantagesSlice} AdvantagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AdvantagesSlice>} AdvantagesProps
 * @param {AdvantagesProps}
 */
const Advantages = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for advantages (variation: {slice.variation}) Slices
    </section>
  );
};

export default Advantages;
