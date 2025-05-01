'use client';

import React, { useEffect, useRef, useState } from "react";



import dynamic from "next/dynamic";

// Deterministic color palette for group numbers (same as force-graph-3d default)
const GROUP_COLORS = [
  '#1976d2', // 0 - Blue
  '#43a047', // 1 - Green
  '#fbc02d', // 2 - Yellow
  '#8e24aa', // 3 - Purple
  '#e64a19', // 4 - Orange
  '#0288d1', // 5 - Teal
  '#757575', // 6 - Gray
  '#f06292', // 7 - Pink
  '#00bcd4', // 8 - Cyan
  '#aeea00', // 9 - Lime
  '#ff7043', // 10 - Deep Orange
  '#789262', // 11 - Olive
  '#d4e157', // 12 - Light Lime
  '#ba68c8', // 13 - Lavender
  '#ffd600', // 14 - Bright Yellow
];

// Group labels matching the data
const GROUP_LABELS: Record<number, string> = {
  0: 'Core Principle',
  1: 'Usability, Accessibility, Aesthetics, IA, Interaction, User Testing',
  2: 'Consistency, Feedback, Learnability',
  3: 'Error Prevention, Keyboard Navigation, Contrast',
  4: 'Typography, Color Theory',
  5: 'Layout, Navigation',
  6: 'Affordance, Simplicity, Flexibility',
  7: 'Persona Development, User Research',
  8: 'Surveys, Interviews, Card Sorting',
  9: 'Wireframes, Prototyping',
 10: 'Heuristic Evaluation, A/B Testing',
 11: 'Journey Mapping, Task Analysis',
 12: 'Mobile Responsiveness',
 13: 'Microinteractions, Onboarding, Progressive Disclosure',
 14: 'Emotional Design, Delight, Skeuomorphism, Flat Design',
};

function Legend({ groups, graphData }: { groups: number[], graphData: GraphData }) {
  // Build a mapping of group number -> all node names in that group
  const groupNodes: Record<number, string[]> = {};
  graphData.nodes.forEach(node => {
    if (!groupNodes[node.group]) groupNodes[node.group] = [];
    groupNodes[node.group].push(node.id);
  });
  return (
    <aside
      className="absolute left-4 top-0 bottom-0 my-auto bg-white/95 border border-primary-100 rounded-xl shadow-lg p-4 max-w-xs min-w-[160px] z-20 flex flex-col gap-2 max-h-[90%] overflow-y-auto"
      style={{ pointerEvents: "auto" }}
      aria-label="Legend"
    >
      <strong className="block text-primary font-mono text-base mb-2">Legend</strong>
      <div className="flex flex-col gap-4 text-sm">
        {groups.sort((a, b) => a - b).map(group => (
          <div
            key={group}
            className="flex flex-col gap-1 rounded-lg p-2 mb-2"
            style={{ borderLeft: `6px solid ${GROUP_COLORS[group] || '#757575'}`, background: `${GROUP_COLORS[group]}22` }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span style={{ color: GROUP_COLORS[group] || '#757575', fontSize: 22, lineHeight: 1 }} aria-label={`Group ${group} color`}>●</span>
              <span className="font-semibold text-foreground/90">Group {group}</span>
            </div>
            <ul className="ml-6 list-disc text-xs text-foreground/80">
              {groupNodes[group].map(nodeName => (
                <li key={nodeName}>{nodeName}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}


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
  const containerRef = useRef<HTMLDivElement>(null);
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [graphWidth, setGraphWidth] = useState<number>(800);
  const [graphHeight, setGraphHeight] = useState<number>(600);

  // ResizeObserver to keep graph full-size
  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        setGraphWidth(containerRef.current.offsetWidth);
        setGraphHeight(containerRef.current.offsetHeight);
      }
    }
    updateSize();
    const resizeObserver = new (window as any).ResizeObserver(updateSize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    window.addEventListener('resize', updateSize);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  // Continuously disable zoom on OrbitControls so the graph never zooms, but page scroll always works
  useEffect(() => {
    let stop = false;
    function disableZoomLoop() {
      if (fgRef.current && fgRef.current.controls) {
        const controls = fgRef.current.controls();
        if (controls && controls.enableZoom !== undefined) {
          controls.enableZoom = false;
        }
      }
      if (!stop) requestAnimationFrame(disableZoomLoop);
    }
    disableZoomLoop();
    return () => { stop = true; };
  }, [fgRef, graphData]);


  useEffect(() => {
    fetch("/projects/force-graph/ux-principles.json")
      .then(res => res.json())
      .then(data => {
        // Assign a color to each node based on its group
        const coloredNodes = data.nodes.map((n: any) => ({ ...n, color: GROUP_COLORS[n.group] || '#757575' }));
        setGraphData({ ...data, nodes: coloredNodes });
      });
    fetch("/projects/force-graph/descriptions.json")
      .then(res => res.json())
      .then(setDescriptions);
  }, []);

  function getNodeDesc(node: Node | null) {
    if (!node) return "";
    return descriptions[node.id] || "";
  }

  return (
    <div className="flex-1 min-h-0 w-full h-full relative" style={{ background: "hsl(var(--card))", height: '100%' }}>
      <div
        ref={containerRef}
        style={{ position: 'relative', width: '100%', height: '70vh', minHeight: 400, maxHeight: 'calc(100vh - 180px)', pointerEvents: 'auto' }}
        onWheel={e => { e.stopPropagation(); }}
      >
        {graphData ? (
          <ForceGraph3D
            ref={fgRef}
            graphData={graphData}
            width={graphWidth}
            height={graphHeight}
            nodeColor={node => (node.color || GROUP_COLORS[node.group] || '#757575')}
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
            controlType="orbit"
            enableNavigationControls={true}
          />
        ) : (
          <div style={{ color: '#333', padding: '20px' }}>Loading...</div>
        )}

        {/* Dynamic Legend: matches group numbers and force graph colors */}
        {graphData && (
          <Legend groups={Array.from(new Set(graphData.nodes.map(n => n.group)))} graphData={graphData} />
        )}
      </div>
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
