import { Button } from "@/components/ui/button";

export default function CTASection() {
  const handleSignUp = () => {
    // TODO: Navigate to registration form
    console.log("Navigating to registration form");
  };

  const handleScheduleDemo = () => {
    // TODO: Open demo scheduling modal
    console.log("Opening demo scheduling modal");
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Simplify Your Academic Journey?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
          Join thousands of neurodiverse students who have already transformed their accommodation management experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleSignUp}
            className="bg-white text-primary-600 hover:bg-neutral-50 px-8 py-4 text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 shadow-lg hover:shadow-xl"
          >
            Get Started Free
          </Button>
          <Button
            onClick={handleScheduleDemo}
            className="bg-primary-500 text-white hover:bg-primary-400 px-8 py-4 text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            Schedule a Demo
          </Button>
        </div>
        <p className="text-sm mt-6 opacity-75">
          No credit card required • FERPA compliant • Available 24/7
        </p>
      </div>
    </section>
  );
}
