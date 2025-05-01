import React, { useRef, useEffect } from "react";
import ForceGraph2D, { ForceGraphMethods } from "react-force-graph-2d";

// Example graph data (replace with your own or make dynamic)
const data = {
  nodes: [
    { id: "A", group: 1 },
    { id: "B", group: 1 },
    { id: "C", group: 2 },
    { id: "D", group: 2 },
    { id: "E", group: 3 }
  ],
  links: [
    { source: "A", target: "B" },
    { source: "A", target: "C" },
    { source: "B", target: "D" },
    { source: "C", target: "D" },
    { source: "C", target: "E" }
  ]
};

export default function ForceGraphDemo() {
  const fgRef = useRef<ForceGraphMethods>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = React.useState({ width: 300, height: 300 });

  // Resize graph to fill parent
  React.useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (fgRef.current) {
      fgRef.current.zoomToFit(400);
    }
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="flex-1 min-h-0 w-full h-full"
      style={{ background: "hsl(var(--card))", borderRadius: 0 }}
    >
      <ForceGraph2D
        ref={fgRef}
        graphData={data}
        width={dimensions.width}
        height={dimensions.height}
        nodeLabel="id"
        nodeAutoColorBy="group"
        linkColor={() => "var(--primary-400)"}
        backgroundColor="rgba(255,255,255,0)"
        nodeCanvasObjectMode={() => "after"}
        nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
          const label = node.id;
          const fontSize = 16 / globalScale;
          ctx.font = `${fontSize}px IBM Plex Mono, monospace`;
          ctx.fillStyle = "var(--primary-900)";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(label, node.x, node.y + 18);
        }}
      />
    </div>
  );
}
