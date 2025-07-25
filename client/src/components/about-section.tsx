export default function AboutSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-8">
            Designed for <span className="text-success-600">Neurodiverse</span> Success
          </h2>
          <div className="prose prose-lg mx-auto text-neutral-600 leading-relaxed">
            <p className="text-xl mb-6">
              Managing academic accommodations shouldn't be stressful. AccommodateMe provides a calm, organized space where you can keep track of all your documentation, upcoming tests, and accommodation requests in one secure location.
            </p>
            <p className="text-lg">
              Built with input from neurodiverse students and accessibility experts, our platform reduces cognitive load while ensuring you never miss an important deadline or accommodation opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
