
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-orange-500" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bakgårdskatt</h1>
              <p className="text-sm text-gray-600">Hjälper katter hitta hem</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#hem" className="text-gray-700 hover:text-orange-500 transition-colors">Hem</a>
            <a href="#katter" className="text-gray-700 hover:text-orange-500 transition-colors">Våra katter</a>
            <a href="#hjalp" className="text-gray-700 hover:text-orange-500 transition-colors">Hur du kan hjälpa</a>
            <a href="#berattelser" className="text-gray-700 hover:text-orange-500 transition-colors">Berättelser</a>
            <a href="#kontakt" className="text-gray-700 hover:text-orange-500 transition-colors">Kontakt</a>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#hem" className="text-gray-700 hover:text-orange-500 transition-colors" onClick={toggleMenu}>Hem</a>
              <a href="#katter" className="text-gray-700 hover:text-orange-500 transition-colors" onClick={toggleMenu}>Våra katter</a>
              <a href="#hjalp" className="text-gray-700 hover:text-orange-500 transition-colors" onClick={toggleMenu}>Hur du kan hjälpa</a>
              <a href="#berattelser" className="text-gray-700 hover:text-orange-500 transition-colors" onClick={toggleMenu}>Berättelser</a>
              <a href="#kontakt" className="text-gray-700 hover:text-orange-500 transition-colors" onClick={toggleMenu}>Kontakt</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
