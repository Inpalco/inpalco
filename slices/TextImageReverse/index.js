/**
 * @typedef {import("@prismicio/client").Content.TextImageReverseSlice} TextImageReverseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextImageReverseSlice>} TextImageReverseProps
 * @param {TextImageReverseProps}
 */
const TextImageReverse = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_image_reverse (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default TextImageReverse;
