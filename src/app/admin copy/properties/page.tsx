import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties Management | ApnaGhar",
  description: "Manage properties in the housing society booking system",
};

export default function PropertiesPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Properties Management</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
          Add New Property
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search properties..."
            className="border rounded-md px-3 py-2"
          />
          <select className="border rounded-md px-3 py-2">
            <option value="">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
          </select>
          <select className="border rounded-md px-3 py-2">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="inactive">Inactive</option>
            <option value="sold">Sold</option>
          </select>
          <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Property Card 1 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">3 BHK Apartment</h3>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-2">Sector 7, Gurgaon</p>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>₹45,00,000</span>
              <span>•</span>
              <span>1200 sq ft</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <button className="text-primary hover:text-primary/80">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </div>
              <button className="text-sm text-primary hover:text-primary/80">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Property Card 2 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">4 BHK Villa</h3>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Pending
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-2">Sector 14, Gurgaon</p>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>₹1,20,00,000</span>
              <span>•</span>
              <span>2500 sq ft</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <button className="text-primary hover:text-primary/80">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </div>
              <button className="text-sm text-primary hover:text-primary/80">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Property Card 3 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">2 BHK Apartment</h3>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                Inactive
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-2">Sector 23, Gurgaon</p>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>₹35,00,000</span>
              <span>•</span>
              <span>900 sq ft</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <button className="text-primary hover:text-primary/80">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </div>
              <button className="text-sm text-primary hover:text-primary/80">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-700">
          Showing 1 to 3 of 45 results
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