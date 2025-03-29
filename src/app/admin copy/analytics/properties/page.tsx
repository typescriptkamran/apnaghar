import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Analytics | ApnaGhar",
  description: "View detailed property analytics and metrics for the housing society booking system",
};

export default function PropertyAnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Property Analytics</h1>

      {/* Property Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Total Properties</h3>
          <p className="text-3xl font-bold">567</p>
          <p className="text-sm text-green-600">+8% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Active Listings</h3>
          <p className="text-3xl font-bold">489</p>
          <p className="text-sm text-green-600">+5% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Pending Approvals</h3>
          <p className="text-3xl font-bold">23</p>
          <p className="text-sm text-red-600">+15% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Featured Properties</h3>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-gray-600">No change</p>
        </div>
      </div>

      {/* Property Types Distribution */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-6">Property Types Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-medium">Apartments</h3>
            <p className="text-2xl font-bold">369</p>
            <p className="text-sm text-gray-600">65% of total</p>
          </div>
          <div>
            <h3 className="font-medium">Houses</h3>
            <p className="text-2xl font-bold">113</p>
            <p className="text-sm text-gray-600">20% of total</p>
          </div>
          <div>
            <h3 className="font-medium">Villas</h3>
            <p className="text-2xl font-bold">57</p>
            <p className="text-sm text-gray-600">10% of total</p>
          </div>
          <div>
            <h3 className="font-medium">Commercial</h3>
            <p className="text-2xl font-bold">28</p>
            <p className="text-sm text-gray-600">5% of total</p>
          </div>
        </div>
      </div>

      {/* Price Range Distribution */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-6">Price Range Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-medium">Under ₹50L</h3>
            <p className="text-2xl font-bold">170</p>
            <p className="text-sm text-gray-600">30% of total</p>
          </div>
          <div>
            <h3 className="font-medium">₹50L - ₹1Cr</h3>
            <p className="text-2xl font-bold">227</p>
            <p className="text-sm text-gray-600">40% of total</p>
          </div>
          <div>
            <h3 className="font-medium">₹1Cr - ₹2Cr</h3>
            <p className="text-2xl font-bold">113</p>
            <p className="text-sm text-gray-600">20% of total</p>
          </div>
          <div>
            <h3 className="font-medium">Above ₹2Cr</h3>
            <p className="text-2xl font-bold">57</p>
            <p className="text-sm text-gray-600">10% of total</p>
          </div>
        </div>
      </div>

      {/* Property Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Average Views</h2>
          <p className="text-3xl font-bold">156</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Average Inquiries</h2>
          <p className="text-3xl font-bold">23</p>
          <p className="text-sm text-green-600">+8% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Conversion Rate</h2>
          <p className="text-3xl font-bold">4.2%</p>
          <p className="text-sm text-green-600">+0.5% from last month</p>
        </div>
      </div>

      {/* Top Performing Properties */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-6">Top Performing Properties</h2>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">3 BHK Apartment in Sector 62</h3>
              <p className="text-sm text-gray-600">Gurgaon</p>
            </div>
            <div className="text-right">
              <p className="font-bold">245 views</p>
              <p className="text-sm text-green-600">+18% this week</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">4 BHK Villa in DLF Phase 5</h3>
              <p className="text-sm text-gray-600">Gurgaon</p>
            </div>
            <div className="text-right">
              <p className="font-bold">198 views</p>
              <p className="text-sm text-green-600">+12% this week</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">2 BHK Apartment in Sector 45</h3>
              <p className="text-sm text-gray-600">Noida</p>
            </div>
            <div className="text-right">
              <p className="font-bold">167 views</p>
              <p className="text-sm text-green-600">+15% this week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Time Period Selector */}
      <div className="flex justify-end">
        <select className="border rounded-md px-3 py-2">
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="365">Last year</option>
        </select>
      </div>
    </div>
  );
} 