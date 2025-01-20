/**
 * @typedef {import("@prismicio/client").Content.ServicesOverviewSlice} ServicesOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesOverviewSlice>} ServicesOverviewProps
 * @param {ServicesOverviewProps}
 */
const ServicesOverview = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for services_overview (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ServicesOverview;
