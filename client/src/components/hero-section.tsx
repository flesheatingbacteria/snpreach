import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleGetStarted = () => {
    window.location.href = "/signup";
  };

  const handleLearnMore = () => {
    // TODO: Scroll to features section
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 to-success-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral-800 mb-6 leading-tight">
            One place for all your <span className="text-primary-600">accommodations</span>
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline your academic journey with a centralized platform designed specifically for neurodiverse students to manage, track, and share their accommodations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleGetStarted}
              className="bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Button>
            <Button
              variant="outline"
              onClick={handleLearnMore}
              className="bg-neutral-0 text-primary-600 border-primary-600 hover:bg-primary-50 px-8 py-4 text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
