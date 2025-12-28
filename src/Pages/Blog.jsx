import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { LuFilter } from "react-icons/lu";

export default function Blog() {
 const blogs = [
  {
    id: 1,
    title: "Industry Insights & Strategic Trends",
    content: "Explore the latest developments shaping the global market. Our in-depth analysis provides the strategic context you need to stay ahead of the curve.",
    image: "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
  },
  {
    id: 2,
    title: "The Art of Professional Growth",
    content: "Unlock your potential with actionable tips on leadership, communication, and career advancement in today's fast-paced corporate environment.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmO3DtNHLYfE-BrAptQTtC0ZmleZsacnraw&s",
  },
  {
    id: 3,
    title: "Technical Masterclass: Best Practices",
    content: "A deep dive into modern methodologies. We break down complex technical concepts into manageable workflows for developers and engineers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQssBce8coyY0Tyrc6DoLhAVs3Luebst8Vw&s",
  },
  {
    id: 4,
    title: "Sustainable Innovation in 2025",
    content: "Discover how eco-friendly initiatives are driving business value and creating a positive impact on both the environment and the bottom line.",
    image: "https://img.freepik.com/free-vector/merry-christmas-wallpaper-design_79603-2129.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 5,
    title: "The Future of Digital Transformation",
    content: "Navigating the shift toward AI-integrated systems. Learn how to leverage emerging technologies to optimize your operational efficiency.",
    image: "https://media.zeenopay.com/WhatsApp%20Image%202025-04-23%20at%2001.23.20.jpeg",
  },
  {
    id: 6,
    title: "Maximizing Productivity Workflows",
    content: "Efficiency is more than just speed; it's about strategy. We analyze the top tools and habits that help high-performing teams deliver results.",
    image: "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
  },
  {
    id: 7,
    title: "Navigating Global Market Volatility",
    content: "Understand the economic factors influencing today's markets and learn risk management strategies to protect your long-term investments.",
    image: "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
  },
  {
    id: 8,
    title: "The Psychology of Consumer Behavior",
    content: "What drives a purchase? We examine the cognitive triggers and emotional drivers that influence how modern customers interact with brands.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQssBce8coyY0Tyrc6DoLhAVs3Luebst8Vw&s",
  },
  {
    id: 9,
    title: "Building Resilient Infrastructure",
    content: "An architectural perspective on creating scalable and secure systems that can withstand the demands of modern web traffic.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmO3DtNHLYfE-BrAptQTtC0ZmleZsacnraw&s",
  },
  {
    id: 10,
    title: "Ethics in the Age of Automation",
    content: "As automation becomes standard, we discuss the ethical considerations and responsibilities of creators and business leaders in a digital world.",
    image: "https://media.zeenopay.com/WhatsApp%20Image%202025-04-23%20at%2001.23.20.jpeg",
  },
];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  //Pagination logic
  const [page, setPage] = useState(1);
  const perPage = 6;

  const start = (page - 1) * perPage;
  const end = page * perPage;

  const totalPages = Math.ceil(blogs.length / perPage);

  return (
    <>
      <main className="bg-white grid grid-cols-1 px-6 md:px-12 lg:px-24 pt-40 md:pt-6">
        {/* Header */}
        <section className="pt-5 rounded-lg flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-left mb-5">
            <h1 className="text-4xl font-bold mb-1">Latest Articles</h1>
            <p className="text-gray-700">
              Insights, tutorials, and industry news
            </p>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <input
              type="search"
              placeholder="Search articles..."
              className="border border-gray-300 rounded-md px-5 py-2 w-full"
            />
            <button className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white px-5 py-2 flex items-center gap-2 rounded-md">
              <LuFilter /> Filters
            </button>
          </div>
        </section>

        {/* Categories */}
        <section className="flex gap-2 mb-5 mt-5">
          <button className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white text-sm px-4 py-2 rounded-full">
            All Categories
          </button>
          <button className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white text-sm px-4 py-2 rounded-full">
            Beauty peagant
          </button>
          <button className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white text-sm px-4 py-2 rounded-full">
            Fashion
          </button>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {blogs.slice(start, end).map((blog) => (
            <Cards
              key={blog.id}
              id={blog.id}
              title={blog.title}
              content={blog.content}
              image={blog.image}
            />
          ))}
        </section>

        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-10 mb-10">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 border rounded-md
                  ${
                    page === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
