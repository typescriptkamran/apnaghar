"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Heart, MapPin, Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  id?: string;
  title?: string;
  location?: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  imageUrl?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  onViewDetails?: (id: string) => void;
  onFavorite?: (id: string) => void;
}

const PropertyCard = ({
  id = "prop-1",
  title = "Sunset Valley Residences",
  location = "Greenwood Heights, New York",
  price = 450000,
  bedrooms = 3,
  bathrooms = 2,
  area = 1800,
  imageUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  isNew = true,
  isFeatured = false,
  onViewDetails = () => {},
  onFavorite = () => {},
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute right-3 top-3 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={() => onFavorite(id)}
          >
            <Heart className="h-5 w-5 text-rose-500" />
          </Button>
        </div>
        <div className="absolute left-3 top-3 flex gap-2 z-10">
          {isNew && (
            <Badge className="bg-emerald-500 hover:bg-emerald-600">New</Badge>
          )}
          {isFeatured && (
            <Badge className="bg-amber-500 hover:bg-amber-600">Featured</Badge>
          )}
        </div>
      </div>

      <CardHeader className="pb-2 pt-4">
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          <span className="text-sm line-clamp-1">{location}</span>
        </div>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{area} sq.ft</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-2">
        <div className="font-semibold text-primary">
          ${price.toLocaleString()}
        </div>
        <Button variant="default" size="sm" onClick={() => onViewDetails(id)}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
