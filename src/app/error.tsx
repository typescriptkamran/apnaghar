"use client";

import { useEffect } from "react";
import FallbackUI from "@/components/FallbackUI";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Unhandled error:", error);
  }, [error]);

  return <FallbackUI error={error} reset={reset} />;
}
