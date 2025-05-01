'use client';

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), { ssr: false });

interface Node {
  id: string;
  group: number;
}

interface Link {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

export default function ForceGraphDemo() {
  const fgRef = useRef<any>(null);
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  useEffect(() => {
    fetch("/projects/force-graph/ux-principles.json")
      .then(res => res.json())
      .then(setGraphData);
    fetch("/projects/force-graph/descriptions.json")
      .then(res => res.json())
      .then(setDescriptions);
  }, []);

  function getNodeDesc(node: Node | null) {
    if (!node) return "";
    return descriptions[node.id] || "";
  }

  return (
    <div className="flex-1 min-h-0 w-full h-full relative" style={{ background: "hsl(var(--card))" }}>
      {graphData ? (
        <ForceGraph3D
          ref={fgRef}
          graphData={graphData}
          nodeAutoColorBy="group"
          nodeLabel={node => `${node.id}\n${getNodeDesc(node as Node)}`}
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={0.005}
          linkDirectionalArrowLength={3}
          linkDirectionalArrowRelPos={1}
          onNodeHover={node => setHoveredNode(node as Node || null)}
          onNodeClick={node => setSelectedNode(node as Node || null)}
          backgroundColor="#f4f6fa"
          enableNodeDrag={true}
          nodeOpacity={1}
          nodeResolution={16}
          nodeRelSize={7}
        />
      ) : (
        <div style={{ color: '#333', padding: '20px' }}>Loading...</div>
      )}
      <div
        className="absolute right-6 top-24 bg-white/90 border border-primary-100 rounded-xl shadow-lg p-6 max-w-xs min-w-[180px] z-10"
        style={{ pointerEvents: "auto" }}
        role="status"
        aria-live="polite"
      >
        {selectedNode ? (
          <div>
            <strong className="text-primary font-mono text-lg">{selectedNode.id}</strong>
            <div className="desc mt-2 text-sm text-foreground/80">{getNodeDesc(selectedNode)}</div>
            <div className="mt-2 text-xs text-foreground/60">Group: {selectedNode.group}</div>
          </div>
        ) : hoveredNode ? (
          <div>
            <strong className="text-primary font-mono text-lg">{hoveredNode.id}</strong>
            <div className="desc mt-2 text-sm text-foreground/80">{getNodeDesc(hoveredNode)}</div>
            <div className="mt-2 text-xs text-foreground/60">Group: {hoveredNode.group}</div>
          </div>
        ) : (
          <div className="text-foreground/70">Hover or click a node for details.</div>
        )}
      </div>
    </div>
  );
}
