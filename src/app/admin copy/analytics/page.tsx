import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics Overview | ApnaGhar",
  description: "View analytics and insights for the housing society booking system",
};

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Analytics Overview</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-primary">1,234</p>
          <p className="text-sm text-green-600 mt-1">+12% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Active Properties</h3>
          <p className="text-3xl font-bold text-primary">567</p>
          <p className="text-sm text-green-600 mt-1">+8% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Total Bookings</h3>
          <p className="text-3xl font-bold text-primary">89</p>
          <p className="text-sm text-green-600 mt-1">+15% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-primary">₹4.5Cr</p>
          <p className="text-sm text-green-600 mt-1">+20% from last month</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Booking Trends */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Booking Trends</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Booking trends chart will be displayed here</p>
          </div>
        </div>

        {/* Property Types Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Property Types Distribution</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Property types distribution chart will be displayed here</p>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Properties */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Top Performing Properties</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">3 BHK Apartment</h3>
                <p className="text-sm text-gray-500">Sector 7, Gurgaon</p>
              </div>
              <div className="text-right">
                <p className="font-medium">45 views</p>
                <p className="text-sm text-green-600">+12% from last week</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">4 BHK Villa</h3>
                <p className="text-sm text-gray-500">Sector 14, Gurgaon</p>
              </div>
              <div className="text-right">
                <p className="font-medium">38 views</p>
                <p className="text-sm text-green-600">+8% from last week</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">2 BHK Apartment</h3>
                <p className="text-sm text-gray-500">Sector 23, Gurgaon</p>
              </div>
              <div className="text-right">
                <p className="font-medium">32 views</p>
                <p className="text-sm text-green-600">+5% from last week</p>
              </div>
            </div>
          </div>
        </div>

        {/* User Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">User Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">New Registrations</h3>
                <p className="text-sm text-gray-500">Last 7 days</p>
              </div>
              <div className="text-right">
                <p className="font-medium">156</p>
                <p className="text-sm text-green-600">+18% from last week</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Active Users</h3>
                <p className="text-sm text-gray-500">Last 7 days</p>
              </div>
              <div className="text-right">
                <p className="font-medium">892</p>
                <p className="text-sm text-green-600">+5% from last week</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Property Inquiries</h3>
                <p className="text-sm text-gray-500">Last 7 days</p>
              </div>
              <div className="text-right">
                <p className="font-medium">234</p>
                <p className="text-sm text-green-600">+15% from last week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Time Period Selector */}
      <div className="mt-6 flex justify-end">
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