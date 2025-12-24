import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: "First Blog",
      content: "This is the content of the first blog. Here you can provide insights, tutorials, or industry news.",
      image: "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
    },
    {
      id: 2,
      title: "Second Blog",
      content: "This is the content of the second blog. Share updates, tips, or other relevant information.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmO3DtNHLYfE-BrAptQTtC0ZmleZsacnraw&s",
    },
    {
      id: 3,
      title: "Third Blog",
      content: "This is the content of the third blog. Add some more details or examples here.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQssBce8coyY0Tyrc6DoLhAVs3Luebst8Vw&s",
    },
    {
      id: 4,
      title: "Fourth Blog",
      content: "This is the content of the fourth blog. Include any tutorials or interesting facts.",
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
