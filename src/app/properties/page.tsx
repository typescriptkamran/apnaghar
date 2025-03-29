"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PropertiesPage() {
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const properties = [
    {
      id: 1,
      title: "3 BHK Apartment in Sector 62",
      location: "Gurgaon",
      price: "₹1.2Cr",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sq ft",
      image: "/images/properties/property-1.jpg",
    },
    {
      id: 2,
      title: "4 BHK Villa in DLF Phase 5",
      location: "Gurgaon",
      price: "₹2.5Cr",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200 sq ft",
      image: "/images/properties/property-2.jpg",
    },
    {
      id: 3,
      title: "2 BHK Apartment in Sector 45",
      location: "Noida",
      price: "₹85L",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
      image: "/images/properties/property-3.jpg",
    },
    {
      id: 4,
      title: "5 BHK Villa in Sector 50",
      location: "Gurgaon",
      price: "₹3.5Cr",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,500 sq ft",
      image: "/images/properties/property-4.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Available Properties</h1>
        <div className="flex gap-4">
          <select
            className="border rounded-md px-3 py-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
          <select
            className="border rounded-md px-3 py-2"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option value="">Filter by</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/properties/${property.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <p className="text-2xl font-bold text-primary mb-2">
                {property.price}
              </p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{property.bedrooms} Beds</span>
                <span>{property.bathrooms} Baths</span>
                <span>{property.area}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">
          Load More
        </button>
      </div>
    </div>
  );
} 