"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Building2,
  Calendar,
  BarChart3,
  Settings,
  AlertTriangle,
  MessageSquare,
  FileText,
  Home,
} from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  submenu?: { title: string; href: string }[];
}

export function AdminSidebar() {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "User Management",
      href: "/admin/users",
      icon: <Users className="h-5 w-5" />,
      submenu: [
        { title: "All Users", href: "/admin/users" },
        { title: "Verification", href: "/admin/users/verification" },
        { title: "Roles", href: "/admin/users/roles" },
      ],
    },
    {
      title: "Properties",
      href: "/admin/properties",
      icon: <Building2 className="h-5 w-5" />,
      submenu: [
        { title: "All Properties", href: "/admin/properties" },
        { title: "Pending Approval", href: "/admin/properties/pending" },
        { title: "Featured", href: "/admin/properties/featured" },
      ],
    },
    {
      title: "Bookings",
      href: "/admin/bookings",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: <BarChart3 className="h-5 w-5" />,
      submenu: [
        { title: "Overview", href: "/admin/analytics" },
        { title: "User Metrics", href: "/admin/analytics/users" },
        { title: "Property Metrics", href: "/admin/analytics/properties" },
        { title: "Revenue", href: "/admin/analytics/revenue" },
      ],
    },
    {
      title: "Content Moderation",
      href: "/admin/moderation",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Fraud Prevention",
      href: "/admin/fraud",
      icon: <AlertTriangle className="h-5 w-5" />,
    },
    {
      title: "Communication",
      href: "/admin/communication",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const toggleSubmenu = (title: string) => {
    if (openSubmenu === title) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(title);
    }
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r bg-background md:flex">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Admin Panel</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.title}>
              {item.submenu ? (
                <div className="space-y-1">
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium",
                      pathname.startsWith(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openSubmenu === item.title ? "rotate-180" : ""
                      )}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {openSubmenu === item.title && (
                    <ul className="ml-6 space-y-1 pl-2">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.title}>
                          <Link
                            href={subitem.href}
                            className={cn(
                              "flex items-center rounded-md px-3 py-2 text-sm",
                              pathname === subitem.href
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            {subitem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t p-4">
        <div className="rounded-md bg-muted p-3 text-xs text-muted-foreground">
          <p className="font-medium">Admin Panel v1.0</p>
          <p className="mt-1">© 2024 Housing Society Bookings</p>
        </div>
      </div>
    </aside>
  );
}
