import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Analytics | ApnaGhar",
  description: "View detailed user analytics and metrics for the housing society booking system",
};

export default function UserAnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">User Analytics</h1>

      {/* User Growth Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Total Users</h3>
          <p className="text-3xl font-bold">1,234</p>
          <p className="text-sm text-green-600">+15% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Active Users</h3>
          <p className="text-3xl font-bold">892</p>
          <p className="text-sm text-green-600">+8% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">New Users</h3>
          <p className="text-3xl font-bold">156</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">User Retention</h3>
          <p className="text-3xl font-bold">85%</p>
          <p className="text-sm text-green-600">+5% from last month</p>
        </div>
      </div>

      {/* User Demographics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Age Distribution</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>18-25</span>
              <span>15%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>26-35</span>
              <span>40%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>36-45</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>46+</span>
              <span>20%</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Gender Distribution</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Male</span>
              <span>55%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Female</span>
              <span>45%</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Location Distribution</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Gurgaon</span>
              <span>40%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Delhi</span>
              <span>30%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Noida</span>
              <span>20%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Others</span>
              <span>10%</span>
            </div>
          </div>
        </div>
      </div>

      {/* User Behavior */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Average Session Duration</h2>
          <p className="text-3xl font-bold">12.5 min</p>
          <p className="text-sm text-green-600">+2 min from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Pages per Session</h2>
          <p className="text-3xl font-bold">4.2</p>
          <p className="text-sm text-green-600">+0.3 from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Bounce Rate</h2>
          <p className="text-3xl font-bold">32%</p>
          <p className="text-sm text-red-600">+2% from last month</p>
        </div>
      </div>

      {/* User Engagement */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Property Views</h2>
          <p className="text-3xl font-bold">3,456</p>
          <p className="text-sm text-green-600">+18% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Property Inquiries</h2>
          <p className="text-3xl font-bold">234</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Booking Attempts</h2>
          <p className="text-3xl font-bold">89</p>
          <p className="text-sm text-green-600">+15% from last month</p>
        </div>
      </div>

      {/* User Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Average Rating</h2>
          <p className="text-3xl font-bold">4.5/5</p>
          <p className="text-sm text-green-600">+0.2 from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Customer Satisfaction</h2>
          <p className="text-3xl font-bold">92%</p>
          <p className="text-sm text-green-600">+3% from last month</p>
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