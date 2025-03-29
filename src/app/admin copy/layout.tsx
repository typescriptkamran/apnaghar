import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/admin" className="text-xl font-bold text-primary">
              ApnaGhar Admin
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Admin User</span>
              <button className="text-gray-600 hover:text-gray-900">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar Navigation */}
          <aside className="w-64 bg-white rounded-lg shadow p-4 h-fit">
            <nav className="space-y-2">
              <Link
                href="/admin"
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/analytics/revenue"
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Revenue Analytics
              </Link>
              <Link
                href="/admin/analytics/users"
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
              >
                User Analytics
              </Link>
              <Link
                href="/admin/analytics/properties"
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Property Analytics
              </Link>
              <Link
                href="/admin/properties"
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Manage Properties
              </Link>
              <Link
                href="/admin/users"
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Manage Users
              </Link>
              <Link
                href="/admin/bookings"
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Manage Bookings
              </Link>
              <Link
                href="/admin/inquiries"
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Manage Inquiries
              </Link>
              <Link
                href="/admin/settings"
                className="block px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Settings
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
} 