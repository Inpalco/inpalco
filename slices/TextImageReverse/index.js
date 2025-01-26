import DefaultSection from "@/components/defaultSection";

/**
 * @typedef {import("@prismicio/client").Content.TextImageReverseSlice} TextImageReverseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextImageReverseSlice>} TextImageReverseProps
 * @param {TextImageReverseProps}
 */

const TextImageReverse = ({ slice }) => {
  return (
    <section 
      data-slice-type={slice.slice_type} 
      data-slice-variation={slice.variation}>
        <DefaultSection reverse={true} data={slice.primary}/>
    </section>
  );
};

export default TextImageReverse;
