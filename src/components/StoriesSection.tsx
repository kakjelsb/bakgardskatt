
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const StoriesSection = () => {
  const stories = [
    {
      id: 1,
      catName: "Oscar",
      ownerName: "Maria Andersson",
      story: "Oscar kom till oss som en skrämd gatukatt. Efter månader av kärlek och tålamod från Bakgårdskatt är han nu världens mysigaste familjekatt. Han älskar att sova i solen och leka med våra barn.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=300&q=80",
      rating: 5
    },
    {
      id: 2,
      catName: "Stella",
      ownerName: "Erik Johansson",
      story: "Vi adopterade Stella för två år sedan och hon har verkligen förvandlat vårt hem. Hon är så kärleksfull och har hjälpt vår äldre katt att bli mer social. Tack Bakgårdskatt för att ni matchade oss så perfekt!",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=300&q=80",
      rating: 5
    },
    {
      id: 3,
      catName: "Simba",
      ownerName: "Anna och Peter",
      story: "Simba var en av de äldsta katterna på Bakgårdskatt när vi träffade honom. Vi blev kära på första blicken. Han har gett oss så mycket glädje och kärlek. Det var verkligen kärlek vid första ögonkastet.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=300&q=80",
      rating: 5
    }
  ];

  return (
    <section id="berattelser" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lyckliga berättelser
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Här är några av våra favorit-berättelser från familjer som har adopterat 
            katter genom Bakgårdskatt. Varje katt har sin unika historia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={`${story.catName} i sitt nya hem`}
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
                    {story.catName}s nya familj
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
              Har du en berättelse att dela?
            </h4>
            <p className="text-gray-600 mb-6">
              Vi älskar att höra från våra adoptivfamiljer! Dela din historia och 
              inspirera andra att ge en katt ett kärleksfullt hem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Dela din berättelse
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
