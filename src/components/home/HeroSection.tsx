"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Find Your Dream Home in Premium Housing Societies",
  subtitle = "Discover exclusive residential projects with world-class amenities and modern living spaces designed for your lifestyle",
  ctaText = "Explore Properties",
  ctaLink = "/properties",
  backgroundImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[500px] bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.7)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl mb-4">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8">
          {subtitle}
        </p>
        <Button asChild size="lg" className="font-semibold text-base group">
          <Link href={ctaLink}>
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>

        {/* Optional Property Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <p className="text-2xl font-bold text-white">200+</p>
            <p className="text-sm text-gray-200">Premium Projects</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-sm text-gray-200">Cities</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <p className="text-2xl font-bold text-white">10k+</p>
            <p className="text-sm text-gray-200">Happy Families</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
