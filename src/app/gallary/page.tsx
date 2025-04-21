import React from "react";

// Example fun gallery items (replace with your own images or links!)
// No fun items yet! Add your images to /public/gallery/ and update this array to showcase your experiments.
const funItems: { title: string; img: string; description: string }[] = [];


export default function FunGalleryPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <section className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-accent-700 mb-4">Just for Fun</h1>
        <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
          A playful gallery of experiments, doodles, and creative side projects. Here’s where I let my curiosity and imagination run wild!
        </p>
      </section>
      {funItems.length === 0 ? (
        <div className="text-center text-medium-contrast py-16">
          <p className="text-lg mb-4">No fun experiments in the gallery yet!</p>
          <p className="text-sm">Add your images to <code>/public/gallery/</code> and update <code>src/app/gallary/page.tsx</code> to showcase your creative work here.</p>
        </div>
      ) : (
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {funItems.map((item, i) => (
            <div key={i} className="bg-card rounded-xl shadow-md p-4 flex flex-col items-center">
              <div className="w-full h-48 flex items-center justify-center bg-neutral-100 rounded-lg overflow-hidden mb-4">
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
