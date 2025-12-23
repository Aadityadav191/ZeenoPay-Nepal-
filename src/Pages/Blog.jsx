import React from "react";
import Cards from "../Components/Cards";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "First Blog",
      content: "This is the content of the first blog. Here you can provide insights, tutorials, or industry news.",
      image:
        "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
    },
    {
      id: 2,
      title: "Second Blog",
      content: "This is the content of the second blog. Share updates, tips, or other relevant information.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmO3DtNHLYfE-BrAptQTtC0ZmleZsacnraw&s",
    },
    {
      id: 3,
      title: "Third Blog",
      content: "This is the content of the third blog. Add some more details or examples here.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQssBce8coyY0Tyrc6DoLhAVs3Luebst8Vw&s",
    },
    {
      id: 4,
      title: "Fourth Blog",
      content: "This is the content of the fourth blog. Include any tutorials or interesting facts.",
      image:
        "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
    },
  ];

  return (
    <>
      <main className="bg-white grid grid-cols-1 px-6 md:px-12 lg:px-24 pt-4 md:pt-6 ">
        <section className=" p-6 rounded-lg  flex flex-col md:flex-row justify-between items-center w-full ">
          <div className="text-left mb-4 ">
            <h1 className="text-4xl font-bold mb-1 text-left">
              Latest Articles{" "}
            </h1>
            <p className="text-gray-700">
              Insights, tutorials, and industry news
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 w-full md:w-auto md:mt-0">
            <input
              type="text"
              placeholder="Search articles..."
              className="border border-gray-300 rounded-md px-4 py-2 w-full "
            ></input>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Filter
            </button>
          </div>
        </section>

        <section className="flex md:grid-cols-3 gap-2  mb-5">
          <button className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-100  transition">
            All Categories
          </button>

          <button className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-100  transition">
            Beauty peagant
          </button>

          <button className="bg-gradient-to-r from-[#36b6ff] to-indigo-600 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-100  transition">
            Fashion
          </button>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {blogs.map((blog) => (
            <Cards
              key={blog.id}
              title={blog.title}
              content={blog.content}
              image={blog.image}
            />
          ))}
        </section>
      </main>
    </>
  );
}
