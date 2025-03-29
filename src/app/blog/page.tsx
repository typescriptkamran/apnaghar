import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ApnaGhar",
  description: "Read the latest news and insights about real estate",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      {/* Featured Post */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-12">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm text-gray-500">Real Estate Trends</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">March 15, 2024</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Top 10 Emerging Real Estate Markets in India for 2024
          </h2>
          <p className="text-gray-600 mb-6">
            Discover the most promising real estate markets in India this year, 
            from emerging metropolitan areas to up-and-coming suburban regions.
          </p>
          <button className="text-primary font-medium hover:text-primary/90">
            Read More →
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "How to Choose the Right Property Investment",
            category: "Investment Tips",
            date: "March 12, 2024",
            excerpt: "Learn the essential factors to consider when investing in real estate...",
          },
          {
            title: "Understanding Home Loans and Mortgages",
            category: "Finance",
            date: "March 10, 2024",
            excerpt: "A comprehensive guide to home loans, interest rates, and mortgage options...",
          },
          {
            title: "Smart Home Features Worth Investing In",
            category: "Technology",
            date: "March 8, 2024",
            excerpt: "Explore the latest smart home technologies that add value to your property...",
          },
          {
            title: "The Future of Real Estate: Virtual Tours",
            category: "Technology",
            date: "March 6, 2024",
            excerpt: "How virtual reality is transforming the property viewing experience...",
          },
          {
            title: "Sustainable Living: Green Building Trends",
            category: "Sustainability",
            date: "March 4, 2024",
            excerpt: "Discover eco-friendly building practices and sustainable housing options...",
          },
          {
            title: "Property Valuation: What You Need to Know",
            category: "Market Analysis",
            date: "March 2, 2024",
            excerpt: "Understanding how property values are determined and what affects them...",
          },
        ].map((post) => (
          <div key={post.title} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm text-gray-500">{post.category}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-primary font-medium hover:text-primary/90">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-4">
          Get the latest real estate news and insights delivered to your inbox.
        </p>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
} 