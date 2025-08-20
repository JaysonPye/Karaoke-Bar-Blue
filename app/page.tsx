import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Phone, MapPin, Clock, Star, Menu, Instagram } from "lucide-react"

export default function KaraokeBar() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-accent/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <img
        src="/blue.png"
        alt="Karaoke Bar Blue Logo"
        className="h-10 w-auto md:h-12"
      />
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-foreground hover:text-neon-blue transition-colors">
              About
            </a>
            <a href="#menu" className="text-foreground hover:text-neon-blue transition-colors">
              Menu
            </a>
            <a href="#gallery" className="text-foreground hover:text-neon-blue transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-foreground hover:text-neon-blue transition-colors">
              Contact
            </a>
          </div>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/blue_hero.png')",
          }}
        />
        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-neon-blue animate-pulse">
            カラオケバー Blue
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neon-pink font-semibold">Karaoke • Bar • Welcome</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground border-2 border-neon-blue border-neon-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              <Music className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View Menu
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-16 md:py-20 px-4 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-neon-pink">
            ABOUT
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-neon-blue">English</h3>
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                A welcoming karaoke bar in Shizuoka, the bartender speaks English and Japanese, feel free to come
                practice or just Drink & have fun. Tourists are welcome and we can give you advice on what to do here in
                Japan and show you around.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-neon-pink">日本語</h3>
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                静岡にある温かいカラオケバーです。バーテンダーは英語と日本語を話します。練習に来ても、ただ飲んで楽しんでも大歓迎です。観光客の方も歓迎で、日本での過ごし方のアドバイスや案内もできます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 bg-card/10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-neon-blue">What Our Guests Say</h3>
          <div className="relative">
            <div className="flex animate-scroll space-x-4 sm:space-x-8">
              <div className="flex-shrink-0 bg-card/30 border border-neon-pink/30 rounded-lg p-3 sm:p-4 min-w-[250px] sm:min-w-[300px]">
                <p className="text-xs sm:text-sm text-foreground mb-2">
                  "Amazing atmosphere and the bartender was so helpful!"
                </p>
                <p className="text-xs text-neon-pink">- Jayson</p>
              </div>
              <div className="flex-shrink-0 bg-card/30 border border-neon-blue/30 rounded-lg p-3 sm:p-4 min-w-[250px] sm:min-w-[300px]">
                <p className="text-xs sm:text-sm text-foreground mb-2">
                  "最高のカラオケバー！英語も通じて安心でした。"
                </p>
                <p className="text-xs text-neon-blue">- 涼一</p>
              </div>
              <div className="flex-shrink-0 bg-card/30 border border-neon-pink/30 rounded-lg p-3 sm:p-4 min-w-[250px] sm:min-w-[300px]">
                <p className="text-xs sm:text-sm text-foreground mb-2">
                  "Great drinks and even better karaoke selection!"
                </p>
                <p className="text-xs text-neon-pink">- Sarah</p>
              </div>
              <div className="flex-shrink-0 bg-card/30 border border-neon-blue/30 rounded-lg p-3 sm:p-4 min-w-[250px] sm:min-w-[300px]">
                <p className="text-xs sm:text-sm text-foreground mb-2">
                  "観光客にも優しくて、日本のことも教えてくれました。"
                </p>
                <p className="text-xs text-neon-blue">- 美咲</p>
              </div>
              <div className="flex-shrink-0 bg-card/30 border border-neon-pink/30 rounded-lg p-3 sm:p-4 min-w-[250px] sm:min-w-[300px]">
                <p className="text-xs sm:text-sm text-foreground mb-2">"Perfect place to practice Japanese songs!"</p>
                <p className="text-xs text-neon-pink">- Mike</p>
              </div>
              <div className="flex-shrink-0 bg-card/30 border border-neon-blue/30 rounded-lg p-3 sm:p-4 min-w-[250px] sm:min-w-[300px]">
                <p className="text-xs sm:text-sm text-foreground mb-2">"雰囲気が良くて、また来たいです！"</p>
                <p className="text-xs text-neon-blue">- 健太</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-neon-blue">
            MENU
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Drinks */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-neon-pink">DRINKS</h3>
              <div className="space-y-4 sm:space-y-6">
                <Card className="bg-card border-2 border-neon-blue/30 hover:border-neon-blue transition-all duration-300 border-neon-glow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 mr-4">
                        <h4 className="text-lg sm:text-xl font-semibold text-neon-blue">
                          All You Can Drink - Soft Drinks
                        </h4>
                        <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                          Unlimited soft drinks, juices, and non-alcoholic beverages
                        </p>
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-neon-pink whitespace-nowrap">¥500/hour</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-2 border-neon-blue/30 hover:border-neon-blue transition-all duration-300 border-neon-glow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 mr-4">
                        <h4 className="text-lg sm:text-xl font-semibold text-neon-blue">All You Can Drink - Alcohol</h4>
                        <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                          Unlimited beer, cocktails, sake, and spirits
                        </p>
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-neon-blue whitespace-nowrap">¥2000/hour</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-2 border-neon-blue/30 hover:border-neon-blue transition-all duration-300 border-neon-glow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 mr-4">
                        <h4 className="text-lg sm:text-xl font-semibold text-neon-blue">Beer</h4>
                        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Draft beer, bottles available</p>
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-neon-blue">¥500</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-2 border-neon-blue/30 hover:border-neon-blue transition-all duration-300 border-neon-glow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 mr-4">
                        <h4 className="text-lg sm:text-xl font-semibold text-neon-blue">Shots</h4>
                        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Whiskey, vodka, tequila, sake</p>
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-neon-blue">¥500</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Food */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-neon-blue">FOOD</h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { name: "Karaage", price: "¥800", desc: "Japanese fried chicken with lemon" },
                  { name: "Edamame", price: "¥400", desc: "Steamed soybeans with sea salt" },
                  { name: "Yakitori", price: "¥600", desc: "Grilled chicken skewers with tare sauce" },
                  { name: "Gyoza", price: "¥700", desc: "Pan-fried pork dumplings" },
                  { name: "Takoyaki", price: "¥650", desc: "Octopus balls with bonito flakes" },
                  { name: "French Fries", price: "¥500", desc: "Crispy fries with ketchup" },
                ].map((food, index) => (
                  <Card
                    key={index}
                    className="bg-card border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-300 border-neon-glow"
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 mr-4">
                          <h4 className="text-lg sm:text-xl font-semibold text-neon-pink">{food.name}</h4>
                          <p className="text-muted-foreground mt-1 text-sm sm:text-base">{food.desc}</p>
                        </div>
                        <span className="text-lg sm:text-xl font-bold text-neon-blue">{food.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-16 md:py-20 px-4 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-neon-pink">
            GALLERY
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {[
              "karaoke+stage+with+neon+lights",
              "people+singing+karaoke+having+fun",
              "colorful+cocktails+on+bar+counter",
              "neon+lit+private+karaoke+room",
              "crowd+dancing+under+disco+lights",
              "bartender+making+glowing+cocktails",
              "karaoke+microphone+on+stage",
              "friends+celebrating+with+drinks",
            ].map((query, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border-2 border-neon-blue/30 hover:border-neon-blue transition-all duration-300 border-neon-glow"
              >
                <img
                  src={`/abstract-geometric-shapes.png?height=300&width=300&query=${query}`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-2 sm:p-4">
                    <Star className="h-4 w-4 sm:h-6 sm:w-6 text-neon-pink" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-neon-blue">
            CONTACT
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-neon-pink mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-neon-blue">Phone</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">080-8046-6717</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-neon-pink mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-neon-blue">Address</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    〒420-0032 Shizuoka, Aoi Ward, Ryogaecho,
                    <br />2 Chome−3−12 千両ビル 3F
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-neon-pink mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-neon-blue">Hours</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Mon, Thu-Sun: 8PM - Morning
                    <br />
                    Closed: Tuesday & Wednesday
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden border-2 border-neon-blue/30 border-neon-glow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.8!2d138.3831!3d34.9756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a4f8c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2s2+Chome-3-12+Ryogaecho%2C+Aoi+Ward%2C+Shizuoka%2C+420-0032%2C+Japan!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter brightness-90 contrast-110"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card/50 py-8 sm:py-12 px-4 border-t border-neon-blue/30">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-neon-blue mb-4">カラオケバー Blue</h3>
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">Where music brings people together</p>

          <div className="flex justify-center space-x-6 mb-6 sm:mb-8">
            <a
              href="https://www.instagram.com/karaokebarblue/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-neon-pink hover:text-neon-blue transition-colors text-sm sm:text-base"
            >
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>@karaokebarblue</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <div>
              <p>080-8046-6717</p>
            </div>
            <div>
              <p>Mon, Thu-Sun: 8PM - Morning</p>
            </div>
            <div>
              <p>Shizuoka, Aoi Ward</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
