"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

const ContactPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-100 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center" animation="fade">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
              We're here to help you plan your perfect cruise vacation. Reach out to our team of cruise specialists.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg" animation="slide-right">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Inquiry Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select an inquiry type</option>
                    <option value="booking">Booking Information</option>
                    <option value="package">Cruise Package Inquiry</option>
                    <option value="pricing">Pricing & Availability</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div>
                  <Button variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </AnimatedSection>

            {/* Contact Information */}
            <div>
              <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg mb-8" animation="slide-left">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mt-1 mr-4">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Our Office</h3>
                      <p className="text-gray-600">
                        123 Ocean Drive, Marina Bay<br />
                        San Francisco, CA 94111<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mt-1 mr-4">
                      <FaPhone />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        Toll-Free: +1 (800) 123-4567<br />
                        International: +1 (555) 987-6543
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mt-1 mr-4">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        General Inquiries: info@oceanvoyage.com<br />
                        Bookings: bookings@oceanvoyage.com<br />
                        Support: support@oceanvoyage.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mt-1 mr-4">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">WhatsApp</h3>
                      <p className="text-gray-600">
                        Message us on WhatsApp: +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg" animation="slide-left" delay={0.2}>
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold text-gray-800 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12" animation="fade">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Come visit our office in San Francisco to speak with our cruise specialists in person.
            </p>
          </AnimatedSection>

          <AnimatedSection className="rounded-lg overflow-hidden shadow-lg h-[500px]" animation="fade">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1034026394395!2d-122.39568492392032!3d37.79407971482235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806285ddb1a3%3A0x7b0f555f5a5fe6e7!2sFerry%20Building!5e0!3m2!1sen!2sus!4v1682123456789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <AnimatedSection className="py-16" animation="fade">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our cruise packages and booking process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="slide-up" delay={0.1}>
              <h3 className="text-xl font-bold mb-3 text-blue-600">How far in advance should I book my cruise?</h3>
              <p className="text-gray-600">
                We recommend booking your cruise 6-12 months in advance for the best selection of cabins and prices. However, we also offer last-minute deals for more flexible travelers.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="slide-up" delay={0.2}>
              <h3 className="text-xl font-bold mb-3 text-blue-600">What's included in the cruise price?</h3>
              <p className="text-gray-600">
                Our cruise packages typically include accommodation, meals, entertainment, and basic amenities. Excursions, specialty dining, and premium beverages are usually available at an additional cost.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="slide-up" delay={0.3}>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Do I need travel insurance?</h3>
              <p className="text-gray-600">
                While not mandatory, we strongly recommend purchasing travel insurance to protect your investment against unexpected events such as trip cancellations, medical emergencies, or travel delays.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="slide-up" delay={0.4}>
              <h3 className="text-xl font-bold mb-3 text-blue-600">What documents do I need for a cruise?</h3>
              <p className="text-gray-600">
                Required documents vary by destination, but typically include a valid passport, visa (if applicable), and cruise line documentation. Our team will provide specific requirements for your chosen cruise.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
