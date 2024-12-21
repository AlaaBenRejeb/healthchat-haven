import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    if (location.pathname === "/learn-more") {
      // If on learn-more page, navigate to home first
      window.location.href = `/#${id}`;
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const navItems = [
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing" },
    { id: "testimonials", label: "Testimonials" },
    { id: "security", label: "Security" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-emerald-600 font-bold text-xl hover:text-emerald-700 transition-colors">
            HealthAI
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="text-slate-600 hover:text-emerald-600"
                onClick={() => handleNavigation(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => handleNavigation("cta")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start text-slate-600 hover:text-emerald-600"
                      onClick={() => handleNavigation(item.id)}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => handleNavigation("cta")}
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;