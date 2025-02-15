import ContactSection from "@/components/contactSection";

/**
 * @typedef {import("@prismicio/client").Content.ContactSlice} ContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSlice>} ContactProps
 * @param {ContactProps}
 */
const Contact = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ContactSection data={slice.primary} />
    </section>
  );
};

export default Contact;
