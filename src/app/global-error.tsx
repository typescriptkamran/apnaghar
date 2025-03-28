"use client";

import { useEffect } from "react";
import FallbackUI from "@/components/FallbackUI";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <FallbackUI error={error} reset={reset} />
      </body>
    </html>
  );
}
