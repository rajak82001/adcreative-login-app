import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow text-center">
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-4">We couldn't find the page you're looking for.</p>
      <Link to="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">Go Home</Link>
    </div>
  );
}
