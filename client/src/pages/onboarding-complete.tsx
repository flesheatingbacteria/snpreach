import { useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Accessibility, CheckCircle, Calendar, Upload, Mail } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function OnboardingComplete() {
  const [, setLocation] = useLocation();

  const completeOnboardingMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/auth/complete-onboarding");
      return response.json();
    },
    onSuccess: () => {
      setLocation("/dashboard");
    },
  });

  const handleComplete = () => {
    completeOnboardingMutation.mutate();
  };

  const features = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Store all your accommodation documentation in one secure place"
    },
    {
      icon: Calendar,
      title: "Track Tests",
      description: "Never miss an accommodation deadline with our test tracker"
    },
    {
      icon: Mail,
      title: "Email Templates",
      description: "Professional templates for communicating with professors"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-success-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Accessibility className="text-primary-600 text-3xl mr-3" />
            <span className="text-2xl font-bold text-neutral-800">AccommodateMe</span>
          </div>
          <CardTitle className="text-2xl font-bold text-neutral-800">You're All Set!</CardTitle>
          <CardDescription className="text-neutral-600">
            Welcome to your new accommodation management platform
          </CardDescription>
          
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm text-neutral-600 mb-2">
              <span>Step 2 of 2</span>
              <span>Complete</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center w-20 h-20 bg-success-100 rounded-full mx-auto">
            <CheckCircle className="text-success-600 text-3xl" />
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">
              Your account is ready!
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              You now have access to all the tools you need to manage your academic accommodations with confidence.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-neutral-800 text-center">What you can do now:</h4>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-primary-600 text-sm" />
                </div>
                <div>
                  <h5 className="font-medium text-neutral-800 text-sm">{feature.title}</h5>
                  <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={handleComplete}
            disabled={completeOnboardingMutation.isPending}
            className="w-full bg-primary-600 text-white hover:bg-primary-700 py-3 text-base font-medium"
          >
            {completeOnboardingMutation.isPending ? "Setting up..." : "Enter Your Dashboard"}
          </Button>

          <p className="text-xs text-neutral-500 text-center">
            Need help getting started? Check out our{" "}
            <Button variant="link" className="text-primary-600 p-0 h-auto text-xs">
              quick start guide
            </Button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}