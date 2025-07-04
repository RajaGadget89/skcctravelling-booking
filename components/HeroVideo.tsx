'use client';
import React from "react";

export default function HeroVideo() {
  // Smooth scroll to trip list
  const handleBookingClick = () => {
    const tripList = document.getElementById("trip-list");
    if (tripList) {
      tripList.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/videoplayback.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-fallback.jpg"
        aria-label="Songkhla travel hero video"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/40 z-10" aria-hidden="true" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg mb-6">
          Welcome to '
          <span className="text-blue-400">Songkhla</span>
          ', The land of{' '}
          <span className="text-red-500">NEW</span>{' '}
          <span className="text-yellow-300"> Journey</span>
        </h1>
        <button
          onClick={handleBookingClick}
          className="mt-2 px-8 py-3 bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Booking NOW!!!
        </button>
      </div>
    </section>
  );
} 