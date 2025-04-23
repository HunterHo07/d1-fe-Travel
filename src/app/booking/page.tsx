"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShip, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaCreditCard, FaCheck } from 'react-icons/fa';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

const BookingPage = () => {
  // Form state
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

    // Trip Details
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: '2',
    cabinType: 'oceanview',

    // Payment Information
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Sample cruise destinations
  const destinations = [
    { value: 'caribbean', label: 'Caribbean Islands' },
    { value: 'mediterranean', label: 'Mediterranean' },
    { value: 'alaska', label: 'Alaska' },
    { value: 'hawaii', label: 'Hawaiian Islands' },
    { value: 'europe', label: 'Northern Europe' },
    { value: 'asia', label: 'Asian Exploration' },
  ];

  // Cabin types
  const cabinTypes = [
    { value: 'interior', label: 'Interior Cabin', price: '$899' },
    { value: 'oceanview', label: 'Ocean View Cabin', price: '$1,199' },
    { value: 'balcony', label: 'Balcony Cabin', price: '$1,499' },
    { value: 'suite', label: 'Suite', price: '$2,299' },
  ];

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit the form data
      alert('Booking submitted successfully! A confirmation email will be sent shortly.');
      // Reset form
      setStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        passengers: '2',
        cabinType: 'oceanview',
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      });
    }
  };

  // Go back to previous step
  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-100 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center" animation="fade">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700">Book Your Dream Cruise</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
              Complete the form below to reserve your spot on one of our luxury cruise packages.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-center">
                <div className="flex items-center w-full max-w-3xl justify-between">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="relative flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step >= item ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {step > item ? <FaCheck /> : item}
                      </div>
                      <div className="text-sm mt-2 font-medium text-gray-700">
                        {item === 1 ? 'Personal Info' : item === 2 ? 'Trip Details' : 'Payment'}
                      </div>
                      {item < 3 && (
                        <div
                          className={`absolute top-5 w-full h-0.5 left-1/2 ${
                            step > item ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Card */}
            <AnimatedSection className="bg-white rounded-lg shadow-lg p-8" animation="fade">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <FaUsers className="text-blue-600 mr-2" /> Personal Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">First Name*</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Last Name*</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email Address*</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone Number*</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Trip Details */}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <FaShip className="text-blue-600 mr-2" /> Trip Details
                    </h2>
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">Destination*</label>
                      <div className="relative">
                        <select
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select a destination</option>
                          {destinations.map((dest) => (
                            <option key={dest.value} value={dest.value}>{dest.label}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <FaMapMarkerAlt className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Departure Date*</label>
                        <div className="relative">
                          <input
                            type="date"
                            name="departureDate"
                            value={formData.departureDate}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <FaCalendarAlt className="text-gray-400" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Return Date*</label>
                        <div className="relative">
                          <input
                            type="date"
                            name="returnDate"
                            value={formData.returnDate}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <FaCalendarAlt className="text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Number of Passengers*</label>
                        <select
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Cabin Type*</label>
                        <select
                          name="cabinType"
                          value={formData.cabinType}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          {cabinTypes.map((cabin) => (
                            <option key={cabin.value} value={cabin.value}>
                              {cabin.label} - {cabin.price}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Information */}
                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <FaCreditCard className="text-blue-600 mr-2" /> Payment Information
                    </h2>
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">Name on Card*</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name as it appears on your card"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">Card Number*</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="XXXX XXXX XXXX XXXX"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Expiry Date*</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">CVV*</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="XXX"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="terms"
                          className="mr-2"
                          required
                        />
                        <label htmlFor="terms" className="text-gray-700">
                          I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <Button variant="outline" type="button" onClick={goBack}>
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  <Button variant="primary" type="submit">
                    {step < 3 ? 'Continue' : 'Complete Booking'}
                  </Button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <AnimatedSection className="py-16 bg-gray-50" animation="fade">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Book With OceanVoyage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a seamless booking experience and exceptional service from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="slide-up" delay={0.1}>
              <div className="text-blue-600 text-3xl mb-4">
                <FaShip />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Fleet</h3>
              <p className="text-gray-600">
                Our cruise ships offer the highest standards of comfort, luxury, and safety for an unforgettable journey.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="slide-up" delay={0.2}>
              <div className="text-blue-600 text-3xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-gray-600">
                With over 20 years in the industry, our team has the expertise to create the perfect cruise experience.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="slide-up" delay={0.3}>
              <div className="text-blue-600 text-3xl mb-4">
                <FaCreditCard />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Booking</h3>
              <p className="text-gray-600">
                Our booking system uses the latest security measures to ensure your personal and payment information is protected.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16" animation="fade">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our booking process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="slide-up" delay={0.1}>
              <h3 className="text-xl font-bold mb-3 text-blue-600">What is the booking process?</h3>
              <p className="text-gray-600">
                Our booking process is simple: fill out your personal information, select your cruise details, and complete the payment. You'll receive a confirmation email with all your booking details.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="slide-up" delay={0.2}>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Can I modify my booking after confirmation?</h3>
              <p className="text-gray-600">
                Yes, you can modify your booking up to 30 days before departure, subject to availability. Please contact our customer service team for assistance with any changes.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="slide-up" delay={0.3}>
              <h3 className="text-xl font-bold mb-3 text-blue-600">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                Cancellations made 60+ days before departure receive a full refund minus a $100 administrative fee. Cancellations 30-59 days before departure receive a 50% refund. No refunds for cancellations less than 30 days before departure.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md" animation="slide-up" delay={0.4}>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Do you offer payment plans?</h3>
              <p className="text-gray-600">
                Yes, we offer flexible payment plans for bookings made more than 90 days in advance. You can pay a deposit to secure your booking and make installment payments until 30 days before departure.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BookingPage;
