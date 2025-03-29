import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Dashboard | ApnaGhar",
  description: "Admin dashboard for managing the housing society booking system",
};

export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="space-x-4">
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
            Add Property
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
            Add User
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Total Revenue</h3>
          <p className="text-3xl font-bold">₹1.2Cr</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Total Users</h3>
          <p className="text-3xl font-bold">1,234</p>
          <p className="text-sm text-green-600">+15% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Total Properties</h3>
          <p className="text-3xl font-bold">567</p>
          <p className="text-sm text-green-600">+8% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Active Bookings</h3>
          <p className="text-3xl font-bold">89</p>
          <p className="text-sm text-green-600">+10% from last month</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link href="/admin/analytics/revenue" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Revenue Analytics</h2>
          <p className="text-gray-600">View detailed revenue metrics and trends</p>
        </Link>
        <Link href="/admin/analytics/users" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">User Analytics</h2>
          <p className="text-gray-600">Monitor user growth and engagement</p>
        </Link>
        <Link href="/admin/analytics/properties" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Property Analytics</h2>
          <p className="text-gray-600">Track property performance and listings</p>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              action: "New Property Listed",
              details: "3 BHK Apartment in Sector 62, Gurgaon",
              time: "10 minutes ago",
            },
            {
              action: "New User Registration",
              details: "Rahul Sharma (rahul.sharma@email.com)",
              time: "25 minutes ago",
            },
            {
              action: "Property Booking",
              details: "2 BHK House in DLF Phase 3",
              time: "1 hour ago",
            },
            {
              action: "Property Inquiry",
              details: "4 BHK Villa in Sector 45",
              time: "2 hours ago",
            },
          ].map((activity, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-medium">{activity.action}</h3>
                <p className="text-sm text-gray-600">{activity.details}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-6">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Property</th>
                <th className="text-left py-2">Customer</th>
                <th className="text-left py-2">Amount</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  property: "3 BHK Apartment",
                  customer: "Rahul Sharma",
                  amount: "₹25,000",
                  status: "Completed",
                  date: "2024-03-15",
                },
                {
                  property: "2 BHK House",
                  customer: "Priya Patel",
                  amount: "₹20,000",
                  status: "Pending",
                  date: "2024-03-14",
                },
                {
                  property: "4 BHK Villa",
                  customer: "Amit Kumar",
                  amount: "₹35,000",
                  status: "Completed",
                  date: "2024-03-13",
                },
              ].map((booking, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{booking.property}</td>
                  <td className="py-2">{booking.customer}</td>
                  <td className="py-2">{booking.amount}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        booking.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-2">{booking.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Inquiries */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-6">Recent Inquiries</h2>
        <div className="space-y-4">
          {[
            {
              property: "3 BHK Apartment in Sector 62",
              customer: "Rahul Sharma",
              contact: "rahul.sharma@email.com",
              date: "2024-03-15",
            },
            {
              property: "2 BHK House in DLF Phase 3",
              customer: "Priya Patel",
              contact: "priya.patel@email.com",
              date: "2024-03-14",
            },
            {
              property: "4 BHK Villa in Sector 45",
              customer: "Amit Kumar",
              contact: "amit.kumar@email.com",
              date: "2024-03-13",
            },
          ].map((inquiry, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-medium">{inquiry.property}</h3>
                <p className="text-sm text-gray-600">
                  {inquiry.customer} • {inquiry.contact}
                </p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">{inquiry.date}</span>
                <button className="block text-primary hover:text-primary/90 text-sm mt-1">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 