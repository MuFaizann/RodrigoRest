import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Utensils, Camera, ShoppingBag, Star, Heart } from "lucide-react"
import { GoogleMaps } from "@/components/google-maps"
import { SpecialMenuItem } from "@/components/special-menu-item"


// Data for the new highlights section, structured for the new layout
const dailySpecialsData = [
  {
    day: "5 Mini Tacos",
    description: "5 generously filled tacos with your choice of meat, topped with fresh onions and cilantro\n Packed with flavor and size, crowd favorite for a reason",
    price: "$12.99",
    image: "/images/tacopic.avif",
  },
  {
    day: "1 Birria Taco",
    description: "Juicy slow-stewed beef taco packed with rich flavor, folded in a golden, crispy tortilla and topped with fresh onions, cilantro, and melted cheese. \n(only with the order of 2 or more tacos it’ll come with consome)",
    price: "$4.00",
    image: "/images/birriaTaco.avif",
  },
  {
    day: "Carne Asada Fries",
    description: "A generous bed of crispy golden fries loaded with tender, grilled carne asada, topped with creamy guacamole, rich sour cream, fresh pico de gallo, and melted cheese.",
    price: "$15.50",
    image: "/images/carneFries.avif",
  },
  {
    day: "Super Burrito",
    description:
      "Your choice of meat: grilled chicken, carnitas, beef, al pastor, steak, lengua, barbacoa, ground beef,\n With rice, beans, guacamole, pico de gallo, & sour cream.",
    price: "$12.99",
    image: "/images/supBurrito.avif",
  },
  {
    day: "Shrimp Burrito / Fish Burrito",
    description: "Burrito filled with fresh shrimp, onions, bell peppers, rice, tomato, lettuce, and cheese\n Burrito filled with fresh fish, lettuce, cheese, pico de gallo and tartar sauce",
    price: "$11.50",
    image: "/images/taco-tuesday.png",
  },
  {
    day: "Shrimp Tostada",
    description:
      "onions, bell peppers, tomatoes, lettuce, cheese & guacamole.",
    price: "$8.50",
    image: "/images/pollo-con-chorizo.png",
  },
  {
    day: "Shrimp Cocktail",
    description:
      "pico de gallo, cucumber and avacados",
    price: "$14.99",
    image: "/images/sante-fe-lunch.png",
  },
  {
    day: "Shrimp Platters",
    description: "Rancheros Platter: includes sautéed shrimp with onions, bell peppers, and tomatoes, simmered in a savory ranchero sauce.\n Garlic Shrimp Platter: Sautéed shrimp with fresh garlic and butter, often accompanied by a tomato-based sauce.\n A La Diable Platter: Shrimp sautéed in a fiery, spicy sauce, typically includes onions and bell peppers.",
    price: "$13.99",
    image: "/images/parrillada-mexicana.png",
  },
]


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/rodri.PNG"
          alt="Delicious Mexican tacos and food"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

        {/* Decorative elements */}
       

        <div className="relative z-10 text-center text-white px-4 max-w-5xl fade-in-up">
         
         


          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-orange-500"></div>
            <span className="text-2xl md:text-4xl text-white font-nunito mx-6 text-shadow">AUTHENTIC TRADITIONAL MEXICAN FLAVORS</span>
            <div className="w-16 h-0.5 bg-orange-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg font-nunito">
            <span className="text-white">RODRIGOS</span>
            <br />
            <span className="text-orange-400">TACO SHOP</span>
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-shadow max-w-3xl mx-auto leading-relaxed">
            COME TASTE THE DIFFERENCE
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4">
              <Link href="/menu" className="flex items-center space-x-2">
                <Utensils className="h-5 w-5" />
                <span>View Menu</span>
              </Link>
            </Button>
            <Button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 bg-white/10 backdrop-blur-sm">
              <Link href="/order" className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Order Now</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
       

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 smooth-bounce">
              
              <div className="animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

        
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 px-4 bg-orange-200/65 relative overflow-hidden">
        {/* Background Image */}
       
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Rodrigos <span className="text-orange-600">Specials</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Left Column: Single Large Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
              <Image
                src="/images/specPic.avif"
                alt="Delicious Mexican tacos and authentic dishes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right Column: Specials List */}
            <div className="p-8 lg:p-12 bg-black/80 relative z-0">
              <div className="relative z-10">
                {" "}
                {/* Ensure content is above the background overlay */}
                <h3 className="text-3xl font-bold text-white mb-8">Customer Favorites</h3>
                <div className="space-y-4 mb-12">
                  {dailySpecialsData.slice(0, 4).map((item, index) => (
                    <SpecialMenuItem
                      key={index}
                      name={item.day}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">Seafood Selection</h3>
                <div className="space-y-4">
                  {dailySpecialsData.slice(4).map((item, index) => (
                    <SpecialMenuItem
                      key={index}
                      name={item.day}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  ))}
                </div>
                <div className="text-center mt-12">
                  <Link href="/menu" className="text-orange-400 hover:text-orange-300 hover:underline text-lg font-semibold mb-4 block">
                    See Our Dinner Specials
                  </Link>
                  <Button className="btn-rodrigos-blue text-lg px-8 py-4">
                    <Link href="/menu">Full Menu</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Customer <span className="text-red-600">Favorites</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most popular dishes that have won the hearts of Tulsa
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/fish-tacos.png",
                title: "Fish Tacos",
                description: "Fresh grilled fish with cabbage slaw and chipotle mayo",
                badge: "Most Popular",
                badgeColor: "bg-red-600",
              },
              {
                image: "/images/carne-asada-burrito.png",
                title: "Carne Asada Burrito",
                description: "Grilled steak with rice, beans, and fresh guacamole",
                badge: "Recommended",
                badgeColor: "bg-gray-700",
              },
              {
                image: "/images/shrimp-enchiladas.png",
                title: "Shrimp Enchiladas",
                description: "Succulent shrimp in corn tortillas with green tomatillo sauce",
                badge: "Special",
                badgeColor: "bg-yellow-600",
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                <Card className="card-hover overflow-hidden border-0 shadow-xl">
                  <div className="relative h-64">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 ${item.badgeColor} text-white text-sm font-semibold rounded-full shadow-lg`}
                    >
                      {item.badge}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    <div className="flex items-center mt-4 space-x-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">4.9/5</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-600/20 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-600/20 rounded-full opacity-40 animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Visit Us <span className="text-red-400">Today</span>!
            </h2>
            <p className="text-xl text-gray-300">We're waiting for you in the heart of Tulsa with open arms</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="card-hover bg-gray-800 border-gray-700 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">Location</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  1956 S Garnett Rd
                  <br />
                  Tulsa, OK 74128
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gray-800 border-gray-700 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">Phone</h3>
                <a href="tel:+19186055061" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                  (918) 605-5061
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gray-800 border-gray-700 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">Hours</h3>
                <div className="text-gray-300 text-sm">
                  <div>Sun-Thu: 7 AM - 12 AM</div>
                  <div>Fri-Sat: 7 AM - 2 AM</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button className="btn-restaurant text-lg px-8 py-4">
            <Link href="/contact" className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Get Directions</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Map Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Find Us <span className="text-red-600">Easily</span>
            </h2>
            <p className="text-xl text-gray-600">Conveniently located on Garnett Road with ample free parking</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full mt-4"></div>
          </div>
          <Card className="overflow-hidden shadow-2xl border-0">
            <CardContent className="p-0">
              <GoogleMaps
                address="1956 S Garnett Rd, Tulsa, OK 74128"
                businessName="Rodrigos Taco Shop"
                className="h-96 rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 restaurant-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
            Ready for an <span className="text-yellow-300">Authentic Experience</span>?
          </h2>
          <p className="text-xl text-white/90 mb-8 text-shadow max-w-2xl mx-auto">
            Don't wait any longer. Come and enjoy the best Mexican flavors in Tulsa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link href="/menu" className="flex items-center space-x-2">
                <Utensils className="h-5 w-5" />
                <span>View Full Menu</span>
              </Link>
            </Button>
            <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link href="/order" className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Order Now!</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
