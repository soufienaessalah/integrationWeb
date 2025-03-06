import { Link } from "react-router-dom"
import GameBoyControls from "./GameBoyRelevantBlogs"

export default function GameBoyBlogPost({ id }) {
  // This is mock data. In a real application, you'd fetch this based on the id.
  const blog = {
    id: id,
    title: "GameBoy History",
    author: "Youssef Ben Arous",
    content:
      "The Game Boy is an 8-bit handheld game console developed and manufactured by Nintendo. The first handheld in the Game Boy family, it was first released in Japan on April 21, 1989, then North America, three months later, and lastly in Europe, more than one year later...",
  }

  if (!id) {
    return <div className="text-center">Loading...</div>
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-yellow-300 p-8 rounded-3xl shadow-lg">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-2 font-pixel">{blog.title}</h2>
          <p className="mb-2 font-pixel">Realisation: {blog.author}</p>
          <div className="bg-white p-4 mb-4 h-64 overflow-y-auto font-pixel">{blog.content}</div>
          <Link to="/">
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-pixel">
              Back to List
            </button>
          </Link>
        </div>
        <GameBoyControls />
      </div>
    </div>
  )
}