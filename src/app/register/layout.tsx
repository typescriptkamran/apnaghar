import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | ApnaGhar",
  description: "Create a new account on ApnaGhar",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 