"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShip, FaAnchor, FaCompass, FaStar, FaCalendarAlt, FaMapMarkedAlt } from "react-icons/fa";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Home() {
  // Sample cruise packages
  const cruisePackages = [
    {
      id: 1,
      title: "Caribbean Paradise",
      duration: "7 days",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1920",
      destinations: ["Bahamas", "Jamaica", "Grand Cayman"]
    },
    {
      id: 2,
      title: "Mediterranean Adventure",
      duration: "10 days",
      price: "$1,899",
      image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1920",
      destinations: ["Barcelona", "Rome", "Athens", "Santorini"]
    },
    {
      id: 3,
      title: "Alaskan Frontier",
      duration: "8 days",
      price: "$1,599",
      image: "https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=1920",
      destinations: ["Juneau", "Skagway", "Glacier Bay", "Ketchikan"]
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "Our Caribbean cruise was absolutely magical! The staff was incredibly attentive, and the destinations were breathtaking. We'll definitely be booking with Jebsen Travel again!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "As someone who's been on many cruises, I can confidently say that Jebsen Travel provides the best experience. Their attention to detail and customer service is unmatched.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      text: "The Mediterranean cruise exceeded all our expectations. The ship was luxurious, the food was exceptional, and the excursions were well-organized. Highly recommend!",
      rating: 4,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1920')",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">Discover the World <span className="text-blue-300">by Sea</span></h1>
            <p className="text-xl md:text-2xl text-gray-900 mb-8 max-w-3xl mx-auto bg-white/80 p-4 rounded-lg">Experience unforgettable cruise journeys with our premium fleet and exceptional service. Over 40 years of creating memories on the ocean.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 p-2 rounded-md"
              >
                <Link href="/booking" className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors inline-block font-medium text-lg">
                  Book Your Cruise
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 p-2 rounded-md"
              >
                <Link href="/cruises" className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-md hover:bg-blue-50 transition-colors inline-block font-medium text-lg">
                  Explore Packages
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ y: 5 }}
          >
            <a href="#features" className="text-gray-700 flex flex-col items-center">
              <span className="mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection id="features" className="py-20 bg-white" animation="fade">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-blue-600">Jebsen Travel</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">With over four decades of experience in the cruise industry, we provide exceptional service and unforgettable experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" animation="slide-up" delay={0.1}>
              <div className="text-blue-600 text-4xl mb-4">
                <FaShip />
              </div>
              <h3 className="text-xl font-bold mb-3">Luxury Fleet</h3>
              <p className="text-gray-600">Our modern fleet of cruise ships offers the highest standards of comfort and luxury for an unforgettable journey.</p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" animation="slide-up" delay={0.2}>
              <div className="text-blue-600 text-4xl mb-4">
                <FaCompass />
              </div>
              <h3 className="text-xl font-bold mb-3">Exotic Destinations</h3>
              <p className="text-gray-600">Explore breathtaking destinations worldwide with carefully crafted itineraries that showcase the best each location has to offer.</p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" animation="slide-up" delay={0.3}>
              <div className="text-blue-600 text-4xl mb-4">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Service</h3>
              <p className="text-gray-600">Our dedicated crew provides exceptional service, ensuring your comfort and satisfaction throughout your cruise experience.</p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" animation="slide-up" delay={0.4}>
              <div className="text-blue-600 text-4xl mb-4">
                <FaCalendarAlt />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">Choose from a variety of cruise durations and departure dates to find the perfect fit for your travel plans.</p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" animation="slide-up" delay={0.5}>
              <div className="text-blue-600 text-4xl mb-4">
                <FaAnchor />
              </div>
              <h3 className="text-xl font-bold mb-3">40+ Years Experience</h3>
              <p className="text-gray-600">With over four decades in the industry, we have the expertise and knowledge to create the perfect cruise experience.</p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" animation="slide-up" delay={0.6}>
              <div className="text-blue-600 text-4xl mb-4">
                <FaMapMarkedAlt />
              </div>
              <h3 className="text-xl font-bold mb-3">Exciting Excursions</h3>
              <p className="text-gray-600">Enhance your cruise with our curated selection of shore excursions, designed to immerse you in local culture and adventure.</p>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Popular Cruises Section */}
      <AnimatedSection className="py-20 bg-gray-50" animation="fade">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular <span className="text-blue-600">Cruise Packages</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our most sought-after cruise experiences, each offering unique destinations and unforgettable memories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cruisePackages.map((cruise, index) => (
              <AnimatedSection
                key={cruise.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                animation="slide-up"
                delay={index * 0.1}
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${cruise.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-white font-bold text-lg">{cruise.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{cruise.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cruise.destinations.map((destination, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{destination}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{cruise.price}</span>
                    <Button variant="primary" size="sm">View Details</Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Link href="/cruises">View All Cruise Packages</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-blue-600 text-white" animation="fade">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-blue-200">Customers Say</span></h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Hear from travelers who have experienced the Jebsen Travel difference.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.id}
                className="bg-white text-gray-800 p-8 rounded-lg shadow-lg"
                animation="slide-up"
                delay={index * 0.1}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                      size={20}
                    />
                  ))}
                </div>
                <p className="mb-6 italic">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gray-900 text-white" animation="fade">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Embark on Your Next Adventure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Book your dream cruise today and experience the luxury, comfort, and adventure that Jebsen Travel has been providing for over 40 years.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              <Link href="/booking">Book Your Cruise Now</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
