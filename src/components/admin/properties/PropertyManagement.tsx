"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreHorizontal, Download, Plus, Eye } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  developer: string;
  status: "active" | "pending" | "inactive";
  featured: boolean;
  createdAt: string;
  imageUrl: string;
}

export function PropertyManagement() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedFeatured, setSelectedFeatured] = useState<string>("all");
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would be a Supabase query
        // For now, we'll use mock data
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockProperties: Property[] = [
          {
            id: "prop-1",
            title: "Sunset Valley Residences",
            location: "Greenwood Heights, New York",
            price: 450000,
            developer: "Apex Developers",
            status: "active",
            featured: true,
            createdAt: "2023-10-15",
            imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
          },
          {
            id: "prop-2",
            title: "Parkview Apartments",
            location: "Downtown, Chicago",
            price: 320000,
            developer: "Urban Living Group",
            status: "active",
            featured: false,
            createdAt: "2023-11-02",
            imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
          },
          {
            id: "prop-3",
            title: "Riverside Condominiums",
            location: "Riverfront, Boston",
            price: 550000,
            developer: "Waterfront Properties",
            status: "pending",
            featured: false,
            createdAt: "2023-12-10",
            imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
          },
          {
            id: "prop-4",
            title: "Mountain View Estates",
            location: "Highland Park, Denver",
            price: 680000,
            developer: "Summit Homes",
            status: "active",
            featured: true,
            createdAt: "2024-01-05",
            imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
          },
          {
            id: "prop-5",
            title: "Urban Loft Apartments",
            location: "Arts District, Los Angeles",
            price: 420000,
            developer: "City Living Developers",
            status: "inactive",
            featured: false,
            createdAt: "2023-09-20",
            imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
          },
          {
            id: "prop-6",
            title: "Seaside Villas",
            location: "Ocean Drive, Miami",
            price: 890000,
            developer: "Coastal Properties",
            status: "active",
            featured: true,
            createdAt: "2023-08-15",
            imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
          },
          {
            id: "prop-7",
            title: "Downtown Lofts",
            location: "Financial District, San Francisco",
            price: 750000,
            developer: "Bay Area Homes",
            status: "pending",
            featured: false,
            createdAt: "2024-02-01",
            imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
          },
          {
            id: "prop-8",
            title: "Garden Heights",
            location: "Midtown, Atlanta",
            price: 380000,
            developer: "Southern Living Developers",
            status: "active",
            featured: false,
            createdAt: "2024-02-10",
            imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
          },
        ];
        
        setProperties(mockProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.developer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === "all" || property.status === selectedStatus;
    
    const matchesFeatured = 
      selectedFeatured === "all" || 
      (selectedFeatured === "featured" && property.featured) || 
      (selectedFeatured === "not-featured" && !property.featured);
    
    return matchesSearch && matchesStatus && matchesFeatured;
  });

  const handleSelectAllProperties = (checked: boolean) => {
    if (checked) {
      setSelectedProperties(filteredProperties.map((property) => property.id));
    } else {
      setSelectedProperties([]);
    }
  };

  const handleSelectProperty = (propertyId: string, checked: boolean) => {
    if (checked) {
      setSelectedProperties([...selectedProperties, propertyId]);
    } else {
      setSelectedProperties(selectedProperties.filter((id) => id !== propertyId));
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "inactive":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Property Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search properties..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Select
            value={selectedStatus}
            onValueChange={setSelectedStatus}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={selectedFeatured}
            onValueChange={setSelectedFeatured}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Featured Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="not-featured">Not Featured</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedProperties.length === filteredProperties.length && filteredProperties.length > 0}
                  onCheckedChange={(checked) => handleSelectAllProperties(!!checked)}
                  aria-label="Select all properties"
                />
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Developer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={9} className="h-24 text-center">
                  Loading properties...
                </TableCell>
              </TableRow>
            ) : filteredProperties.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="h-24 text-center">
                  No properties found.
                </TableCell>
              </TableRow>
            ) : (
              filteredProperties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedProperties.includes(property.id)}
                      onCheckedChange={(checked) =>
                        handleSelectProperty(property.id, !!checked)
                      }
                      aria-label={`Select ${property.title}`}
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 overflow-hidden rounded-md">
                        <img
                          src={property.imageUrl}
                          alt={property.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span>{property.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>{property.location}</TableCell>
                  <TableCell>{formatPrice(property.price)}</TableCell>
                  <TableCell>{property.developer}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={getStatusBadgeColor(property.status)}
                    >
                      {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {property.featured ? (
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        Featured
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                        Standard
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{formatDate(property.createdAt)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => navigator.clipboard.writeText(property.id)}
                        >
                          Copy property ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View property
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit property</DropdownMenuItem>
                        {property.status === "pending" && (
                          <DropdownMenuItem>Approve property</DropdownMenuItem>
                        )}
                        {!property.featured ? (
                          <DropdownMenuItem>Mark as featured</DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>Remove from featured</DropdownMenuItem>
                        )}
                        {property.status === "active" ? (
                          <DropdownMenuItem className="text-destructive">
                            Deactivate property
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>Activate property</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{filteredProperties.length}</span> of{" "}
          <span className="font-medium">{properties.length}</span> properties
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
