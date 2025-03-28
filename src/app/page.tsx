import React from "react";
import HeroSection from "@/components/home/HeroSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Building, Home, Users, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Our Platform
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a seamless experience for finding and booking your
                dream home in premium housing societies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Premium Properties
                </h3>
                <p className="text-gray-600">
                  Access to exclusive residential projects with world-class
                  amenities and modern living spaces
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Home className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Virtual Tours</h3>
                <p className="text-gray-600">
                  Explore properties from the comfort of your home with our
                  immersive 3D virtual tours
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                <p className="text-gray-600">
                  Simple and secure booking process for scheduling site visits
                  and property reservations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/90 to-primary">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Browse our extensive collection of premium housing society
              properties and take the first step towards your new home
            </p>
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/properties" className="flex items-center gap-2">
                Explore Properties
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from families who found their perfect home through our
                platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                      alt="John Smith"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-sm text-gray-500">
                      Sunset Valley Resident
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The booking process was seamless, and the virtual tour helped
                  us make our decision without even visiting the property in
                  person. Couldn't be happier with our new home!"
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                      alt="Sarah Johnson"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">
                      Parkview Apartments Resident
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The detailed information about amenities and neighborhood
                  helped us find exactly what we were looking for. The site
                  visit booking was quick and the staff was very helpful."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=David"
                      alt="David Chen"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">David Chen</h4>
                    <p className="text-sm text-gray-500">
                      Riverside Condominiums Resident
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "We were able to compare multiple properties side by side and
                  make an informed decision. The pricing information was
                  transparent and the booking confirmation was instant."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
