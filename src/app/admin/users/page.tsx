import { UserManagement } from "@/components/admin/users/UserManagement";

export const metadata = {
  title: "User Management | Admin Panel",
  description: "Manage users of the housing society booking platform",
};

export default function UsersPage() {
  return <UserManagement />;
}
