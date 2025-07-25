import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accessibility, Calendar, Upload, Mail, User, LogOut } from "lucide-react";

export default function Dashboard() {
  const [, setLocation] = useLocation();

  // Get current user data
  const { data: currentUser, isLoading } = useQuery({
    queryKey: ["/api/auth/me"],
  });

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        setLocation("/");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-success-50 flex items-center justify-center">
        <div className="text-center">
          <Accessibility className="text-primary-600 text-4xl mx-auto mb-4" />
          <p className="text-neutral-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const user = (currentUser as any)?.user;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Accessibility className="text-primary-600 text-2xl mr-3" />
              <span className="text-xl font-semibold text-neutral-800">AccommodateMe</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-neutral-600">Welcome back, {user?.firstName || user?.username}!</span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="text-neutral-600 hover:text-red-600 border-neutral-300"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-800 mb-2">Your Dashboard</h1>
          <p className="text-neutral-600">
            Manage all your academic accommodations in one place
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Upload className="text-primary-600 h-5 w-5" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-2">Upload Documents</CardTitle>
              <p className="text-neutral-600 text-sm">
                Add your accommodation documentation securely
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                  <Calendar className="text-success-600 h-5 w-5" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-2">Track Tests</CardTitle>
              <p className="text-neutral-600 text-sm">
                Never miss an accommodation deadline again
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-600 h-5 w-5" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-2">Send Requests</CardTitle>
              <p className="text-neutral-600 text-sm">
                Professional email templates for professors
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <User className="text-purple-600 h-5 w-5" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-2">My Profile</CardTitle>
              <p className="text-neutral-600 text-sm">
                Update your personal information and settings
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Message for New Users */}
        {!user?.isOnboardingComplete && (
          <Card className="border-primary-200 bg-primary-50 mb-8">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Accessibility className="text-primary-600 h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">
                    Welcome to AccommodateMe!
                  </h3>
                  <p className="text-primary-700 mb-4">
                    You're all set up and ready to manage your accommodations. Here are some recommended first steps:
                  </p>
                  <div className="space-y-2 text-primary-700 text-sm">
                    <div>• Upload your existing accommodation documentation</div>
                    <div>• Add upcoming tests that need accommodations</div>
                    <div>• Explore email templates for common requests</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Coming Soon Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-neutral-800">Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-600">
              <div>• Direct integration with testing organizations</div>
              <div>• Calendar sync with Google Calendar and Outlook</div>
              <div>• Automated deadline reminders</div>
              <div>• Professor communication tracking</div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}