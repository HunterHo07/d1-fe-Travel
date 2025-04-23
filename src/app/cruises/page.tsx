"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShip, FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaDollarSign, FaClock } from 'react-icons/fa';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

const CruisesPage = () => {
  // Filter states
  const [destination, setDestination] = useState('all');
  const [duration, setDuration] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  // Sample cruise packages
  const cruisePackages = [
    {
      id: 1,
      title: "Caribbean Paradise",
      duration: "7 days",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1920",
      destinations: ["Bahamas", "Jamaica", "Grand Cayman"],
      region: "Caribbean",
      description: "Experience the crystal-clear waters and white sandy beaches of the Caribbean on this 7-day cruise. Visit the Bahamas, Jamaica, and Grand Cayman, with opportunities for snorkeling, beach relaxation, and cultural exploration.",
      departure: "Miami, Florida",
      priceCategory: "budget"
    },
    {
      id: 2,
      title: "Mediterranean Adventure",
      duration: "10 days",
      price: "$1,899",
      image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1920",
      destinations: ["Barcelona", "Rome", "Athens", "Santorini"],
      region: "Mediterranean",
      description: "Explore the rich history and stunning landscapes of the Mediterranean. Visit iconic cities like Barcelona, Rome, and Athens, plus the breathtaking island of Santorini.",
      departure: "Barcelona, Spain",
      priceCategory: "standard"
    },
    {
      id: 3,
      title: "Alaskan Frontier",
      duration: "8 days",
      price: "$1,599",
      image: "https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=1920",
      destinations: ["Juneau", "Skagway", "Glacier Bay", "Ketchikan"],
      region: "Alaska",
      description: "Witness the majestic beauty of Alaska's wilderness on this 8-day cruise. See glaciers, wildlife, and breathtaking landscapes while visiting Juneau, Skagway, Glacier Bay, and Ketchikan.",
      departure: "Seattle, Washington",
      priceCategory: "standard"
    },
    {
      id: 4,
      title: "Hawaiian Islands",
      duration: "12 days",
      price: "$2,299",
      image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=1920",
      destinations: ["Honolulu", "Maui", "Kauai", "Big Island"],
      region: "Hawaii",
      description: "Discover the paradise of Hawaii on this 12-day island-hopping cruise. Experience the unique culture, volcanic landscapes, and tropical beaches of Oahu, Maui, Kauai, and the Big Island.",
      departure: "Los Angeles, California",
      priceCategory: "premium"
    },
    {
      id: 5,
      title: "Northern Europe Explorer",
      duration: "14 days",
      price: "$2,799",
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1920",
      destinations: ["Stockholm", "Helsinki", "St. Petersburg", "Copenhagen", "Oslo"],
      region: "Europe",
      description: "Explore the stunning cities of Northern Europe on this comprehensive 14-day cruise. Visit Stockholm, Helsinki, St. Petersburg, Copenhagen, and Oslo, experiencing the rich culture and history of each destination.",
      departure: "Stockholm, Sweden",
      priceCategory: "premium"
    },
    {
      id: 6,
      title: "South Pacific Paradise",
      duration: "10 days",
      price: "$1,999",
      image: "https://images.unsplash.com/photo-1580367100724-158fa405dd7e?q=80&w=1920",
      destinations: ["Fiji", "Bora Bora", "Tahiti", "Moorea"],
      region: "South Pacific",
      description: "Experience the ultimate tropical getaway in the South Pacific. Visit the stunning islands of Fiji, Bora Bora, Tahiti, and Moorea, with their crystal-clear waters, overwater bungalows, and vibrant marine life.",
      departure: "Sydney, Australia",
      priceCategory: "standard"
    },
    {
      id: 7,
      title: "Asian Exploration",
      duration: "15 days",
      price: "$2,499",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1920",
      destinations: ["Tokyo", "Shanghai", "Hong Kong", "Singapore"],
      region: "Asia",
      description: "Immerse yourself in the diverse cultures and bustling cities of Asia. Visit Tokyo, Shanghai, Hong Kong, and Singapore, experiencing the perfect blend of ancient traditions and modern innovations.",
      departure: "Tokyo, Japan",
      priceCategory: "premium"
    },
    {
      id: 8,
      title: "Mexican Riviera",
      duration: "5 days",
      price: "$899",
      image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1920",
      destinations: ["Cabo San Lucas", "Puerto Vallarta", "Mazatlán"],
      region: "Mexico",
      description: "Enjoy the sun-soaked beaches and vibrant culture of Mexico's Pacific coast. Visit Cabo San Lucas, Puerto Vallarta, and Mazatlán, with opportunities for water sports, shopping, and authentic Mexican cuisine.",
      departure: "San Diego, California",
      priceCategory: "budget"
    },
    {
      id: 9,
      title: "Scandinavian Fjords",
      duration: "9 days",
      price: "$1,799",
      image: "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?q=80&w=1920",
      destinations: ["Bergen", "Geiranger", "Flåm", "Stavanger"],
      region: "Europe",
      description: "Witness the breathtaking beauty of Norway's fjords on this 9-day cruise. Visit Bergen, Geiranger, Flåm, and Stavanger, with opportunities to see stunning waterfalls, towering cliffs, and charming coastal villages.",
      departure: "Copenhagen, Denmark",
      priceCategory: "standard"
    },
  ];

  // Filter cruises based on selected filters
  const filteredCruises = cruisePackages.filter(cruise => {
    // Filter by destination/region
    if (destination !== 'all' && cruise.region !== destination) return false;

    // Filter by duration
    if (duration === 'short' && parseInt(cruise.duration) > 7) return false;
    if (duration === 'medium' && (parseInt(cruise.duration) <= 7 || parseInt(cruise.duration) > 10)) return false;
    if (duration === 'long' && parseInt(cruise.duration) <= 10) return false;

    // Filter by price range
    if (priceRange !== 'all' && cruise.priceCategory !== priceRange) return false;

    return true;
  });

  // Available regions for filter
  const regions = [...new Set(cruisePackages.map(cruise => cruise.region))];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-100 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center" animation="fade">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">Explore Our Cruise Packages</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
              Discover a world of adventure with our carefully curated cruise packages to destinations worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="fade">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Destination</label>
                <div className="relative">
                  <select
                    className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    <option value="all">All Destinations</option>
                    {regions.map((region, index) => (
                      <option key={index} value={region}>{region}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Duration</label>
                <div className="relative">
                  <select
                    className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  >
                    <option value="all">All Durations</option>
                    <option value="short">Short (1-7 days)</option>
                    <option value="medium">Medium (8-10 days)</option>
                    <option value="long">Long (11+ days)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <FaClock className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Price Range</label>
                <div className="relative">
                  <select
                    className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                  >
                    <option value="all">All Prices</option>
                    <option value="budget">Budget</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <FaDollarSign className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex items-end">
                <Button variant="primary" size="lg" className="w-full">
                  <FaSearch className="mr-2" /> Search Cruises
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cruise Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              {filteredCruises.length} {filteredCruises.length === 1 ? 'Cruise' : 'Cruises'} Available
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCruises.map((cruise, index) => (
              <AnimatedSection
                key={cruise.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                animation="slide-up"
                delay={index * 0.05}
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
                  <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-br-lg">
                    <div className="flex items-center">
                      <FaClock className="mr-2" />
                      <span>{cruise.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{cruise.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Departing from {cruise.departure}</span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">{cruise.description}</p>

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

          {filteredCruises.length === 0 && (
            <div className="text-center py-16">
              <FaShip className="text-gray-300 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No cruises found</h3>
              <p className="text-gray-600">Try adjusting your filters to find available cruise packages.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <AnimatedSection className="py-16 bg-blue-50" animation="fade">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Our travel experts can help you create a custom cruise package tailored to your preferences and budget.
          </p>
          <Button variant="secondary" size="lg">
            Contact Our Cruise Specialists
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CruisesPage;
