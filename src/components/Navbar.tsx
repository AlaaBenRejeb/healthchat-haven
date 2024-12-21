import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-emerald-600 font-bold text-xl">HealthAI</div>
          <div className="hidden md:flex space-x-4">
            {[
              { id: "features", label: "Features" },
              { id: "testimonials", label: "Testimonials" },
              { id: "security", label: "Security" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="text-slate-600 hover:text-emerald-600"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
          <Button 
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => scrollToSection("cta")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;