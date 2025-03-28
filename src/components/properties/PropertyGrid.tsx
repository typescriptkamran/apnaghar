"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious as PaginationPrev,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Grid,
  List,
  SlidersHorizontal,
  Heart,
  MapPin,
  Bed,
  Bath,
  Square,
} from "lucide-react";
import PropertyCard from "./PropertyCard";
import { supabase } from "@/lib/supabaseClient";
import { useSupabase } from "@/contexts/SupabaseProvider";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  isNew: boolean;
  isFeatured: boolean;
}

interface PropertyGridProps {
  properties?: Property[];
  isLoading?: boolean;
  totalProperties?: number;
  currentPage?: number;
  propertiesPerPage?: number;
  onPageChange?: (page: number) => void;
  onViewDetails?: (id: string) => void;
  onFavorite?: (id: string) => void;
  onFilterToggle?: () => void;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties: propProperties,
  isLoading: propIsLoading,
  totalProperties: propTotalProperties,
  currentPage: propCurrentPage = 1,
  propertiesPerPage = 6,
  onPageChange = () => {},
  onViewDetails = () => {},
  onFavorite = () => {},
  onFilterToggle = () => {},
}: PropertyGridProps) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalProperties, setTotalProperties] = useState(0);
  const [currentPage, setCurrentPage] = useState(propCurrentPage);
  const { user } = useSupabase();

  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);
      try {
        // Calculate pagination range
        const from = (currentPage - 1) * propertiesPerPage;
        const to = from + propertiesPerPage - 1;

        // Get count of total properties
        const { count } = await supabase
          .from("properties")
          .select("*", { count: "exact", head: true });

        // Get properties for current page
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .range(from, to)
          .order("created_at", { ascending: false });

        if (error) throw error;

        if (data) {
          setProperties(
            data.map((item) => ({
              id: item.id,
              title: item.title,
              location: item.location,
              price: item.price,
              bedrooms: item.bedrooms,
              bathrooms: item.bathrooms,
              area: item.area,
              imageUrl: item.image_url,
              isNew: item.is_new,
              isFeatured: item.is_featured,
            })),
          );
          setTotalProperties(count || 0);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
        // Fallback to default properties if there's an error
        setProperties([
          {
            id: "prop-1",
            title: "Sunset Valley Residences",
            location: "Greenwood Heights, New York",
            price: 450000,
            bedrooms: 3,
            bathrooms: 2,
            area: 1800,
            imageUrl:
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            isNew: true,
            isFeatured: false,
          },
          {
            id: "prop-2",
            title: "Parkview Apartments",
            location: "Downtown, Chicago",
            price: 320000,
            bedrooms: 2,
            bathrooms: 1,
            area: 1200,
            imageUrl:
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
            isNew: false,
            isFeatured: true,
          },
          {
            id: "prop-3",
            title: "Riverside Condominiums",
            location: "Riverfront, Boston",
            price: 550000,
            bedrooms: 4,
            bathrooms: 3,
            area: 2200,
            imageUrl:
              "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
            isNew: true,
            isFeatured: true,
          },
          {
            id: "prop-4",
            title: "Mountain View Estates",
            location: "Highland Park, Denver",
            price: 680000,
            bedrooms: 5,
            bathrooms: 4,
            area: 3000,
            imageUrl:
              "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
            isNew: false,
            isFeatured: false,
          },
          {
            id: "prop-5",
            title: "Urban Loft Apartments",
            location: "Arts District, Los Angeles",
            price: 420000,
            bedrooms: 2,
            bathrooms: 2,
            area: 1500,
            imageUrl:
              "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
            isNew: true,
            isFeatured: false,
          },
          {
            id: "prop-6",
            title: "Seaside Villas",
            location: "Ocean Drive, Miami",
            price: 890000,
            bedrooms: 4,
            bathrooms: 3,
            area: 2800,
            imageUrl:
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            isNew: false,
            isFeatured: true,
          },
        ]);
        setTotalProperties(24);
      } finally {
        setIsLoading(false);
      }
    };

    // Use provided properties if available, otherwise fetch from Supabase
    if (propProperties) {
      setProperties(propProperties);
      setIsLoading(propIsLoading || false);
      setTotalProperties(propTotalProperties || propProperties.length);
    } else {
      fetchProperties();
    }
  }, [
    propProperties,
    propIsLoading,
    propTotalProperties,
    currentPage,
    propertiesPerPage,
  ]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const totalPages = Math.ceil(totalProperties / propertiesPerPage);

  return (
    <div className="w-full bg-gray-50">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{properties.length}</span> of{" "}
          <span className="font-medium">{totalProperties}</span> properties
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={onFilterToggle}
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline">Filters</span>
          </Button>

          <div className="flex items-center">
            <Tabs
              defaultValue="grid"
              value={viewMode}
              onValueChange={(value) => setViewMode(value as "grid" | "list")}
              className="h-9"
            >
              <TabsList className="grid h-9 w-[120px] grid-cols-2">
                <TabsTrigger value="grid" className="h-8 px-3">
                  <Grid className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="list" className="h-8 px-3">
                  <List className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: propertiesPerPage }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="h-[400px] animate-pulse rounded-lg bg-gray-200"
            />
          ))}
        </div>
      ) : (
        <Tabs defaultValue="grid" value={viewMode} className="w-full">
          <TabsContent value="grid" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  bedrooms={property.bedrooms}
                  bathrooms={property.bathrooms}
                  area={property.area}
                  imageUrl={property.imageUrl}
                  isNew={property.isNew}
                  isFeatured={property.isFeatured}
                  onViewDetails={onViewDetails}
                  onFavorite={onFavorite}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="flex flex-col gap-4">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm sm:flex-row"
                >
                  <div className="relative h-48 w-full sm:h-auto sm:w-1/3">
                    <img
                      src={property.imageUrl}
                      alt={property.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute left-3 top-3 flex gap-2">
                      {property.isNew && (
                        <span className="rounded bg-emerald-500 px-2 py-1 text-xs font-medium text-white">
                          New
                        </span>
                      )}
                      {property.isFeatured && (
                        <span className="rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {property.title}
                      </h3>
                      <div className="mt-1 flex items-center text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="mt-4 flex gap-4">
                        <div className="flex items-center gap-1">
                          <Bed className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">
                            {property.bedrooms} Beds
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">
                            {property.bathrooms} Baths
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Square className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{property.area} sq.ft</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-lg font-semibold text-primary">
                        ${property.price.toLocaleString()}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onFavorite(property.id)}
                        >
                          <Heart className="mr-1 h-4 w-4 text-rose-500" />
                          Save
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => onViewDetails(property.id)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink
                  aria-label="Go to previous page"
                  size="default"
                  className="gap-1 pl-2.5"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  style={{
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    opacity: currentPage === 1 ? 0.5 : 1,
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </PaginationLink>
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                // Show first page, last page, current page, and pages around current page
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                // Show ellipsis for gaps
                if (
                  (page === 2 && currentPage > 3) ||
                  (page === totalPages - 1 && currentPage < totalPages - 2)
                ) {
                  return (
                    <PaginationItem key={`ellipsis-${page}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }
                return null;
              })}
              <PaginationItem>
                <PaginationLink
                  aria-label="Go to next page"
                  size="default"
                  className="gap-1 pr-2.5"
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  style={{
                    cursor:
                      currentPage === totalPages ? "not-allowed" : "pointer",
                    opacity: currentPage === totalPages ? 0.5 : 1,
                  }}
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
