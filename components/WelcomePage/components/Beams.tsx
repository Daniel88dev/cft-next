"use client";
import useWindowSize from "@/components/WelcomePage/components/useWindowSize";
import Beam from "@/components/WelcomePage/components/Beam";

const Beams = ({
  gridBoxSize,
  beamWidthOffset,
}: {
  gridBoxSize: number;
  beamWidthOffset: number;
}) => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / gridBoxSize) : 0;

  const placements = [
    {
      top: gridBoxSize * 0,
      left: Math.floor(numColumns * 0.05) * gridBoxSize,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: gridBoxSize * 12,
      left: Math.floor(numColumns * 0.15) * gridBoxSize,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: gridBoxSize * 3,
      left: Math.floor(numColumns * 0.25) * gridBoxSize,
    },
    {
      top: gridBoxSize * 9,
      left: Math.floor(numColumns * 0.75) * gridBoxSize,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * gridBoxSize,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: gridBoxSize * 2,
      left: Math.floor(numColumns * 1) * gridBoxSize - gridBoxSize,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - beamWidthOffset}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

export default Beams;
