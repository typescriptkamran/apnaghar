import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Properties | ApnaGhar",
  description: "Manage featured properties in the housing society booking system",
};

export default function FeaturedPropertiesPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Featured Properties</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
          Add Featured Property
        </button>
      </div>

      {/* Featured Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured Property 1 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Featured
              </span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Luxury Villa</h3>
              <div className="flex items-center gap-2">
                <button className="text-primary hover:text-primary/80">Edit</button>
                <button className="text-red-600 hover:text-red-900">Remove</button>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-2">Sector 7, Gurgaon</p>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>₹2,50,00,000</span>
              <span>•</span>
              <span>3500 sq ft</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Featured Until:</span>
                <span className="font-medium">Feb 15, 2024</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Views:</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Inquiries:</span>
                <span className="font-medium">45</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Property 2 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Featured
              </span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Penthouse Apartment</h3>
              <div className="flex items-center gap-2">
                <button className="text-primary hover:text-primary/80">Edit</button>
                <button className="text-red-600 hover:text-red-900">Remove</button>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-2">Sector 14, Gurgaon</p>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>₹1,80,00,000</span>
              <span>•</span>
              <span>2800 sq ft</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Featured Until:</span>
                <span className="font-medium">Feb 20, 2024</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Views:</span>
                <span className="font-medium">986</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Inquiries:</span>
                <span className="font-medium">32</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Property 3 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Featured
              </span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Sea View Apartment</h3>
              <div className="flex items-center gap-2">
                <button className="text-primary hover:text-primary/80">Edit</button>
                <button className="text-red-600 hover:text-red-900">Remove</button>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-2">Sector 23, Gurgaon</p>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>₹1,20,00,000</span>
              <span>•</span>
              <span>1800 sq ft</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Featured Until:</span>
                <span className="font-medium">Feb 25, 2024</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Views:</span>
                <span className="font-medium">756</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Inquiries:</span>
                <span className="font-medium">28</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties Stats */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Featured Properties Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Featured</h3>
            <p className="text-3xl font-bold text-primary">12</p>
            <p className="text-sm text-gray-500 mt-1">Active featured properties</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Views</h3>
            <p className="text-3xl font-bold text-primary">15,678</p>
            <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Inquiries</h3>
            <p className="text-3xl font-bold text-primary">456</p>
            <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-700">
          Showing 1 to 3 of 12 results
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Previous</button>
          <button className="px-3 py-1 border rounded-md bg-primary text-white">1</button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">2</button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">3</button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
} 