
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "22 12 34 56",
      description: "Hverdager 9-17, helger 10-14"
    },
    {
      icon: Mail,
      title: "E-post",
      content: "info@bakgardskatt.no",
      description: "Vi svarer innen 24 timer"
    },
  ];

  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kontakt oss
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Har du spørsmål om adopsjon, frivillig arbeid eller vil bare vite mer om vårt arbeid? 
            Vi hjelper gjerne til!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-900 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Send oss en melding
                </h4>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Navn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                        placeholder="Ditt navn"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-post *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                        placeholder="din@email.no"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Emne
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    >
                      <option value="">Velg emne</option>
                      <option value="adoption">Adopsjon</option>
                      <option value="volunteer">Frivillig arbeid</option>
                      <option value="foster">Fosterfamilie</option>
                      <option value="donation">Donasjon</option>
                      <option value="other">Annet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Melding *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      placeholder="Fortell hvordan vi kan hjelpe deg..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 py-3 text-lg">
                    Send melding
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Akutt hjelp trengs
                </h4>
                <p className="text-gray-600 mb-6">
                  Har du funnet en katt som trenger hjelp? Kontakt oss umiddelbart.
                </p>
                <Button className="w-full bg-red-500 hover:bg-red-600">
                  Ring akutttelefon
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Følg oss
                </h4>
                <p className="text-gray-600 mb-6">
                  Hold deg oppdatert med vårt arbeid og se bilder av katter som søker hjem.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-orange-50 to-blue-50">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Doner i dag
                </h4>
                <p className="text-gray-600 mb-6">
                  Din donasjon hjelper oss å redde flere katter og gi dem den omsorgen de trenger.
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Doner nå
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
