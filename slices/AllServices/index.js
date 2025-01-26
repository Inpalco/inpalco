/**
 * @typedef {import("@prismicio/client").Content.AllServicesSlice} AllServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AllServicesSlice>} AllServicesProps
 * @param {AllServicesProps}
 */
const AllServices = ({ slice }) => {
  return (
    <section className="section" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className=""></div>
      Placeholder component for all_services (variation: {slice.variation})
      Slices
    </section>
  );
};

export default AllServices;
