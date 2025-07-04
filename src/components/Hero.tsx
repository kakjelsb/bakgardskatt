
import { Button } from "@/components/ui/button";
import { Heart, PawPrint } from "lucide-react";

const Hero = () => {
  return (
    <section id="hjem" className="relative bg-gradient-to-br from-orange-50 to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-orange-600">
                <PawPrint className="h-6 w-6" />
                <span className="font-semibold">Velkommen til Bakgårdskatt</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Gi katter en<br />
                <span className="text-orange-500">ny sjanse</span><br />
                til kjærlighet
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Vi arbeider med å omPlassere og ta vare på forladte og bortkomne katter. 
                Hver katt fortjener et kjærlig hjem og en ny sjanse til lykke.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Heart className="mr-2 h-5 w-5" />
                Adopter en katt
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Bli frivillig
              </Button>
            </div>

          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=800&q=80"
                alt="Søt grå kattunge som trenger et hjem"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute top-8 right-8 bg-white p-4 rounded-full shadow-lg z-20">
              <Heart className="h-8 w-8 text-red-500 fill-current" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-500 p-6 rounded-full shadow-lg z-20">
              <PawPrint className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
