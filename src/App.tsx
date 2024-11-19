import React, { useState } from 'react';
import { ChevronRight, PlayCircle, Leaf, Clock, Heart, ShoppingBag, Instagram, Facebook, Youtube, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Shah",
      location: "Mumbai",
      text: "Sahayog has transformed my cooking journey. The pre-portioned ingredients and easy recipes make me feel like a chef!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Rahul Verma",
      location: "Delhi",
      text: "As a busy professional, these meal kits are a lifesaver. Restaurant-quality meals at home without the hassle!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Neha Kumar",
      location: "Bangalore",
      text: "Love the sustainable packaging and local ingredients. Making a difference while enjoying amazing meals!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  const mealKits = [
    {
      name: "Classic Butter Chicken",
      description: "Rich, creamy, and perfectly spiced",
      price: "₹249",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=400&h=300",
      serves: 2
    },
    {
      name: "Paneer Tikka Masala",
      description: "Smoky grilled paneer in aromatic gravy",
      price: "₹159",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=400&h=300",
      serves: 2
    },
    {
      name: "Buddha Bowl",
      description: "Nutrient-rich vegan delight",
      price: "₹129",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400&h=300",
      serves: 1
    }
  ];

  return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed w-full bg-transparent backdrop-blur-md z-10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-emerald-600">Sahayog</h1>
            <div className="relative group">
              <button className="text-emerald-600 font-semibold px-4 py-2 rounded-full border border-emerald-600 hover:bg-emerald-600 hover:text-white transition-all">
                More
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-4 transition-all duration-300">
                <a
                    href="#about"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 rounded-t-lg"
                >
                  About Us
                </a>
                <a
                    href="#meal-kits"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600"
                >
                  Meal Kits
                </a>
                <a
                    href="#testimonials"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 rounded-b-lg"
                >
                  Testimonials
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2070"
                alt="Kitchen Scene"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white px-4">
            <div className="max-w-4xl text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                Healthy Cooking, Made Effortless
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Fresh, pre-measured ingredients with easy-to-follow recipes—delivered right to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105">
                  Explore Meal Kits <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
                  Watch Video <PlayCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-gray-50">
          {/* Content */}
        </section>

        {/* Meal Kits Section */}
        <section id="meal-kits" className="py-20 px-4">
          {/* Content */}
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 bg-gray-50">
          {/* Content */}
        </section>
      </div>
  );
}

export default App;
