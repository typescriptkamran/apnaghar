import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | ApnaGhar",
  description: "Login to your ApnaGhar account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 