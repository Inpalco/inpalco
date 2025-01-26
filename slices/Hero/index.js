import HeroSection from "@/components/heroSection";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */

const Hero = async ({ slice }) => {
  return (
    <section 
      data-slice-type={slice.slice_type} 
      data-slice-variation={slice.variation}>
      <HeroSection data={slice.primary}/>
    </section>
  );
};

export default Hero;
