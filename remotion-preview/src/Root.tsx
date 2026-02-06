import { Composition } from "remotion";
import { ABCBedReels } from "./ABCBedReels";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ABCBedReels"
        component={ABCBedReels}
        durationInFrames={30 * 17}
        fps={30}
        width={720}
        height={1280}
      />
    </>
  );
};
