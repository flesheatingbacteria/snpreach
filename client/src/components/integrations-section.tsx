import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, GraduationCap, Building, CalendarDays } from "lucide-react";

export default function IntegrationsSection() {
  const integrations = [
    {
      icon: ClipboardCheck,
      title: "ACT",
      description: "Direct accommodation requests for ACT testing with real-time status updates",
      status: "In Development",
      statusColor: "bg-blue-100 text-blue-800",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "CollegeBoard",
      description: "SAT and AP exam accommodations managed directly through your dashboard",
      status: "Planning Phase",
      statusColor: "bg-green-100 text-green-800",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Building,
      title: "University Portals",
      description: "Sync with your school's disability services and course management systems",
      status: "Beta Testing",
      statusColor: "bg-purple-100 text-purple-800",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: CalendarDays,
      title: "Calendar Apps",
      description: "Two-way sync with Google Calendar, Outlook, and Apple Calendar",
      status: "Q1 2025",
      statusColor: "bg-orange-100 text-orange-800",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const handleNotifyMe = () => {
    // TODO: Open email subscription modal
    console.log("Opening email subscription modal");
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
            Coming Soon: Seamless Integrations
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We're working on direct integrations with major testing organizations to make your accommodation process even smoother
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 ${integration.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <integration.icon className={`${integration.iconColor} text-2xl`} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">{integration.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                {integration.description}
              </p>
              <Badge className={`text-xs font-medium ${integration.statusColor}`}>
                {integration.status}
              </Badge>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">
            Want to be notified when these integrations are available?
          </p>
          <Button
            onClick={handleNotifyMe}
            className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Notify Me When Available
          </Button>
        </div>
      </div>
    </section>
  );
}
