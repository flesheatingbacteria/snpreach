export interface CalendarEvent {
  date: number;
  type: "assignment" | "exam" | "accommodation" | "today" | "test";
  title: string;
  status?: "approved" | "pending" | "action-needed";
}

export interface UpcomingTest {
  id: number;
  title: string;
  course: string;
  date: string;
  time: string;
  status: "approved" | "pending" | "action-needed";
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
  bgColor: string;
  textColor: string;
}

export interface Integration {
  icon: any;
  title: string;
  description: string;
  status: string;
  statusColor: string;
  bgColor: string;
  iconColor: string;
}

export interface Feature {
  icon: any;
  title: string;
  description: string;
  benefits: string[];
  bgColor: string;
  iconColor: string;
}
