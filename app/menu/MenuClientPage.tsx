"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MenuItemCard } from "@/components/menu-item-card"
import { Breadcrumbs } from "@/components/breadcrumbs"

const menuCategories = [
  {
    id: "burritos",
    name: "Burritos",
    items: [
      {
        name: "Carne Asada Burrito",
        description: "Grilled steak with rice, beans, guacamole, and pico de gallo",
        price: "$12.99",
        image: "/images/carne-asada-burrito.png",
      },
      {
        name: "Carnitas Burrito",
        description: "Slow-cooked pork with rice, beans, and fresh salsa",
        price: "$11.99",
        image: "/images/carne-asada-burrito.png",
      },
      {
        name: "Fish Burrito",
        description: "Grilled fish with cabbage, rice, and chipotle mayo",
        price: "$13.99",
        image: "/images/fish-tacos.png",
      },
      {
        name: "Bean & Rice Burrito",
        description: "Vegetarian option with refried beans, rice, and cheese",
        price: "$9.99",
        image: "/images/carne-asada-burrito.png",
      },
    ],
  },
  {
    id: "tacos",
    name: "Tacos",
    items: [
      {
        name: "Fish Tacos (3)",
        description: "Grilled fish with cabbage slaw and chipotle mayo",
        price: "$11.99",
        image: "/images/fish-tacos.png",
      },
      {
        name: "Carne Asada Tacos (3)",
        description: "Grilled steak with onions and cilantro",
        price: "$10.99",
        image: "/images/fish-tacos.png",
      },
      {
        name: "Shrimp Tacos (3)",
        description: "Grilled shrimp with avocado and pico de gallo",
        price: "$12.99",
        image: "/images/fish-tacos.png",
      },
      {
        name: "Chicken Tacos (3)",
        description: "Seasoned chicken with lettuce and cheese",
        price: "$9.99",
        image: "/images/fish-tacos.png",
      },
    ],
  },
  {
    id: "enchiladas",
    name: "Enchiladas",
    items: [
      {
        name: "Cheese Enchiladas",
        description: "Three cheese enchiladas with red sauce and sour cream",
        price: "$10.99",
        image: "/images/chicken-enchiladas.png",
      },
      {
        name: "Chicken Enchiladas",
        description: "Three chicken enchiladas with green tomatillo sauce",
        price: "$12.99",
        image: "/images/chicken-enchiladas.png",
      },
      {
        name: "Shrimp Enchiladas",
        description: "Three shrimp enchiladas with creamy white sauce",
        price: "$14.99",
        image: "/images/shrimp-enchiladas.png",
      },
    ],
  },
  {
    id: "quesadillas",
    name: "Quesadillas",
    items: [
      {
        name: "Cheese Quesadilla",
        description: "Melted cheese in a flour tortilla with sour cream and guacamole",
        price: "$8.99",
        image: "/images/cheese-quesadilla.png",
      },
      {
        name: "Chicken Quesadilla",
        description: "Grilled chicken and cheese with peppers and onions",
        price: "$11.99",
        image: "/images/cheese-quesadilla.png",
      },
      {
        name: "Shrimp Quesadilla",
        description: "Grilled shrimp and cheese with bell peppers",
        price: "$13.99",
        image: "/images/cheese-quesadilla.png",
      },
    ],
  },
  {
    id: "combinations",
    name: "Combination Plates",
    items: [
      {
        name: "Two Item Combo",
        description: "Choose any two: taco, enchilada, tamale, or chile relleno with rice and beans",
        price: "$13.99",
        image: "/images/combination-plate.png",
      },
      {
        name: "Three Item Combo",
        description: "Choose any three items with rice and beans",
        price: "$16.99",
        image: "/images/combination-plate.png",
      },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast Burritos & Plates",
    items: [
      {
        name: "Breakfast Burrito",
        description: "Eggs, cheese, potatoes, and choice of bacon or sausage",
        price: "$8.99",
        image: "/images/breakfast-burrito.png",
      },
      {
        name: "Huevos Rancheros",
        description: "Two eggs over easy on tortillas with ranchero sauce",
        price: "$9.99",
        image: "/images/breakfast-burrito.png",
      },
      {
        name: "Chorizo & Eggs",
        description: "Scrambled eggs with Mexican sausage, served with tortillas",
        price: "$10.99",
        image: "/images/breakfast-burrito.png",
      },
    ],
  },
  {
    id: "kids",
    name: "Kid Meals",
    items: [
      {
        name: "Kid's Quesadilla",
        description: "Cheese quesadilla with rice and beans",
        price: "$6.99",
        image: "/images/cheese-quesadilla.png",
      },
      {
        name: "Kid's Taco",
        description: "One soft taco with rice and beans",
        price: "$6.99",
        image: "/images/cheese-quesadilla.png",
      },
      {
        name: "Kid's Chicken Strips",
        description: "Chicken strips with fries",
        price: "$7.99",
        image: "/images/cheese-quesadilla.png",
      },
    ],
  },
  {
    id: "sides",
    name: "Side Orders",
    items: [
      {
        name: "Guacamole & Chips",
        description: "Fresh made guacamole with tortilla chips",
        price: "$6.99",
        image: "/images/guacamole-chips.png",
      },
      {
        name: "Rice & Beans",
        description: "Mexican rice and refried beans",
        price: "$4.99",
        image: "/images/combination-plate.png",
      },
      {
        name: "Chips & Salsa",
        description: "Crispy tortilla chips with house salsa",
        price: "$3.99",
        image: "/images/guacamole-chips.png",
      },
    ],
  },
]

export default function MenuClientPage() {
  const [activeCategory, setActiveCategory] = useState("burritos")

  const activeItems = menuCategories.find((cat) => cat.id === activeCategory)?.items || []

  // Generate menu schema for current category
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${menuCategories.find((cat) => cat.id === activeCategory)?.name} Menu`,
    description: `Authentic Mexican ${activeCategory} made with traditional recipes and fresh ingredients`,
    hasMenuSection: {
      "@type": "MenuSection",
      name: menuCategories.find((cat) => cat.id === activeCategory)?.name,
      hasMenuItem: activeItems.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.replace("$", ""),
          priceCurrency: "USD",
        },
      })),
    },
  }

  return (
    <div className="min-h-screen py-8 pt-24 mt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 mt-12">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our authentic Mexican dishes and fresh seafood, made with traditional recipes and the finest
            ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "text-red-600 border-red-600 hover:bg-red-50"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <section aria-labelledby="menu-items">
          <h2 id="menu-items" className="sr-only">
            {menuCategories.find((cat) => cat.id === activeCategory)?.name} Items
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeItems.map((item, index) => (
              <MenuItemCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </section>

        {/* Order Online CTA */}
        <div className="text-center mt-16 p-8 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Order?</h2>
          <p className="text-gray-600 mb-6">Get your favorite dishes delivered right to your door</p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="/order">Order Online Now</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
