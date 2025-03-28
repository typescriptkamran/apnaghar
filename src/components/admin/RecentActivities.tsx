"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type Activity = {
  id: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  action: string;
  target: string;
  timestamp: string;
  status?: "pending" | "approved" | "rejected";
};

export function RecentActivities() {
  // Mock data for recent activities
  const [activities] = useState<Activity[]>([
    {
      id: "act-1",
      user: {
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      },
      action: "added a new property",
      target: "Sunset Valley Residences",
      timestamp: "2 hours ago",
      status: "pending",
    },
    {
      id: "act-2",
      user: {
        name: "Jane Smith",
        email: "jane@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      },
      action: "updated property details for",
      target: "Urban Loft Apartments",
      timestamp: "4 hours ago",
    },
    {
      id: "act-3",
      user: {
        name: "Robert Johnson",
        email: "robert@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
      },
      action: "booked a site visit for",
      target: "Parkview Apartments",
      timestamp: "Yesterday",
    },
    {
      id: "act-4",
      user: {
        name: "Emily Davis",
        email: "emily@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      },
      action: "requested verification for",
      target: "Developer Account",
      timestamp: "Yesterday",
      status: "pending",
    },
    {
      id: "act-5",
      user: {
        name: "Michael Wilson",
        email: "michael@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      },
      action: "submitted a review for",
      target: "Riverside Condominiums",
      timestamp: "2 days ago",
    },
  ]);

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-start space-x-4 rounded-lg border p-4"
        >
          <Avatar>
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>
              {activity.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">
              <span className="font-semibold">{activity.user.name}</span>{" "}
              {activity.action}{" "}
              <span className="font-semibold">{activity.target}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
          </div>
          {activity.status === "pending" && (
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Approve
              </Button>
              <Button variant="outline" size="sm" className="text-destructive">
                Reject
              </Button>
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-center pt-2">
        <Button variant="outline">View All Activities</Button>
      </div>
    </div>
  );
}
