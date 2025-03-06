import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

const GameBoyRelevantBlogs = ({ blogs }) => {
  return (
    <div className="bg-[rgba(245,158,66,0.8)] rounded-[30px] p-8 shadow-xl border-8 border-[rgba(204,122,41,0.8)] relative m-12">
      {/* GameBoy Top Section with Power Light */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-[rgba(204,122,41,0.8)] font-bold text-xl tracking-wider font-pixel">GAME BOY</div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-inner animate-pulse"></div>
          <span className="text-[rgba(204,122,41,0.8)] text-xs font-pixel">POWER</span>
        </div>
      </div>

      {/* Main Screen Area */}
      <div className="bg-[rgba(249,179,39,0.8)] rounded-lg p-4 border-4 border-[rgba(204,122,41,0.8)] shadow-inner mb-6">
        <h2 className="text-[rgba(204,122,41,0.8)] text-2xl font-bold mb-4 text-center font-pixel">TOP BLOGS</h2>

        <div className="space-y-3">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`p-3 rounded-lg ${
                index === 0
                  ? "bg-[rgba(179,115,15,0.8)] text-[rgba(249,179,39,0.8)]"
                  : "bg-[rgba(245,158,66,0.8)] text-[rgba(204,122,41,0.8)]"
              }`}
            >
              <h3 className="text-lg font-bold mb-1 font-pixel truncate">{blog.title}</h3>
              <p className="mb-2 text-xs font-pixel">Author: {blog.author}</p>
              <Link to={`/blog/${blog.id}`}>
                <button className="bg-[rgba(154,44,3,0.8)] text-[rgba(249,179,39,0.8)] px-3 py-1 rounded text-xs hover:bg-[rgba(138,23,6,0.8)] font-pixel">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-4 font-pixel text-xs text-[rgba(204,122,41,0.8)]">
          <div className="flex space-x-2">
            <span className="bg-[rgba(204,122,41,0.8)] text-[rgba(249,179,39,0.8)] px-2 py-1">1</span>
            <span>2 3 4 ... {Math.ceil(blogs.length / 4)}</span>
          </div>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      {/* GameBoy Controls */}
      <div className="flex justify-between items-end">
        {/* D-Pad */}
        <div className="w-20 h-20 relative">
          <div className="absolute inset-0 bg-[rgba(204,122,41,0.8)] rounded-full"></div> {/* Updated color */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 bg-[#585858] rounded-sm"></div>
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-6 h-6 bg-[#585858] rounded-sm"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#585858] rounded-sm"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#585858] rounded-sm"></div>
          <div className="absolute inset-0 m-auto w-6 h-6 bg-[#585858] rounded-full"></div>
        </div>

        {/* A/B Buttons */}
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-[rgba(154,44,3,0.8)] rounded-full shadow-md flex items-center justify-center">
            <span className="font-pixel text-white font-bold">B</span>
          </div>
          <div className="w-12 h-12 bg-[rgba(154,44,3,0.8)] rounded-full shadow-md flex items-center justify-center">
            <span className="font-pixel text-white font-bold">A</span>
          </div>
        </div>
      </div>

      {/* Start/Select Buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6">
        <div className="w-12 h-4 bg-[#585858] rounded-full transform rotate-[-20deg]"></div>
        <div className="w-12 h-4 bg-[#585858] rounded-full transform rotate-[-20deg]"></div>
      </div>

      {/* Nintendo Logo */}
      <div className="absolute bottom-1 right-4 text-[rgba(204,122,41,0.8)] text-xs font-bold font-pixel">Nintendo®</div>
    </div>
  )
}

export default GameBoyRelevantBlogs
