import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <section className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-primary-700 tracking-tight mb-4">About Outlaw AI Consultancy</h1>
        <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
          Outlaw AI Consultancy liberates businesses by challenging the AI status quo and deploying revolutionary digital strategies. We believe in radical honesty, disruptive innovation, and empowering clients to break free from industry constraints. Our mission is to catalyze industry disruption through unconventional, evidence-based AI solutions.
        </p>
      </section>
      <section className="mb-10 grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-xl shadow-sm border-l-4 border-primary-500 p-8 flex flex-col items-start">
          <h2 className="text-2xl font-mono font-semibold text-primary-700 mb-2">Our Vision</h2>
          <p className="text-medium-contrast">
            To be the catalyst for industry disruption through unconventional AI applications, grounded in the Outlaw archetype: liberation, revolution, and bold transformation.
          </p>
        </div>
        <div className="bg-card rounded-xl shadow-sm border-l-4 border-secondary-500 p-8 flex flex-col items-start">
          <h2 className="text-2xl font-mono font-semibold text-secondary-700 mb-2">Our Values</h2>
          <ul className="list-disc pl-5 space-y-2 text-medium-contrast">
            <li><span className="font-bold text-primary-700">Radical Honesty:</span> Unfiltered insights and transparency</li>
            <li><span className="font-bold text-secondary-700">Disruptive Innovation:</span> AI for radical market shifts</li>
            <li><span className="font-bold text-primary-700">Client Liberation:</span> Empowering freedom from constraints</li>
            <li><span className="font-bold text-secondary-700">Evidence-Based Disruption:</span> Data-driven, psychologically grounded solutions</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
