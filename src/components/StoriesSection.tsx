
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const StoriesSection = () => {
  const stories = [
    {
      id: 1,
      catName: "Oscar",
      ownerName: "Maria Andersen",
      story: "Oscar kom til oss som en redd gatekatt. Etter måneder med kjærlighet og tålmodighet fra Bakgårdskatt er han nå verdens koseligste familiekatt. Han elsker å sove i solen og leke med barna våre.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=300&q=80",
      rating: 5
    },
    {
      id: 2,
      catName: "Stella",
      ownerName: "Erik Johansen",
      story: "Vi adopterte Stella for to år siden og hun har virkelig forvandlet hjemmet vårt. Hun er så kjærlig og har hjulpet vår eldre katt til å bli mer sosial. Takk Bakgårdskatt for at dere matchet oss så perfekt!",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=300&q=80",
      rating: 5
    },
    {
      id: 3,
      catName: "Simba",
      ownerName: "Anna og Peter",
      story: "Simba var en av de eldste kattene på Bakgårdskatt da vi møtte ham. Vi ble forelsket ved første blikk. Han har gitt oss så mye glede og kjærlighet. Det var virkelig kjærlighet ved første øyekast.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=300&q=80",
      rating: 5
    }
  ];

  return (
    <section id="historier" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lykkelige historier
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her er noen av våre favoritt-historier fra familier som har adoptert 
            katter gjennom Bakgårdskatt. Hver katt har sin unike historie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={`${story.catName} i sitt nye hjem`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 rounded-full p-2">
                    <Quote className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {story.catName}s nye familie
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "{story.story}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">
                      — {story.ownerName}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Har du en historie å dele?
            </h4>
            <p className="text-gray-600 mb-6">
              Vi elsker å høre fra våre adoptivfamilier! Del din historie og 
              inspirer andre til å gi en katt et kjærlig hjem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Del din historie
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
