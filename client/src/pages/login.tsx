import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accessibility, Eye, EyeOff } from "lucide-react";
import { loginSchema, type LoginData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Login() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await apiRequest("POST", "/api/auth/login", data);
      return response.json();
    },
    onSuccess: (response: any) => {
      // Check if user has completed onboarding
      if (response.user.isOnboardingComplete) {
        setLocation("/dashboard");
      } else {
        setLocation("/onboarding/profile");
      }
    },
  });

  const onSubmit = (data: LoginData) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-success-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Accessibility className="text-primary-600 text-3xl mr-3" />
            <span className="text-2xl font-bold text-neutral-800">AccommodateMe</span>
          </div>
          <CardTitle className="text-2xl font-bold text-neutral-800">Welcome Back</CardTitle>
          <CardDescription className="text-neutral-600">
            Sign in to manage your academic accommodations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-neutral-700">Username or Email</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username or email"
                {...form.register("username")}
                className="border-neutral-200 focus:border-primary-500 focus:ring-primary-500"
              />
              {form.formState.errors.username && (
                <p className="text-sm text-red-500">{form.formState.errors.username.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-neutral-700">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...form.register("password")}
                  className="border-neutral-200 focus:border-primary-500 focus:ring-primary-500 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 text-neutral-600 hover:text-primary-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {form.formState.errors.password && (
                <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
              )}
            </div>

            {loginMutation.error && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">
                  {loginMutation.error.message || "Invalid credentials. Please try again."}
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-primary-600 text-white hover:bg-primary-700 py-3 text-base font-medium"
            >
              {loginMutation.isPending ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-neutral-600">
              Don't have an account?{" "}
              <Button
                variant="link"
                className="text-primary-600 hover:text-primary-700 p-0 h-auto font-medium"
                onClick={() => setLocation("/signup")}
              >
                Create one here
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}