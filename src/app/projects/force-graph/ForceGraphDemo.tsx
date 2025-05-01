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
            controlType="orbit"
            enableNavigationControls={true}
          />
        ) : (
          <div style={{ color: '#333', padding: '20px' }}>Loading...</div>
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
      {/* Legend */}
      <div
        className="absolute left-6 top-24 bg-white/90 border border-primary-100 rounded-xl shadow-lg p-6 max-w-xs z-10"
        style={{ pointerEvents: "auto", minWidth: 180 }}
        aria-label="Legend"
      >
        <strong className="block text-primary font-mono text-base mb-2">Legend</strong>
        <div className="flex flex-col gap-1 text-sm">
          <span><span style={{color:'#1976d2'}}>●</span> Core Principle</span>
          <span><span style={{color:'#43a047'}}>●</span> Usability/Accessibility</span>
          <span><span style={{color:'#fbc02d'}}>●</span> Aesthetics</span>
          <span><span style={{color:'#8e24aa'}}>●</span> Information Architecture</span>
          <span><span style={{color:'#e64a19'}}>●</span> Interaction Design</span>
          <span><span style={{color:'#0288d1'}}>●</span> User Testing/Research</span>
          <span><span style={{color:'#757575'}}>●</span> Other Concepts</span>
        </div>
      </div>
    </div>
  );
}
