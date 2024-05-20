import WelcomeContent from "@/components/WelcomePage/components/WelcomeContent";
import Beams from "@/components/WelcomePage/components/Beams";
import GradientGrid from "@/components/WelcomePage/components/GradientGrid";

const GRID_BOX_SIZE = 99;
const BEAM_WIDTH_OFFSET = 1;

export const WelcomePage = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 max-h-full">
      <WelcomeContent />
      <Beams gridBoxSize={GRID_BOX_SIZE} beamWidthOffset={BEAM_WIDTH_OFFSET} />
      <GradientGrid />
    </section>
  );
};
