import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Accessibility, User } from "lucide-react";
import { profileSetupSchema, type ProfileSetupData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function OnboardingProfile() {
  const [, setLocation] = useLocation();

  // Get current user data
  const { data: currentUser } = useQuery({
    queryKey: ["/api/auth/me"],
  });

  const form = useForm<ProfileSetupData>({
    resolver: zodResolver(profileSetupSchema),
    defaultValues: {
      firstName: (currentUser as any)?.user?.firstName || "",
      lastName: (currentUser as any)?.user?.lastName || "",
      school: (currentUser as any)?.user?.school || "",
      studentId: (currentUser as any)?.user?.studentId || "",
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: async (data: ProfileSetupData) => {
      const response = await apiRequest("PUT", "/api/auth/profile", data);
      return response.json();
    },
    onSuccess: () => {
      setLocation("/onboarding/complete");
    },
  });

  const onSubmit = (data: ProfileSetupData) => {
    updateProfileMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-success-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Accessibility className="text-primary-600 text-3xl mr-3" />
            <span className="text-2xl font-bold text-neutral-800">AccommodateMe</span>
          </div>
          <CardTitle className="text-2xl font-bold text-neutral-800">Complete Your Profile</CardTitle>
          <CardDescription className="text-neutral-600">
            Let's set up your profile to personalize your experience
          </CardDescription>
          
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm text-neutral-600 mb-2">
              <span>Step 1 of 2</span>
              <span>Profile Setup</span>
            </div>
            <Progress value={50} className="h-2" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mx-auto mb-6">
            <User className="text-primary-600 text-2xl" />
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-neutral-700">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Your first name"
                  {...form.register("firstName")}
                  className="border-neutral-200 focus:border-primary-500 focus:ring-primary-500"
                />
                {form.formState.errors.firstName && (
                  <p className="text-sm text-red-500">{form.formState.errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-neutral-700">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Your last name"
                  {...form.register("lastName")}
                  className="border-neutral-200 focus:border-primary-500 focus:ring-primary-500"
                />
                {form.formState.errors.lastName && (
                  <p className="text-sm text-red-500">{form.formState.errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="school" className="text-neutral-700">School/University</Label>
              <Input
                id="school"
                type="text"
                placeholder="University of Example"
                {...form.register("school")}
                className="border-neutral-200 focus:border-primary-500 focus:ring-primary-500"
              />
              {form.formState.errors.school && (
                <p className="text-sm text-red-500">{form.formState.errors.school.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentId" className="text-neutral-700">
                Student ID <span className="text-neutral-500">(optional)</span>
              </Label>
              <Input
                id="studentId"
                type="text"
                placeholder="Your student ID number"
                {...form.register("studentId")}
                className="border-neutral-200 focus:border-primary-500 focus:ring-primary-500"
              />
              {form.formState.errors.studentId && (
                <p className="text-sm text-red-500">{form.formState.errors.studentId.message}</p>
              )}
            </div>

            {updateProfileMutation.error && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">
                  {updateProfileMutation.error.message || "Failed to update profile. Please try again."}
                </AlertDescription>
              </Alert>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setLocation("/")}
                className="flex-1 bg-neutral-0 text-neutral-700 border-neutral-300 hover:bg-neutral-50"
              >
                Skip for Now
              </Button>
              <Button
                type="submit"
                disabled={updateProfileMutation.isPending}
                className="flex-1 bg-primary-600 text-white hover:bg-primary-700"
              >
                {updateProfileMutation.isPending ? "Saving..." : "Continue"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}