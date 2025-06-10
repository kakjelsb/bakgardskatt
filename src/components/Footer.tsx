
import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="text-2xl font-bold">Bakgårdskatt</h3>
                <p className="text-gray-400">Hjelper katter finne hjem</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Vi arbeider med å omPlassere og ta vare på forladte og bortkomne katter. 
              Hver katt fortjener et kjærlig hjem og en ny sjanse til lykke.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hurtiglenker</h4>
            <ul className="space-y-2">
              <li><a href="#hjem" className="text-gray-300 hover:text-orange-500 transition-colors">Hjem</a></li>
              <li><a href="#katter" className="text-gray-300 hover:text-orange-500 transition-colors">Våre katter</a></li>
              <li><a href="#hjelp" className="text-gray-300 hover:text-orange-500 transition-colors">Hvordan du kan hjelpe</a></li>
              <li><a href="#historier" className="text-gray-300 hover:text-orange-500 transition-colors">Historier</a></li>
              <li><a href="#kontakt" className="text-gray-300 hover:text-orange-500 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktinfo</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">22 12 34 56</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">info@bakgardskatt.no</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">Kattegata 123, Oslo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Bakgårdskatt. Alle rettigheter forbeholdt.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Personvern</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Vilkår</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
