import React from "react";

// No fun items yet! Add your images to /public/playground/ and update this array to showcase your experiments.
const funItems: { title: string; img: string; description: string }[] = [
  {
    title: "Figma Screen",
    img: "/images/playground/figma%20screen.png",
    description: "A screenshot from Figma."
  },
  {
    title: "Research Affinity Diagram",
    img: "/images/playground/research.png",
    description: "Affinity diagram created during user research to synthesize insights and identify key themes."
  },
  {
    title: "First Ever Figma Project",
    img: "/images/playground/first%20ever%20figma%20project.png",
    description: "My very first project in Figma—where my journey into UI/UX design began!"
  },
  {
    title: "Jungwon (Drawing)",
    img: "/images/playground/jungwon.jpg",
    description: "A digital drawing of Jungwon, created during my free time as a creative exercise."
  },
  {
    title: "Seagull in California",
    img: "/images/playground/seagull.jpg",
    description: "A photo of a seagull taken during a vacation in California."
  }
];

export default function PlaygroundPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <section className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-accent-700 mb-4">Playground</h1>
        <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
          A playful collection of experiments, doodles, and creative side projects. Here’s where I let my curiosity and imagination run wild!
        </p>
      </section>
      {funItems.length === 0 ? (
        <div className="text-center text-medium-contrast py-16">
          <p className="text-lg mb-4">No fun experiments in the playground yet!</p>
          <p className="text-sm">Add your images to <code>/public/playground/</code> and update <code>src/app/playground/page.tsx</code> to showcase your creative work here.</p>
        </div>
      ) : (
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {funItems.map((item, i) => (
            <div key={i} className="bg-card rounded-xl shadow-md flex flex-col items-center">
              <div className="w-full h-[28rem] flex items-center justify-center bg-neutral-100 rounded-lg overflow-hidden mb-2">
                <img src={item.img} alt={item.title} className="object-contain h-full w-full" />
              </div>
              <h2 className="text-xl font-mono font-semibold text-accent-700 mb-2 text-center">{item.title}</h2>
              <p className="text-medium-contrast text-center text-sm">{item.description}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
