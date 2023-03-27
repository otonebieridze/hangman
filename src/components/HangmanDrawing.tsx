const HEAD = (
  <div
    style={{
      width: "30px",
      height: "30px",
      borderRadius: "100%",
      border: "6px solid black",
      position: "absolute",
      top: "50px",
      right: "21px",
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "6px",
      height: "80px",
      background: "black",
      position: "absolute",
      top: "92px",
      right: "39px",
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: "80px",
      height: "6px",
      background: "black",
      position: "absolute",
      top: "117px",
      right: "-41px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "80px",
      height: "6px",
      background: "black",
      position: "absolute",
      top: "117px",
      right: "45px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "80px",
      height: "6px",
      background: "black",
      position: "absolute",
      top: "166px",
      right: "-35px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "80px",
      height: "6px",
      background: "black",
      position: "absolute",
      top: "166px",
      right: "39px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  incorrectLetters: string[]
}

export default function HangmanDrawing({ incorrectLetters }: HangmanDrawingProps) {
  return (
    <div
      style={{
        width: "295px",
        height: "365px",
        position: "relative",
      }}
    >
      {BODY_PARTS.slice(0, incorrectLetters.length)}
      <div
        style={{
          height: "50px",
          width: "6px",
          background: "black",
          position: "absolute",
          top: 0,
          right: "39px",
        }}
      />
      <div
        style={{
          height: "6px",
          width: "150px",
          background: "black",
          transform: "translateX(calc(50% + 25px))",
        }}
      />
      <div
        style={{
          height: "350px",
          width: "6px",
          background: "black",
          transform: "translateX(100px)",
        }}
      />
      <div
        style={{
          height: "6px",
          width: "200px",
          background: "black",
        }}
      />
    </div>
  );
}
