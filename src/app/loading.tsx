import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-primary animate-spin"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-primary animate-pulse opacity-60"></div>
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-2">Loading</h2>
        <p className="text-gray-600">
          Please wait while we prepare your experience...
        </p>
      </div>
    </div>
  );
}
