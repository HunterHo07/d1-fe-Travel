"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShip, FaAward, FaUsers, FaGlobe } from 'react-icons/fa';
import AnimatedSection from '@/components/ui/AnimatedSection';

const AboutPage = () => {
  // Company stats
  const stats = [
    { icon: <FaShip />, value: '40+', label: 'Cruise Lines' },
    { icon: <FaGlobe />, value: '100+', label: 'Destinations' },
    { icon: <FaUsers />, value: '1M+', label: 'Happy Customers' },
    { icon: <FaAward />, value: '40+', label: 'Years Experience' },
  ];

  // Major cruise lines
  const cruiseLines = [
    'Amadeus Waterways', 'Antarctic Shipping', 'Antarpply Expeditions',
    'Aqua Expeditions', 'Carnival Cruise Lines', 'Classic International Cruises',
    'Costa Cruise Lines', 'Cruise North Expeditions Inc', 'Cruise West', 'Crystal Cruises',
    'Disney Cruise Line', 'Hapag-Lloyd Cruises', 'European Waterways', 'Heritage Line',
    'Holland America Line', 'Hurtigruten', 'Lili Marleen Cruises', 'Louis Cruises',
    'MSC Cruises', 'Norwegian Cruise Line', 'Oceania Cruises', 'Oceanwide Expeditions',
    'Orient Royal Cruise', 'Orion Expedition Cruises', 'Orthodox Cruise Company',
    'Pandaw River Cruises', 'Paul Gauguin Cruises', 'Regent Seven Seas Cruises',
    'Rivages du Monde', 'Seabourn Cruise Lines', 'Sea Cloud Cruises',
    'Seadream Yacht Club', 'Silversea Cruises', 'Star Clippers',
    'Swan Hellenic Discovery Cruising', 'The world of Residensea',
    'Uniworld Grand River Cruises', 'Value Cruises', 'Viking River Cruises',
    'Voyages of Discovery', 'Windstar Cruises'
  ];

  // Team members
  const teamMembers = [
    {
      name: 'Jebsen Leadership',
      position: 'Founding Team',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256',
      bio: 'JEBSEN TRAVEL was founded in 1979 by a small group of experienced travel consultants who shared a common goal - unsurpassed customer service.'
    },
    {
      name: 'Cruise Specialists',
      position: 'Expert Consultants',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256',
      bio: 'With over 40 years of cruise travel experience, our specialists have developed into proven leaders for all facets of business and leisure travel.'
    },
    {
      name: 'Service Team',
      position: 'Customer Support',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256',
      bio: 'Our service team ensures that every aspect of your cruise experience is perfect, from initial planning through the "Welcome Home" follow-up.'
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-100 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center" animation="fade">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">About JEBSEN TRAVEL</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
              Over 40 years of creating unforgettable cruise experiences for travelers around the world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <AnimatedSection className="py-20" animation="fade">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=1024')",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={0.2}>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                JEBSEN TRAVEL was founded in 1979 by a small group of experienced travel consultants who shared a common goal - unsurpassed customer service. This full-service organization was characterized by the highest standards of professional excellence with particular emphasis on the needs and comfort of the business traveller.
              </p>
              <p className="text-gray-600 mb-6">
                Selecting the best computerized reservation and ticketing system available, Galileo, JEBSEN's founders trained and developed a staff of specialists in both business and leisure travel to optimize the comfort and service value for the traveller.
              </p>
              <p className="text-gray-600">
                As a bonded member of The International Air Transport Association (IATA), JEBSEN has access to major airlines worldwide. In addition, premier international cruise lines have appointed JEBSEN as their GSA or ISR or Preferred Agent in Malaysia. With over 40 years of cruise travel experience, we have become the Largest Cruise Consolidator in Asia with cruise businesses setup in prime cities within Asia and the Middle East.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-gray-50" animation="fade">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={index}
                className="text-center"
                animation="slide-up"
                delay={index * 0.1}
              >
                <div className="text-blue-600 text-4xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Values */}
      <AnimatedSection className="py-20" animation="fade">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              To impart our years of professional experience and expertise into a custom package tailored to your individual travel wants, needs and fantasies.<br/>
              <span className="font-bold">WE'LL TAKE YOU ANYWHERE YOU WANT TO GO!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" animation="slide-up" delay={0.1}>
              <h3 className="text-xl font-bold mb-4 text-blue-600">Professional Excellence</h3>
              <p className="text-gray-600">
                Over the years, the staff of JEBSEN TRAVEL has developed into the proven leaders for all facets of business and leisure travel, achieving an unsurpassed record throughout the industry for professional excellence.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" animation="slide-up" delay={0.2}>
              <h3 className="text-xl font-bold mb-4 text-blue-600">Customer Satisfaction</h3>
              <p className="text-gray-600">
                We provide unexcelled customer service and satisfaction. The level of thoughtfulness and thoroughness, from the initial planning through the "Welcome Home" follow-up, makes JEBSEN the Travel's Choice.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" animation="slide-up" delay={0.3}>
              <h3 className="text-xl font-bold mb-4 text-blue-600">Professional Services</h3>
              <p className="text-gray-600">
                Simply, we offer: <span className="font-bold">PROFESSIONAL SERVICES BY THE PROFESSIONALS!</span> We are the perfect choice for the first-time cruise vacationer as well as the seasoned professional traveller.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Cruise Lines */}
      <AnimatedSection className="py-20 bg-gray-50" animation="fade">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Major Cruise Lines</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with the world's premier cruise lines to offer you the best cruise experiences worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cruiseLines.map((line, index) => (
              <AnimatedSection
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center"
                animation="slide-up"
                delay={index * 0.02}
              >
                <p className="text-blue-600 font-medium">{line}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Team */}
      <AnimatedSection className="py-20" animation="fade">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of cruise industry professionals is dedicated to creating exceptional travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                animation="slide-up"
                delay={index * 0.1}
              >
                <div className="h-64 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonial */}
      <AnimatedSection className="py-20 bg-blue-100" animation="fade">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-8 text-blue-600">"</div>
            <p className="text-xl md:text-2xl mb-8 italic text-gray-700">
              Over the years the staff of JEBSEN TRAVEL has developed into the proven leaders for all facets of business and leisure travel. During this time JEBSEN has achieved an unsurpassed record throughout the industry for professional excellence, and unexcelled customer service and satisfaction.
            </p>
            <p className="text-xl md:text-2xl mb-8 font-bold text-blue-600">
              PROFESSIONAL SERVICES BY THE PROFESSIONALS!
            </p>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="font-bold text-gray-800">JEBSEN TRAVEL & Tours</p>
                <p className="text-blue-600">Serving cruise enthusiasts since 1979</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
