import ServicesOverviewSection from "@/components/servicesOverviewSection";

/**
 * @typedef {import("@prismicio/client").Content.ServicesOverviewSlice} ServicesOverviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesOverviewSlice>} ServicesOverviewProps
 * @param {ServicesOverviewProps}
 */
const ServicesOverview = ({ slice, context }) => {

  const {services} = context;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServicesOverviewSection data={slice.primary} services={services} />
    </section>
  );
};

export default ServicesOverview;
