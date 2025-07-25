import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Accessibility } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleAddAccommodations = () => {
    // TODO: Navigate to add accommodations form
    console.log("Navigating to add accommodations form");
  };

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Accessibility className="text-primary-600 text-2xl mr-3" aria-hidden="true" />
              <span className="text-xl font-semibold text-neutral-800">AccommodateMe</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              My Profile
            </a>
            <a 
              href="#" 
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Submit Docs
            </a>
            <a 
              href="#" 
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Request Help
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={handleLogin}
              className="bg-neutral-0 text-primary-600 border-primary-600 hover:bg-primary-50 px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Log In / Sign Up
            </Button>
            <Button
              onClick={handleAddAccommodations}
              className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Add Accommodations
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-700 hover:text-primary-600 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Open main menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-neutral-200 py-4">
            <div className="space-y-2">
              <a href="#" className="block text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#" className="block text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
                My Profile
              </a>
              <a href="#" className="block text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
                Submit Docs
              </a>
              <a href="#" className="block text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
                Request Help
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <Button
                variant="outline"
                onClick={handleLogin}
                className="w-full bg-neutral-0 text-primary-600 border-primary-600 hover:bg-primary-50 px-4 py-2 text-sm font-medium"
              >
                Log In / Sign Up
              </Button>
              <Button
                onClick={handleAddAccommodations}
                className="w-full bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 text-sm font-medium"
              >
                Add Accommodations
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
