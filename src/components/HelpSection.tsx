
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, HandHeart, DollarSign, Home, Truck } from "lucide-react";

const HelpSection = () => {
  const helpOptions = [
    {
      icon: Home,
      title: "Bli fosterfamilj",
      description: "Ge en katt tillfällig omsorg medan vi söker permanent hem. Du får stöd och hjälp från oss.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Volontärarbete",
      description: "Hjälp till med daglig omsorg, socialisering och administrativt arbete på våra anläggningar.",
      color: "bg-green-500"
    },
    {
      icon: DollarSign,
      title: "Donera pengar",
      description: "Din donation hjälper oss att täcka veterinärkostnader, mat och andra nödvändigheter.",
      color: "bg-orange-500"
    },
    {
      icon: HandHeart,
      title: "Donera förnödenheter",
      description: "Vi behöver alltid kattmat, kattströ, leksaker, filtar och andra viktiga förnödenheter.",
      color: "bg-purple-500"
    },
    {
      icon: Truck,
      title: "Transport",
      description: "Hjälp oss transportera katter till och från veterinären eller till nya hem.",
      color: "bg-indigo-500"
    },
    {
      icon: Heart,
      title: "Sprid ordet",
      description: "Dela vårt arbete på sociala medier och berätta för vänner om katter som söker hem.",
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="hjalp" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hur du kan hjälpa
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Det finns många sätt att stödja vårt arbete. Varje insats, stor som liten, 
            gör skillnad för katterna som behöver vår hjälp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpOptions.map((option, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
              <CardContent className="p-6">
                <div className={`${option.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="h-6 w-6 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {option.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-300"
                >
                  Läs mer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Vill du göra en akut insats?
            </h4>
            <p className="text-gray-600 mb-6">
              Vi behöver alltid akut hjälp med veterinärkostnader och räddningsaktioner. 
              Din donation går direkt till katter i nöd.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Donera nu
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Kontakta oss
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
