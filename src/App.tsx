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
      price: "₹599",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=400&h=300",
      serves: 2
    },
    {
      name: "Paneer Tikka Masala",
      description: "Smoky grilled paneer in aromatic gravy",
      price: "₹499",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=400&h=300",
      serves: 2
    },
    {
      name: "Buddha Bowl",
      description: "Nutrient-rich vegan delight",
      price: "₹449",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400&h=300",
      serves: 1
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Sahayog?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fresh, Local Ingredients</h3>
                  <p className="text-gray-600">We source directly from local farmers to ensure the highest quality produce.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Time-Saving Solutions</h3>
                  <p className="text-gray-600">Pre-measured ingredients and easy recipes save you precious time.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Healthy Living</h3>
                  <p className="text-gray-600">Nutritious recipes designed by expert chefs and nutritionists.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516824711718-9c1e683412ac?auto=format&fit=crop&q=80&w=800"
                alt="Cooking with Sahayog"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-emerald-600 font-semibold">4.9/5</p>
                <p className="text-sm text-gray-600">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Kits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Explore Our Meal Kits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mealKits.map((kit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all">
                <img src={kit.image} alt={kit.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{kit.name}</h3>
                  <p className="text-gray-600 mb-4">{kit.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-emerald-600 font-bold text-xl">{kit.price}</p>
                    <button className="bg-emerald-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-emerald-600">
                      Order Now <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic">"{testimonials[currentTestimonial].text}"</p>
            </div>
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Cooking?</h2>
          <p className="text-xl mb-8">Join thousands of happy customers cooking delicious meals at home.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
              Download App
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-all">
              Browse Meals
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Sahayog</h3>
              <p className="text-sm">Making healthy cooking accessible to everyone.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>support@sahayog.com</li>
                <li>+91 98765 43210</li>
                <li>Bangalore, Karanataka</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2024 Sahayog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;