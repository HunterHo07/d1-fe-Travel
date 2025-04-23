"use client";

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  // Get the current URL to help with debugging
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        
        <div className="bg-gray-100 p-4 rounded mb-6">
          <p className="text-sm text-gray-700 font-mono break-all">
            <strong>Current URL:</strong> {currentUrl}
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600">Try one of these links instead:</p>
          <ul className="list-disc pl-5 text-blue-600">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/cruises" className="hover:underline">
                Cruises
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
