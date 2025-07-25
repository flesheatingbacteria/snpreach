import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Calendar, Upload, Mail, HelpCircle, ArrowRight, FileText, Clock, AlertCircle } from "lucide-react";
import type { CalendarEvent, UpcomingTest } from "@/lib/types";

export default function DashboardPreview() {
  const [currentMonth, setCurrentMonth] = useState("November 2024");

  // Sample calendar events (including tests from upcoming tests list)
  const calendarEvents: CalendarEvent[] = [
    { date: 12, type: "assignment", title: "Research Paper Due" },
    { date: 15, type: "test", title: "Psychology Midterm", status: "approved" },
    { date: 20, type: "test", title: "Chemistry Quiz", status: "action-needed" },
    { date: 22, type: "today", title: "Today" },
    { date: 25, type: "accommodation", title: "Accommodation Request Due" }
  ];

  // Sample upcoming tests
  const upcomingTests: UpcomingTest[] = [
    {
      id: 1,
      title: "Psychology Midterm",
      course: "PSYC 101",
      date: "Nov 15, 2024",
      time: "2:00 PM",
      status: "approved"
    },
    {
      id: 2,
      title: "Calculus Final",
      course: "MATH 201",
      date: "Dec 8, 2024",
      time: "10:00 AM",
      status: "pending"
    },
    {
      id: 3,
      title: "Chemistry Quiz",
      course: "CHEM 150",
      date: "Nov 20, 2024",
      time: "11:30 AM",
      status: "action-needed"
    }
  ];

  const handlePreviousMonth = () => {
    // TODO: Navigate to previous month
    console.log("Navigating to previous month");
  };

  const handleNextMonth = () => {
    // TODO: Navigate to next month
    console.log("Navigating to next month");
  };

  const handleViewAllTests = () => {
    // TODO: Navigate to full test tracker
    console.log("Navigating to full test tracker");
  };

  const handleUploadDocument = () => {
    // TODO: Open file upload modal
    console.log("Opening file upload modal");
  };

  const handleSendRequest = () => {
    // TODO: Open email template selector
    console.log("Opening email template selector");
  };

  const handleGetHelp = () => {
    // TODO: Navigate to help section
    console.log("Navigating to help section");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-success-100 text-success-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "action-needed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-neutral-100 text-neutral-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "approved":
        return "Approved";
      case "pending":
        return "Pending";
      case "action-needed":
        return "Action Needed";
      default:
        return "Unknown";
    }
  };

  // Generate calendar grid (simplified for demo)
  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      const event = calendarEvents.find(e => e.date === i);
      days.push({ day: i, event });
    }
    return days;
  };

  // Helper function to get test icon based on status
  const getTestIcon = (status?: string) => {
    switch (status) {
      case "approved":
        return <FileText className="h-2.5 w-2.5 text-success-600" />;
      case "pending":
        return <Clock className="h-2.5 w-2.5 text-yellow-600" />;
      case "action-needed":
        return <AlertCircle className="h-2.5 w-2.5 text-red-600" />;
      default:
        return <FileText className="h-2.5 w-2.5 text-primary-600" />;
    }
  };

  const calendarDays = generateCalendarDays();

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
            Your Personal Dashboard
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Stay organized with a clear overview of your accommodations, upcoming tests, and important deadlines
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Widget */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-800">Academic Calendar</h3>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePreviousMonth}
                    className="text-neutral-600 hover:text-primary-600 p-1"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <span className="text-neutral-800 font-medium px-3">{currentMonth}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleNextMonth}
                    className="text-neutral-600 hover:text-primary-600 p-1"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                  <div key={day} className="text-center text-sm font-medium text-neutral-600 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for proper calendar alignment */}
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square p-1"></div>
                ))}
                
                {calendarDays.map(({ day, event }) => (
                  <div
                    key={day}
                    className={`aspect-square p-1 text-center relative ${
                      event?.type === "today" ? "bg-primary-100 rounded" : ""
                    }`}
                  >
                    <span className={`text-sm ${
                      event ? "text-neutral-800 font-medium" : "text-neutral-600"
                    } ${event?.type === "today" ? "text-primary-800" : ""}`}>
                      {day}
                    </span>
                    
                    {/* Show test icon for test events */}
                    {event && event.type === "test" && (
                      <div className="absolute top-0.5 right-0.5">
                        {getTestIcon(event.status)}
                      </div>
                    )}
                    
                    {/* Show colored dot for other events */}
                    {event && event.type !== "today" && event.type !== "test" && (
                      <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-full ${
                        event.type === "assignment" ? "bg-primary-500" :
                        event.type === "exam" ? "bg-red-500" :
                        event.type === "accommodation" ? "bg-success-500" : ""
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-4 space-y-2">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
                    <span className="text-neutral-600">Assignment Due</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-success-500 rounded-full mr-2"></div>
                    <span className="text-neutral-600">Accommodation Request Due</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center">
                    <FileText className="h-3 w-3 text-success-600 mr-2" />
                    <span className="text-neutral-600">Test (Approved)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 text-yellow-600 mr-2" />
                    <span className="text-neutral-600">Test (Pending)</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="h-3 w-3 text-red-600 mr-2" />
                    <span className="text-neutral-600">Test (Action Needed)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Tests Widget */}
          <div className="space-y-6">
            {/* Tests Widget */}
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Upcoming Tests</h3>
              <div className="space-y-4">
                {upcomingTests.map((test) => (
                  <div key={test.id} className="bg-white rounded-lg p-4 border border-neutral-200">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-neutral-800">{test.title}</h4>
                        <p className="text-sm text-neutral-600">{test.course}</p>
                      </div>
                      <Badge className={`text-xs font-medium ${getStatusColor(test.status)}`}>
                        {getStatusText(test.status)}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                      <span>{test.date} • {test.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button
                variant="ghost"
                onClick={handleViewAllTests}
                className="w-full mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium py-2"
              >
                View All Tests <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button
                  onClick={handleUploadDocument}
                  className="w-full bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 text-sm font-medium"
                >
                  <Upload className="mr-2 h-4 w-4" aria-hidden="true" />
                  Upload Document
                </Button>
                <Button
                  onClick={handleSendRequest}
                  className="w-full bg-success-600 text-white hover:bg-success-700 px-4 py-2 text-sm font-medium"
                >
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  Send Request
                </Button>
                <Button
                  variant="outline"
                  onClick={handleGetHelp}
                  className="w-full bg-neutral-0 text-neutral-700 border-neutral-300 hover:bg-neutral-50 px-4 py-2 text-sm font-medium"
                >
                  <HelpCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                  Get Help
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
