import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Analytics | ApnaGhar",
  description: "View detailed revenue analytics and metrics for the housing society booking system",
};

export default function RevenueAnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Revenue Analytics</h1>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Total Revenue</h3>
          <p className="text-3xl font-bold">₹1.2Cr</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Monthly Revenue</h3>
          <p className="text-3xl font-bold">₹15L</p>
          <p className="text-sm text-green-600">+8% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Average Booking Value</h3>
          <p className="text-3xl font-bold">₹25,000</p>
          <p className="text-sm text-red-600">-3% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-600">Pending Payments</h3>
          <p className="text-3xl font-bold">₹2.5L</p>
          <p className="text-sm text-gray-600">12 transactions</p>
        </div>
      </div>

      {/* Revenue by Property Type */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-6">Revenue by Property Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-medium">Apartments</h3>
            <p className="text-2xl font-bold">₹45L</p>
            <p className="text-sm text-gray-600">40% of total</p>
          </div>
          <div>
            <h3 className="font-medium">Houses</h3>
            <p className="text-2xl font-bold">₹35L</p>
            <p className="text-sm text-gray-600">30% of total</p>
          </div>
          <div>
            <h3 className="font-medium">Villas</h3>
            <p className="text-2xl font-bold">₹25L</p>
            <p className="text-sm text-gray-600">20% of total</p>
          </div>
          <div>
            <h3 className="font-medium">Commercial</h3>
            <p className="text-2xl font-bold">₹15L</p>
            <p className="text-sm text-gray-600">10% of total</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-6">Recent Transactions</h2>
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
              ].map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{transaction.property}</td>
                  <td className="py-2">{transaction.customer}</td>
                  <td className="py-2">{transaction.amount}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-2">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 