import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Verification | ApnaGhar",
  description: "Manage user verification requests in the housing society booking system",
};

export default function UserVerificationPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Verification</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Pending: 12</span>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
            Process All
          </button>
        </div>
      </div>

      {/* Verification Requests */}
      <div className="space-y-4">
        {/* Sample Verification Request */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-gray-200"></div>
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-gray-500">john@example.com</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">ID Type:</span>
                    <span className="text-sm text-gray-600">Aadhar Card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">ID Number:</span>
                    <span className="text-sm text-gray-600">XXXX-XXXX-1234</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Submitted:</span>
                    <span className="text-sm text-gray-600">Jan 15, 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200">
                Approve
              </button>
              <button className="px-4 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200">
                Reject
              </button>
            </div>
          </div>
        </div>

        {/* Another Sample Verification Request */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-gray-200"></div>
              <div>
                <h3 className="text-lg font-semibold">Jane Smith</h3>
                <p className="text-gray-500">jane@example.com</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">ID Type:</span>
                    <span className="text-sm text-gray-600">PAN Card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">ID Number:</span>
                    <span className="text-sm text-gray-600">ABCDE1234F</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Submitted:</span>
                    <span className="text-sm text-gray-600">Jan 14, 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200">
                Approve
              </button>
              <button className="px-4 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-700">
          Showing 1 to 2 of 12 results
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