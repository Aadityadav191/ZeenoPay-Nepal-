import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cards from "../Components/Cards";
import { LuFilter, LuSearch, LuArrowRight } from "react-icons/lu";

export default function Blog() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      category: "Market",
      title: "Industry Insights & Strategic Trends",
      content:
        "Explore the latest developments shaping the global market. Our in-depth analysis provides strategic context.",
      image:
        "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
      date: "Oct 24, 2025",
    },
    {
      id: 2,
      category: "Growth",
      title: "The Art of Professional Growth",
      content:
        "Unlock your potential with actionable tips on leadership and communication in today's fast-paced environment.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmO3DtNHLYfE-BrAptQTtC0ZmleZsacnraw&s",
      date: "Oct 22, 2025",
    },
    // ... add 'category' and 'date' fields to your other blog objects
    {
      id: 5,
      category: "Beauty Pageant",
      title: "The Future of Digital Transformation",
      content:
        "Navigating the shift toward AI-integrated systems in international voting platforms.",
      image:
        "https://media.zeenopay.com/WhatsApp%20Image%202025-04-23%20at%2001.23.20.jpeg",
      date: "Oct 15, 2025",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Filtering Logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const perPage = 6;
  const totalPages = Math.ceil(filteredBlogs.length / perPage);
  const start = (page - 1) * perPage;
  const displayedBlogs = filteredBlogs.slice(start, start + perPage);

  return (
    <main className="min-h-screen bg-[#fcfcfd] pb-20">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-6xl font-black tracking-tight mb-2">
            <span className="text-gray-900">Latest </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36b6ff] to-indigo-600">
              Articles
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and the latest news from the world of ZeenoPay.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-3">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mt-5 mb-10">
          {["All", "Beauty Pageant", "Fashion", "Growth", "Market"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setPage(1);
                }}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                {cat}
              </button>
            )
          )}
          <div className="relative group w-full md:w-96 ml-auto">
            <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#36b6ff] transition-colors" />
            <input
              type="search"
              placeholder="Search articles..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#36b6ff]/20 transition-all outline-none text-gray-700 shadow-sm"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <motion.section
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl"
        >
          <AnimatePresence mode="popLayout">
            {displayedBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Cards
                  id={blog.id}
                  title={blog.title}
                  content={blog.content}
                  image={blog.image}
                  date={blog.date}
                  category={blog.category}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.section>

        {/* Empty State */}
        {displayedBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No articles found matching your criteria.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="p-3 rounded-xl border border-gray-200 disabled:opacity-30 hover:bg-gray-50 transition-colors"
            >
              <LuArrowRight className="rotate-180" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-12 h-12 rounded-xl font-bold transition-all
                  ${
                    page === i + 1
                      ? "bg-[#36b6ff] text-white shadow-md shadow-blue-200"
                      : "bg-white text-gray-400 hover:text-gray-900 border border-gray-100"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="p-3 rounded-xl border border-gray-200 disabled:opacity-30 hover:bg-gray-50 transition-colors"
            >
              <LuArrowRight />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
