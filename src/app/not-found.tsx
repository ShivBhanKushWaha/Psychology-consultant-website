import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <Link href="/" className="inline-block bg-[#6F42C1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5A31A8] transition duration-300">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
