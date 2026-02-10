import FloatingLines from "./FloatingLines";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={5}
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
        linesGradient={["#2F4BA2", "#E947F5"]}
      />
    </div>
  );
}
