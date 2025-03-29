import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Roles | ApnaGhar",
  description: "Manage user roles and permissions in the housing society booking system",
};

export default function UserRolesPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Roles</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
          Add New Role
        </button>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Admin Role */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">Administrator</h3>
              <p className="text-sm text-gray-500">Full system access</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-primary hover:text-primary/80">Edit</button>
              <button className="text-red-600 hover:text-red-900">Delete</button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" checked className="rounded" />
              <span className="text-sm">User Management</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked className="rounded" />
              <span className="text-sm">Property Management</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked className="rounded" />
              <span className="text-sm">Booking Management</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked className="rounded" />
              <span className="text-sm">System Settings</span>
            </div>
          </div>
        </div>

        {/* Agent Role */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">Property Agent</h3>
              <p className="text-sm text-gray-500">Property management access</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-primary hover:text-primary/80">Edit</button>
              <button className="text-red-600 hover:text-red-900">Delete</button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" checked className="rounded" />
              <span className="text-sm">Property Listing</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked className="rounded" />
              <span className="text-sm">Property Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">User Management</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">System Settings</span>
            </div>
          </div>
        </div>

        {/* User Role */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">Regular User</h3>
              <p className="text-sm text-gray-500">Basic user access</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-primary hover:text-primary/80">Edit</button>
              <button className="text-red-600 hover:text-red-900">Delete</button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" checked className="rounded" />
              <span className="text-sm">View Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked className="rounded" />
              <span className="text-sm">Make Bookings</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Property Management</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">System Settings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Role Statistics */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Role Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Administrators</h3>
            <p className="text-3xl font-bold text-primary">5</p>
            <p className="text-sm text-gray-500 mt-1">Active administrators</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Property Agents</h3>
            <p className="text-3xl font-bold text-primary">12</p>
            <p className="text-sm text-gray-500 mt-1">Active agents</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Regular Users</h3>
            <p className="text-3xl font-bold text-primary">1,234</p>
            <p className="text-sm text-gray-500 mt-1">Active users</p>
          </div>
        </div>
      </div>
    </div>
  );
} 