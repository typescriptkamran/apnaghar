import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ApnaGhar",
  description: "Learn about ApnaGhar and our mission to make property buying easier",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About ApnaGhar</h1>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At ApnaGhar, we're on a mission to revolutionize the property buying experience in India. 
            We believe that finding your dream home should be simple, transparent, and stress-free.
          </p>
          <p className="text-gray-600">
            Our platform connects property seekers with trusted developers and sellers, 
            making the entire process of buying a property more accessible and efficient.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in complete transparency in all our dealings, ensuring you have 
                all the information you need to make informed decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-gray-600">
                Building trust through verified listings, authenticated developers, and 
                reliable property information is at the core of our business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to provide cutting-edge solutions and make 
                property buying easier and more efficient.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Rahul Sharma",
                role: "CEO & Founder",
                image: "/team/rahul.jpg",
              },
              {
                name: "Priya Patel",
                role: "Head of Operations",
                image: "/team/priya.jpg",
              },
              {
                name: "Amit Kumar",
                role: "Technical Director",
                image: "/team/amit.jpg",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              Have questions or suggestions? We'd love to hear from you.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 