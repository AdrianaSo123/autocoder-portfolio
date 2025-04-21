import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section - Using brand colors for psychological impact */}
        <div className="text-center space-y-6 max-w-[800px] mx-auto">
          <h1
            className="font-mono tracking-tighter text-transparent bg-clip-text"
            style={{
              backgroundImage:
                'linear-gradient(90deg, var(--primary-500), var(--accent-400), var(--secondary-400))',
            }}
          >
            Welcome to a More Inclusive, Friendly, and Professional AI Experience
          </h1>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            We believe in making advanced technology accessible, welcoming, and empowering for everyone. Our team values inclusivity, warmth, and professionalism—delivering honest insights and reliable expertise.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-base text-white"
              style={{
                background: 'linear-gradient(90deg, var(--accent-400), var(--primary-500))',
                borderRadius: '9999px',
                boxShadow: '0 2px 8px 0 var(--primary-100)',
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base border-accent-400 text-accent-700 hover:bg-accent-50"
              style={{ borderRadius: '9999px' }}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Core Principles Section - Using color psychology for impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <Card className="border-l-4 border-l-accent-400">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-primary-700">Inclusivity</CardTitle>
              <CardDescription>Welcoming and respecting every perspective</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We believe everyone deserves access to empowering technology. Our work and community are open, accessible, and respectful to all.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary-400">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-secondary-700">Friendliness</CardTitle>
              <CardDescription>Warm, approachable, and clear communication</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We make every interaction positive, supportive, and easy to understand—helping users feel confident and welcome.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary-400">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-accent-700">Professionalism & Honesty</CardTitle>
              <CardDescription>Expertise you can trust, with transparent insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We set high standards for our work and always communicate honestly, building trust through reliability and openness.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Revolution Section - Using gradient for visual impact */}
        <div className="text-center space-y-8 py-16">
          <h2 className="font-mono tracking-tighter text-gradient-brand max-w-3xl mx-auto">
            Ready to Break Free from AI Conformity?
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Join the ranks of Fortune 100 companies who've dared to challenge the established order and revolutionize their industries.
          </p>
          <Button
            size="lg"
            className="text-base text-white"
            style={{
              background: 'linear-gradient(90deg, var(--accent-400), var(--primary-500))',
              borderRadius: '9999px',
            }}
          >
            Schedule Your Strategy Session
          </Button>
        </div>
      </main>
    </div>
  );
}
