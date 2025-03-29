import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties | ApnaGhar",
  description: "Browse available properties in your area",
};

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 