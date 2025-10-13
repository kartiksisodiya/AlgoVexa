import React from "react";

const posts = [
  {
    id: 1,
    title: "5 Ways to Boost IT Efficiency",
    excerpt: "Discover strategies that help IT departments optimize workflows and cut costs.",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    title: "Cybersecurity Trends 2025",
    excerpt: "Stay ahead with the latest developments in cybersecurity and data protection.",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    title: "Cloud vs On-Prem: Which Wins?",
    excerpt: "An in-depth comparison of cloud solutions and traditional infrastructure.",
    image: "https://picsum.photos/600/400?random=3",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">From Our Blog</h2>
          <p className="text-gray-500 mt-2">Latest insights and resources</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="card overflow-hidden hover:shadow-xl transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-accent font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
