import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  Video,
  staticFile,
  interpolate,
  spring,
} from "remotion";

const TextOverlay: React.FC<{
  text: string;
  subText?: string;
  color?: string;
  highlightColor?: string;
}> = ({ text, subText, color = "#FFFFFF", highlightColor = "#E65100" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 200,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          fontSize: 48,
          fontWeight: 800,
          color,
          textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
          textAlign: "center",
          lineHeight: 1.3,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {text}
      </div>
      {subText && (
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: highlightColor,
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            marginTop: 8,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {subText}
        </div>
      )}
    </div>
  );
};

const LiveBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame * 0.3) * 0.15 + 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 80,
        right: 40,
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,255,255,0.95)",
        padding: "10px 16px",
        borderRadius: 24,
        transform: `scale(${pulse})`,
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          background: "#FF0000",
          borderRadius: "50%",
        }}
      />
      <span
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "#FF0000",
        }}
      >
        LIVE
      </span>
      <span
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "#333",
        }}
      >
        2.10(화) 11시
      </span>
    </div>
  );
};

const PriceBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: {
      damping: 100,
      mass: 0.5,
    },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 80,
        left: 40,
        background: "#E65100",
        color: "#FFF",
        width: 80,
        height: 80,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transform: `scale(${scale})`,
        boxShadow: "0 4px 16px rgba(230,81,0,0.4)",
      }}
    >
      <span style={{ fontSize: 28, fontWeight: 800, lineHeight: 1 }}>43</span>
      <span style={{ fontSize: 16, fontWeight: 700 }}>%</span>
    </div>
  );
};

export const ABCBedReels: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#FFF9F0" }}>
      {/* Main Video */}
      <Video
        src={staticFile("abc-bed-live-reels.mp4")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Scene 1: Hook - 인테리어샷 (0-2.5초 = 0-75프레임) */}
      <Sequence from={0} durationInFrames={75}>
        <TextOverlay text="접으면 끝," subText="펴면 꿀잠" />
        <LiveBadge />
      </Sequence>

      {/* Scene 2: 코슬립 아기 (2.5-5초 = 75-150프레임) */}
      <Sequence from={75} durationInFrames={75}>
        <TextOverlay text="어디서든 함께" />
        <LiveBadge />
      </Sequence>

      {/* Scene 3: 아기 자는 모습 (5-8초 = 150-240프레임) */}
      <Sequence from={150} durationInFrames={90}>
        <TextOverlay text="눕히면 바로 꿀잠" />
        <LiveBadge />
      </Sequence>

      {/* Scene 4: 코슬립 모드 전환 (8-11.5초 = 240-345프레임) */}
      <Sequence from={240} durationInFrames={105}>
        <TextOverlay text="코슬립 모드로" subText="밤수유도 편하게" />
        <LiveBadge />
      </Sequence>

      {/* Scene 5: 아기 웃는 모습 (11.5-14초 = 345-420프레임) */}
      <Sequence from={345} durationInFrames={75}>
        <TextOverlay text="36개월까지 사용" />
        <LiveBadge />
      </Sequence>

      {/* Scene 6: 엔딩 (14-16.5초 = 420-510프레임) */}
      <Sequence from={420} durationInFrames={90}>
        <TextOverlay text="43% 할인" subText="2/10(화) 11시 라이브" highlightColor="#FFFFFF" />
        <PriceBadge />
        <LiveBadge />
      </Sequence>
    </AbsoluteFill>
  );
};
