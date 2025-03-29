import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developers | ApnaGhar",
  description: "Find trusted property developers and builders",
};

export default function DevelopersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Trusted Developers</h1>

      {/* Developer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "DLF Limited",
            projects: 25,
            rating: 4.8,
            image: "/developers/dlf.jpg",
            description: "One of India's leading real estate developers with over 70 years of experience.",
          },
          {
            name: "Sobha Limited",
            projects: 18,
            rating: 4.7,
            image: "/developers/sobha.jpg",
            description: "Known for quality construction and innovative designs.",
          },
          {
            name: "Godrej Properties",
            projects: 22,
            rating: 4.6,
            image: "/developers/godrej.jpg",
            description: "Premium real estate developer with a focus on sustainable development.",
          },
          {
            name: "Prestige Estates",
            projects: 15,
            rating: 4.5,
            image: "/developers/prestige.jpg",
            description: "Leading real estate developer in South India.",
          },
          {
            name: "Brigade Group",
            projects: 20,
            rating: 4.4,
            image: "/developers/brigade.jpg",
            description: "Known for luxury properties and quality construction.",
          },
          {
            name: "Puravankara",
            projects: 16,
            rating: 4.3,
            image: "/developers/puravankara.jpg",
            description: "Trusted name in real estate with pan-India presence.",
          },
        ].map((developer) => (
          <div key={developer.name} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{developer.name}</h3>
              <p className="text-gray-600 mb-4">{developer.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">Projects</p>
                    <p className="font-semibold">{developer.projects}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="font-semibold">{developer.rating}/5</p>
                  </div>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
                  View Projects
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 