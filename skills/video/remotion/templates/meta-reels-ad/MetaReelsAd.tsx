import React from "react";
import {
  AbsoluteFill,
  Video,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  staticFile,
  Sequence,
} from "remotion";

const FadeInText: React.FC<{
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame - delay, [0, 15], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const PriceTag: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 12,
      stiffness: 200,
    },
  });

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderRadius: 20,
        padding: "16px 32px",
        display: "inline-block",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <span
        style={{
          fontSize: 48,
          fontWeight: 800,
          color: "#2d2d2d",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        54,900
      </span>
      <span
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: "#666",
          marginLeft: 4,
        }}
      >
        원
      </span>
    </div>
  );
};

const CTAButton: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 10,
      stiffness: 150,
    },
  });

  const pulse = Math.sin((frame - delay) * 0.1) * 0.03 + 1;

  return (
    <div
      style={{
        transform: `scale(${scale * (frame > delay + 30 ? pulse : 1)})`,
        background: "linear-gradient(135deg, #7c9885 0%, #5a7d65 100%)",
        borderRadius: 50,
        padding: "20px 60px",
        display: "inline-block",
        boxShadow: "0 6px 25px rgba(90, 125, 101, 0.4)",
      }}
    >
      <span
        style={{
          fontSize: 32,
          fontWeight: 700,
          color: "#fff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: 2,
        }}
      >
        지금 구매하기
      </span>
    </div>
  );
};

export const SundayhugAd: React.FC<{
  videoSrc?: string;
}> = ({ videoSrc = "video1.mp4" }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#f5f0eb" }}>
      {/* Background Video */}
      <AbsoluteFill>
        <Video
          src={staticFile(videoSrc)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Subtle gradient overlay for text readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </AbsoluteFill>

      {/* Brand Logo / Name - Top */}
      <Sequence from={10}>
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FadeInText>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: 30,
                padding: "12px 28px",
                boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  color: "#5a7d65",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  letterSpacing: 3,
                }}
              >
                SUNDAY HUG
              </span>
            </div>
          </FadeInText>
        </div>
      </Sequence>

      {/* Product Name - Center Top */}
      <Sequence from={30}>
        <div
          style={{
            position: "absolute",
            top: 180,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 40px",
          }}
        >
          <FadeInText>
            <h1
              style={{
                fontSize: 52,
                fontWeight: 800,
                color: "#fff",
                textAlign: "center",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                fontFamily: "system-ui, -apple-system, sans-serif",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              꿀잠 슬리핑백
            </h1>
          </FadeInText>
          <FadeInText delay={10}>
            <p
              style={{
                fontSize: 36,
                fontWeight: 500,
                color: "#fff",
                textAlign: "center",
                textShadow: "0 2px 15px rgba(0,0,0,0.4)",
                fontFamily: "system-ui, -apple-system, sans-serif",
                margin: "10px 0 0 0",
                opacity: 0.95,
              }}
            >
              실키 밤부
            </p>
          </FadeInText>
        </div>
      </Sequence>

      {/* Feature Tags - Middle */}
      <Sequence from={60}>
        <div
          style={{
            position: "absolute",
            top: 380,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            padding: "0 30px",
          }}
        >
          {["부드러운 촉감", "통기성 우수", "6가지 컬러"].map((tag, i) => (
            <FadeInText key={tag} delay={i * 8}>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  borderRadius: 25,
                  padding: "10px 20px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#5a7d65",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  {tag}
                </span>
              </div>
            </FadeInText>
          ))}
        </div>
      </Sequence>

      {/* Price - Bottom Section */}
      <Sequence from={90}>
        <div
          style={{
            position: "absolute",
            bottom: 280,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PriceTag delay={0} />
        </div>
      </Sequence>

      {/* CTA Button - Bottom */}
      <Sequence from={120}>
        <div
          style={{
            position: "absolute",
            bottom: 160,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CTAButton delay={0} />
        </div>
      </Sequence>

      {/* Rating Badge */}
      <Sequence from={150}>
        <div
          style={{
            position: "absolute",
            bottom: 90,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FadeInText>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 24, color: "#FFD700" }}>★★★★★</span>
              <span
                style={{
                  fontSize: 22,
                  color: "#fff",
                  fontWeight: 600,
                  textShadow: "0 1px 10px rgba(0,0,0,0.5)",
                }}
              >
                4.9 (227개 리뷰)
              </span>
            </div>
          </FadeInText>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
