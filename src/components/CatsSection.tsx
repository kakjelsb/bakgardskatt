
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, MapPin } from "lucide-react";

const CatsSection = () => {
  const cats = [
    {
      id: 1,
      name: "Luna",
      age: "2 år",
      gender: "Hunn",
      description: "Luna er en kjærlig katt som elsker å kose og myse. Hun er perfekt for en familie som søker en rolig følgesvenn.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
      location: "Oslo",
      vaccinated: true,
      neutered: true
    },
    {
      id: 2,
      name: "Milo",
      age: "1 år",
      gender: "Hann",
      description: "Milo er en leken og energisk katt som elsker å utforske. Han vil trives best i et hjem med hage.",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&q=80",
      location: "Bergen",
      vaccinated: true,
      neutered: true
    },
    {
      id: 3,
      name: "Bella",
      age: "3 år",
      gender: "Hunn",
      description: "Bella er en mild og elskelig katt som passer perfekt for seniorer eller familier med små barn.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
      location: "Trondheim",
      vaccinated: true,
      neutered: true
    }
  ];

  return (
    <section id="katter" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Møt våre katter som søker hjem
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alle våre katter er helsesjekket, vaksinert og kastrert. 
            De venter på å møte sin nye familie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cats.map((cat) => (
            <Card key={cat.id} className="group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={cat.image}
                  alt={`${cat.name} - ${cat.description}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{cat.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {cat.age}
                      </span>
                      <span>{cat.gender}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {cat.location}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.vaccinated && <Badge variant="secondary" className="bg-green-100 text-green-800">Vaksinert</Badge>}
                  {cat.neutered && <Badge variant="secondary" className="bg-blue-100 text-blue-800">Kastrert</Badge>}
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Les mer om {cat.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50">
            Se alle våre katter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatsSection;
