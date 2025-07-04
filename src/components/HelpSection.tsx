
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, HandHeart, DollarSign, Home, Truck } from "lucide-react";

const HelpSection = () => {
  const helpOptions = [
    {
      icon: Home,
      title: "Bli fosterfamilie",
      description: "Gi en katt midlertidig omsorg mens vi søker permanent hjem. Du får støtte og hjelp fra oss.",
      color: "bg-blue-500"
    },
    {
      icon: Heart,
      title: "Adopter en katt",
      description: "Gi en katt et permanent, kjærlig hjem. Vi hjelper deg finne den perfekte katten for din familie.",
      color: "bg-green-500"
    },
    {
      icon: DollarSign,
      title: "Doner penger",
      description: "Din donasjon hjelper oss å dekke veterinærkostnader, mat og andre nødvendigheter.",
      color: "bg-orange-500"
    },
    {
      icon: HandHeart,
      title: "Doner utstyr",
      description: "Vi trenger alltid kattemat, kattestrø, leker, tepper og andre viktige utstyr.",
      color: "bg-purple-500"
    },
    {
      icon: Heart,
      title: "Spre ordet",
      description: "Del vårt arbeid på sosiale medier og fortell venner om katter som søker hjem.",
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="hjelp" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hvordan du kan hjelpe
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Det finnes mange måter å støtte vårt arbeid på. Hver innsats, stor som liten, 
            gjør en forskjell for kattene som trenger vår hjelp.
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
                  Les mer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Vil du gjøre en akutt innsats?
            </h4>
            <p className="text-gray-600 mb-6">
              Vi trenger alltid akutt hjelp med veterinærkostnader og redningsaksjoner. 
              Din donasjon går direkte til katter i nød.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Doner nå
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Kontakt oss
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
