import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface FallbackUIProps {
  error?: Error;
  reset?: () => void;
}

const FallbackUI: React.FC<FallbackUIProps> = ({
  error,
  reset = () => window.location.reload(),
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-100 rounded-full opacity-30 animate-ping-slow"></div>
            <AlertTriangle className="h-16 w-16 text-amber-500 relative z-10" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-3">We hit a snag</h2>
        <p className="text-gray-600 mb-6">
          Our team has been notified and is working on a fix. Please try again
          in a few moments.
        </p>
        {error && (
          <div className="text-left bg-gray-50 p-4 rounded-md mb-6 overflow-auto max-h-32 border border-gray-200">
            <code className="text-sm text-red-600">
              {error.message || "Unknown error occurred"}
            </code>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={reset}
            className="flex items-center justify-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh Page
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FallbackUI;
