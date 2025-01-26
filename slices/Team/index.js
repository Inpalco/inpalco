import TeamSection from "@/components/teamSection";

/**
 * @typedef {import("@prismicio/client").Content.TeamSlice} TeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSlice>} TeamProps
 * @param {TeamProps}
 */
const Team = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TeamSection data={slice.primary} />
    </section>
  );
};

export default Team;
