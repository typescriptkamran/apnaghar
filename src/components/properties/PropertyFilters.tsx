"use client";

import React, { useState } from "react";
import { Search, MapPin, Home, Calendar, Filter } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { cn } from "../../lib/utils";

interface PropertyFiltersProps {
  onFilterChange?: (filters: FilterState) => void;
  className?: string;
}

interface FilterState {
  location: string;
  priceRange: [number, number];
  propertyType: string;
  amenities: string[];
  possessionDate: string;
}

const PropertyFilters = ({
  onFilterChange = () => {},
  className,
}: PropertyFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    location: "",
    priceRange: [500000, 5000000],
    propertyType: "all",
    amenities: [],
    possessionDate: "",
  });

  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(false);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, location: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceRangeChange = (value: number[]) => {
    const newFilters = {
      ...filters,
      priceRange: [value[0], value[1]] as [number, number],
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePropertyTypeChange = (value: string) => {
    const newFilters = { ...filters, propertyType: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePossessionDateChange = (value: string) => {
    const newFilters = { ...filters, possessionDate: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    let newAmenities: string[];
    if (checked) {
      newAmenities = [...filters.amenities, amenity];
    } else {
      newAmenities = filters.amenities.filter((a) => a !== amenity);
    }

    const newFilters = { ...filters, amenities: newAmenities };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleAdvancedFilters = () => {
    setIsAdvancedFiltersOpen(!isAdvancedFiltersOpen);
  };

  const handleSearch = () => {
    // In a real implementation, this would trigger the search with the current filters
    onFilterChange(filters);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className={cn("w-full bg-background p-4 shadow-md rounded-lg", className)}
    >
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:items-end">
        {/* Location Filter */}
        <div className="flex-1">
          <Label htmlFor="location" className="mb-2 block">
            Location
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="location"
              placeholder="Enter city, area or locality"
              className="pl-9"
              value={filters.location}
              onChange={handleLocationChange}
            />
          </div>
        </div>

        {/* Property Type Filter */}
        <div className="w-full md:w-48">
          <Label htmlFor="property-type" className="mb-2 block">
            Property Type
          </Label>
          <Select
            value={filters.propertyType}
            onValueChange={handlePropertyTypeChange}
          >
            <SelectTrigger id="property-type" className="w-full">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
              <SelectItem value="plot">Plot</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter - Simplified for basic view */}
        <div className="w-full md:w-64">
          <Label className="mb-2 block">Price Range</Label>
          <div className="px-2">
            <Slider
              defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
              max={10000000}
              step={100000}
              onValueChange={handlePriceRangeChange}
              className="my-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatPrice(filters.priceRange[0])}</span>
              <span>{formatPrice(filters.priceRange[1])}</span>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <Button onClick={handleSearch} className="w-full md:w-auto">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="w-full md:w-auto">
          <Button
            variant="outline"
            onClick={toggleAdvancedFilters}
            className="w-full md:w-auto"
          >
            <Filter className="mr-2 h-4 w-4" />
            {isAdvancedFiltersOpen ? "Hide Filters" : "More Filters"}
          </Button>
        </div>
      </div>

      {/* Advanced Filters Section */}
      {isAdvancedFiltersOpen && (
        <div className="mt-4 border-t pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Possession Date */}
          <div>
            <Label htmlFor="possession-date" className="mb-2 block">
              Possession Date
            </Label>
            <Select
              value={filters.possessionDate}
              onValueChange={handlePossessionDateChange}
            >
              <SelectTrigger id="possession-date" className="w-full">
                <SelectValue placeholder="Select Possession Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ready">Ready to Move</SelectItem>
                <SelectItem value="3months">Within 3 Months</SelectItem>
                <SelectItem value="6months">Within 6 Months</SelectItem>
                <SelectItem value="1year">Within 1 Year</SelectItem>
                <SelectItem value="2years">Within 2 Years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Amenities */}
          <div className="col-span-1 md:col-span-2">
            <Label className="mb-2 block">Amenities</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Swimming Pool",
                "Gym",
                "Garden",
                "Parking",
                "Security",
                "Clubhouse",
                "Children's Play Area",
                "Sports Facilities",
                "Power Backup",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={`amenity-${amenity.toLowerCase().replace(/\s+/g, "-")}`}
                    checked={filters.amenities.includes(amenity)}
                    onCheckedChange={(checked) =>
                      handleAmenityChange(amenity, checked as boolean)
                    }
                  />
                  <Label
                    htmlFor={`amenity-${amenity.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm"
                  >
                    {amenity}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyFilters;
