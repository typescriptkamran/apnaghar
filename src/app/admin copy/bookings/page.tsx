import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookings Management | ApnaGhar",
  description: "Manage property bookings in the housing society booking system",
};

export default function BookingsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Bookings Management</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Total: 89</span>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
            New Booking
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search bookings..."
            className="border rounded-md px-3 py-2"
          />
          <select className="border rounded-md px-3 py-2">
            <option value="">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
            <option value="completed">Completed</option>
          </select>
          <select className="border rounded-md px-3 py-2">
            <option value="">All Properties</option>
            <option value="apartment">Apartments</option>
            <option value="house">Houses</option>
            <option value="villa">Villas</option>
          </select>
          <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Booking ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Sample Booking Row 1 */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #BK001
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">3 BHK Apartment</div>
                <div className="text-sm text-gray-500">Sector 7, Gurgaon</div>
              </div>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">John Doe</div>
                <div className="text-sm text-gray-500">john@example.com</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Jan 15, 2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Confirmed
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ₹45,00,000
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-primary hover:text-primary/80 mr-3">View</button>
                <button className="text-red-600 hover:text-red-900">Cancel</button>
              </td>
            </tr>

            {/* Sample Booking Row 2 */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #BK002
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">4 BHK Villa</div>
                <div className="text-sm text-gray-500">Sector 14, Gurgaon</div>
              </div>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">Jane Smith</div>
                <div className="text-sm text-gray-500">jane@example.com</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Jan 16, 2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ₹1,20,00,000
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-primary hover:text-primary/80 mr-3">View</button>
                <button className="text-red-600 hover:text-red-900">Cancel</button>
              </td>
            </tr>

            {/* Sample Booking Row 3 */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #BK003
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">2 BHK Apartment</div>
                <div className="text-sm text-gray-500">Sector 23, Gurgaon</div>
              </div>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">Mike Johnson</div>
                <div className="text-sm text-gray-500">mike@example.com</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Jan 17, 2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Cancelled
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ₹35,00,000
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-primary hover:text-primary/80 mr-3">View</button>
                <button className="text-red-600 hover:text-red-900">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Booking Statistics */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Booking Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Bookings</h3>
            <p className="text-3xl font-bold text-primary">89</p>
            <p className="text-sm text-gray-500 mt-1">All time</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Confirmed</h3>
            <p className="text-3xl font-bold text-green-600">45</p>
            <p className="text-sm text-gray-500 mt-1">Active bookings</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Pending</h3>
            <p className="text-3xl font-bold text-yellow-600">12</p>
            <p className="text-sm text-gray-500 mt-1">Awaiting confirmation</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Cancelled</h3>
            <p className="text-3xl font-bold text-red-600">32</p>
            <p className="text-sm text-gray-500 mt-1">Cancelled bookings</p>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-700">
          Showing 1 to 3 of 89 results
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