"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShip, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer
      className="bg-blue-800 text-white pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <FaShip className="text-3xl text-blue-400" />
              <span className="text-2xl font-bold">JEBSEN TRAVEL</span>
            </div>
            <p className="text-blue-100 mb-4">
              With over 40 years of experience in the cruise industry, we provide unforgettable ocean adventures to destinations worldwide. The Largest Cruise Consolidator in Asia.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -3, color: '#1DA1F2' }}
                className="text-blue-200 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: '#4267B2' }}
                className="text-blue-200 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: '#E1306C' }}
                className="text-blue-200 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, color: '#0077B5' }}
                className="text-blue-200 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cruises" className="text-blue-100 hover:text-white transition-colors">
                  Cruise Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-blue-100 hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-500 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                <span className="text-blue-100">Jebsen Travel & Tours Services Sdn. Bhd., Malaysia</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <span className="text-blue-100">Contact our local office</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-blue-100">info@jebsen.com.my</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-500 pb-2 inline-block">Newsletter</h3>
            <p className="text-blue-100 mb-4">Subscribe to our newsletter for special deals and updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-blue-700 border border-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-blue-700 mt-12 pt-8 text-center text-blue-200"
        >
          <p>&copy; {currentYear} Jebsen Travel & Tours Services Sdn. Bhd. All Rights Reserved.</p>
          <p className="mt-2">Proudly serving cruise enthusiasts since 1979.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
