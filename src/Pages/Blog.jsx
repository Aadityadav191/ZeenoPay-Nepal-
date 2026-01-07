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
      category: "Shipping Guide",
      title: "Industry Insights & Strategic Trends",
      content:
        "Explore the latest developments shaping the global Shipping Guide. Our in-depth analysis provides strategic context.",
      image:
        "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
      date: "Oct 24, 2025",
    },
    {
      id: 2,
      category: "Customs & Duties",
      title: "The Art of Professional Customs & Duties",
      content:
        "Unlock your potential with actionable tips on leadership and communication in today's fast-paced environment.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmO3DtNHLYfE-BrAptQTtC0ZmleZsacnraw&s",
      date: "Oct 22, 2025",
    },
    {
      id: 5,
      category: "Cost Saving",
      title: "The Future of Digital Transformation",
      content:
        "Navigating the shift toward AI-integrated systems in international voting platforms.",
      image:
        "https://i.ibb.co/xKN83YjM/Screenshot-2026-01-01-at-02-13-59.png",
      date: "Oct 15, 2025",
    },
     {
      id: 6,
      category: "Cost Saving",
      title: "The Future of Digital Transformation",
      content:
        "Navigating the shift toward AI-integrated systems in international voting platforms.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
      date: "Oct 15, 2025",
    },
     {
      id: 7,
      category: "Shipping Guide",
      title: "The Future of Digital Transformation",
      content:
        "Navigating the shift toward AI-integrated systems in international voting platforms.",
      image:
        "https://media.zeenopay.com/WhatsApp%20Image%202025-04-23%20at%2001.23.20.jpeg",
      date: "Oct 15, 2025",
    },
     {
      id: 8,
      category: "Cost Saving",
      title: "The Future of Digital Transformation",
      content:
        "Navigating the shift toward AI-integrated systems in international voting platforms.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
      date: "Oct 15, 2025",
    },
     {
      id: 9,
      category: "Customs & Duties",
      title: "The Future of Digital Transformation",
      content:
        "Navigating the shift toward AI-integrated systems in international voting platforms.",
      image:
        "https://media.zeenopay.com/WhatsApp%20Image%202025-04-23%20at%2001.23.20.jpeg",
      date: "Oct 15, 2025",
    },
     {
      id: 10,
      category: "Shipping Guide",
      title: "The Future of Digital Transformation",
      content:
        "Navigating the shift toward AI-integrated systems in international voting platforms.",
      image:
        "https://media.zeenopay.com/WhatsApp%20Image%202025-04-23%20at%2001.23.20.jpeg",
      date: "Oct 15, 2025",
    },
     {
      id: 11,
      category: "Customs & Duties",
      title: "The Future of Digital Transformation",
      content:
        "Navigating the shift toward AI-integrated systems in international voting platforms.",
      image:
        "https://media.zeenopay.com/WhatsApp%20Image%202025-04-23%20at%2001.23.20.jpeg",
      date: "Oct 15, 2025",
    },
     {
      id: 12,
      category: "Cost Saving",
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
    <main className="min-h-screen pb-20 max-w-7xl mx-auto overflow-x-hidden">
      {/* Header Section */}
      <section className="relative py-10 mb-4 overflow-hidden text-center">
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-black tracking-tight mb-2">
            <span className="text-gray-700">Blog & </span>
            <span className="text-transparent bg-clip-text bg-[#20c55e]">
              Guides
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and guides for international shopping and
            shipping to Nepal
          </p>
        </div>
      </section>

      <section className="flex  items-center  gap-3 max-w-7xl mx-auto px-6 md:px-12 lg:px-3">
        <div className="relative group w-full">
          <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1da24b] transition-colors" />
          <input
            type="search"
            placeholder="Search articles..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3  border-2 rounded-2xl focus:ring-2 focus:ring-[#36b6ff]/20 transition-all outline-none text-gray-700 shadow-sm focus:border-[#20c55e]"
          />
        </div>
        <div>
          <button className=" flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 border border-gray-100 px-8 py-3 font-semibold rounded-xl transition-all active:scale-95">
            <LuFilter />
            Filter
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-3">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mt-5 mb-6">
          {[
            "All",
            "Shipping Guide",
            "Customs & Duties",
            "Shopping Tips",
            "Cost Saving",
            "Company",
            "Seasonal",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                activeCategory === cat
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mb-8 text-gray-500 font-small ">
          Showing {filteredBlogs.length}{" "}
          {filteredBlogs.length === 1 ? "article" : "articles"}
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
            <h1 className="text-gray-700 text-xl font-semibold mb-4">
              No articles found.
            </h1>
            <p>Try a different search term or category</p>
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
