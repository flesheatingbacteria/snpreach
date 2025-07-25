import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Finally, a platform that understands my needs as a student with ADHD. The clean interface and organized layout help me stay focused on what matters most.",
      name: "Alex S.",
      role: "Junior, Psychology Major",
      initials: "AS",
      bgColor: "bg-primary-100",
      textColor: "text-primary-600"
    },
    {
      id: 2,
      quote: "The email templates saved me so much anxiety when communicating with professors. I never have to worry about saying the wrong thing anymore.",
      name: "Maria R.",
      role: "Senior, Engineering",
      initials: "MR",
      bgColor: "bg-success-100",
      textColor: "text-success-600"
    },
    {
      id: 3,
      quote: "I used to miss accommodation deadlines all the time. Now I get gentle reminders and never have to stress about being prepared for exams.",
      name: "Jordan L.",
      role: "Sophomore, Business",
      initials: "JL",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
            What Students Are Saying
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Real feedback from neurodiverse students who have transformed their academic experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <blockquote className="text-neutral-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className={`w-10 h-10 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-3`}>
                  <span className={`${testimonial.textColor} font-medium`}>{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-medium text-neutral-800">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
