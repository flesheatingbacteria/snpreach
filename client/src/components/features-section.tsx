import { CloudUpload, Mail, Calendar, Check } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: CloudUpload,
      title: "Secure File Upload",
      description: "Upload and organize all your accommodation documentation in one secure, FERPA-compliant location. Access your files anytime, anywhere.",
      benefits: [
        "Medical documentation",
        "Psychological evaluations",
        "Previous accommodation letters"
      ],
      bgColor: "bg-primary-100",
      iconColor: "text-primary-600"
    },
    {
      icon: Mail,
      title: "Smart Email Templates",
      description: "Pre-written, professional email templates for common accommodation requests. Just customize and send with confidence.",
      benefits: [
        "Professor communication",
        "Disability services requests",
        "Accommodation reminders"
      ],
      bgColor: "bg-success-100",
      iconColor: "text-success-600"
    },
    {
      icon: Calendar,
      title: "Test Tracker",
      description: "Never miss an accommodation deadline again. Track upcoming tests and ensure your accommodations are properly arranged.",
      benefits: [
        "Upcoming test alerts",
        "Accommodation status tracking",
        "Deadline reminders"
      ],
      bgColor: "bg-primary-100",
      iconColor: "text-primary-600"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Powerful features designed to simplify your academic accommodation management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-neutral-200"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className={`${feature.iconColor} text-xl`} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">{feature.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center">
                    <Check className="text-success-500 mr-2 h-4 w-4" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
