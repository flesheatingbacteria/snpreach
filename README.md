# AccommodateMe - Academic Accommodation Management Platform

## Overview

AccommodateMe is a full-stack web application designed to help neurodiverse students manage their academic accommodations. The platform provides a centralized space for organizing documentation, tracking upcoming tests, and communicating with professors and disability services. Built with React, Express.js, and PostgreSQL, the application prioritizes accessibility and user-friendly design specifically tailored for neurodiverse users.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system optimized for neurodiverse users
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API with JSON responses
- **Session Management**: Express sessions with PostgreSQL store
- **Error Handling**: Centralized error middleware with structured responses

### Design System
- **Accessibility First**: Custom color palette designed for neurodiverse users
- **Component Library**: Shadcn/ui with "new-york" style variant
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Typography**: Clear, readable fonts with appropriate contrast ratios

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless driver
- **Migrations**: Managed through Drizzle Kit
- **Schema**: Shared TypeScript schema definitions with Zod validation

### Storage Interface
- **Abstraction**: IStorage interface for flexible data access
- **Implementation**: In-memory storage for development, designed for easy PostgreSQL integration
- **CRUD Operations**: User management with extensible interface for additional entities

### Authentication & Security
- **Session-based**: Express sessions with PostgreSQL persistence
- **FERPA Compliance**: Designed to meet educational privacy requirements
- **Secure File Handling**: Prepared for secure document upload and storage

### UI Components
- **Landing Page**: Complete marketing site with hero section, features, testimonials
- **Dashboard Preview**: Interactive calendar and test tracking components
- **Accessibility Features**: High contrast colors, clear navigation, reduced cognitive load
- **Responsive Design**: Optimized for mobile and desktop usage

## Data Flow

### Client-Server Communication
1. Frontend makes API requests to `/api/*` endpoints
2. Express middleware handles request logging and error catching
3. Routes delegate to storage layer for data operations
4. Responses include appropriate HTTP status codes and JSON payloads

### State Management
1. TanStack Query manages server state with automatic caching
2. React Hook Form handles form state and validation
3. Custom hooks provide reusable UI logic (mobile detection, toast notifications)

### Build Process
1. Vite builds and bundles the React frontend
2. ESBuild compiles the Express server for production
3. Static assets served from `dist/public` directory
4. Development mode includes HMR and error overlays

## External Dependencies

### Core Libraries
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, Lucide icons, React Icons
- **Data Fetching**: TanStack Query for server state
- **Database**: Drizzle ORM, Neon PostgreSQL driver
- **Validation**: Zod for schema validation
- **Styling**: Tailwind CSS, Class Variance Authority

### Development Tools
- **Build Tools**: Vite, ESBuild, TypeScript
- **Linting**: ESLint configuration (implied)
- **Development**: TSX for running TypeScript directly
- **Replit Integration**: Cartographer plugin for development environment

### Utility Libraries
- **Date Handling**: date-fns for date manipulation
- **UI Utilities**: clsx, tailwind-merge for conditional styling
- **Carousel**: Embla Carousel for interactive components
- **Command Menu**: cmdk for search interfaces

## Deployment Strategy

### Development Environment
- **Local Development**: Uses TSX to run TypeScript directly
- **Hot Reloading**: Vite HMR for frontend, server restart for backend changes
- **Database**: Environment variable `DATABASE_URL` for connection
- **Replit Integration**: Special handling for Replit development environment

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild compiles server to `dist/index.js`
- **Single Process**: Express serves both API and static files
- **Environment Variables**: `NODE_ENV` controls development vs production behavior

### Configuration Management
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Build Tools**: Separate configurations for client and server builds
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer
- **Database**: Drizzle configuration points to shared schema and PostgreSQL dialect

The application is structured as a monorepo with clear separation between client, server, and shared code, making it easy to maintain and extend. The architecture prioritizes type safety, developer experience, and accessibility for the target user base of neurodiverse students.
