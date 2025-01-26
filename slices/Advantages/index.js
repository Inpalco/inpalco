import AdvantagesSection from "@/components/advantagesSection";
/**
 * @typedef {import("@prismicio/client").Content.AdvantagesSlice} AdvantagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AdvantagesSlice>} AdvantagesProps
 * @param {AdvantagesProps}
 */

const ServicesOverview = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AdvantagesSection data={slice.primary} />
    </section>
  );
};

export default ServicesOverview;