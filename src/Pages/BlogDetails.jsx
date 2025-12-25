import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
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
    image: "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
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
    image: "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
  },
  {
    id: 9,
    title: "Building Resilient Infrastructure",
    content: "An architectural perspective on creating scalable and secure systems that can withstand the demands of modern web traffic.",
    image: "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
  },
  {
    id: 10,
    title: "Ethics in the Age of Automation",
    content: "As automation becomes standard, we discuss the ethical considerations and responsibilities of creators and business leaders in a digital world.",
    image: "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
  },
];

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <main className="px-6 md:px-24 py-10">
      <button
        onClick={() => window.history.back()}
        className="mb-6 text-blue-500 hover:underline"
      >
        &larr; Back to Blogs
      </button>
      <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-lg" />

      <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>

      <p className="text-gray-700 mt-4 text-lg leading-relaxed">
        {blog.content}
      </p>
    </main>
  );
}
