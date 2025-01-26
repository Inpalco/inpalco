import DefaultSection from "@/components/defaultSection";

/**
 * @typedef {import("@prismicio/client").Content.TextImageSlice} TextImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextImageSlice>} TextImageProps
 * @param {TextImageProps}
 */

const TextImage = ({ slice }) => {
  return (
    <section 
      data-slice-type={slice.slice_type} 
      data-slice-variation={slice.variation}>
        <DefaultSection reverse={false} data={slice.primary}/>
    </section>
  );
};

export default TextImage;
