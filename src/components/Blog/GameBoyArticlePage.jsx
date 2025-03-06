"use client"
import { useParams, Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin as LinkedInIcon, Mail, User } from "lucide-react"

const GameBoyArticlePage = ({ blogs }) => {
  const { id } = useParams()
  const blog = blogs.find((b) => b.id === Number.parseInt(id))

  // Sample comments from users (you can expand or fetch these dynamically)
  const comments = [
    { id: 1, user: "Gamer123", text: "Great article about GameBoy history!", date: "2025-03-05" },
    { id: 2, user: "RetroFan", text: "I loved the comparison with NES!", date: "2025-03-06" },
  ]

  if (!blog) {
    return <div className="text-center font-pixel text-2xl mt-8">Blog not found</div>
  }

  return (
    <div className="w-full max-w-full mr-4 pl-6"> {/* Full width, no margins */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4"> {/* Adjusted to 4 columns for narrower sidebar */}
        {/* Main Content (Left) with Comments */}
        <div className="md:col-span-3 bg-[#b9b9b9] rounded-lg p-6 border-4 border-[#1d428a] shadow-inner"> {/* Changed to blue-gray */}
          <h1 className="text-3xl font-bold mb-4 font-pixel text-[#1d428a]">{blog.title}</h1>
          <p className="mb-4 font-pixel text-sm text-[#2c5282]">Author: {blog.author}</p>
          <div className="prose prose-sm max-w-none font-pixel text-[#1d428a]">
            {/* This is where you'd put the full article content */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            </p>
            <p>
              Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut
              dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor
              orci.
            </p>
            {/* Add more paragraphs as needed */}
          </div>

          {/* Comments Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4 font-pixel text-[#1d428a]">Comments</h2>
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-[#63b3ed] p-4 rounded-lg border-2 border-[#1d428a] shadow-inner">
                  <p className="font-pixel text-sm text-[#1d428a]">{comment.text}</p>
                  <p className="font-pixel text-xs text-[#2c5282] mt-2">
                    - {comment.user}, {comment.date}
                  </p>
                </div>
              ))}
            </div>
            {/* Add a form for new comments if desired */}
            <form className="mt-4">
              <textarea
                placeholder="Add a comment..."
                className="w-full p-2 rounded font-pixel text-sm bg-[#e6f0fa] border-2 border-[#1d428a] focus:outline-none focus:border-[#2c5282]"
                rows="3"
              />
              <button
                type="submit"
                className="mt-2 bg-[#1d428a] text-[#4a90e2] p-2 rounded font-pixel text-sm hover:bg-[#153e75]"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar (Right) - Narrower and No Margins */}
        <div className="md:col-start-4 md:col-end-5 bg-[#3e3e3e] rounded-lg p-4 border-4 border-[#1d428a] shadow-inner"> {/* Changed to darker blue-gray, narrower padding */}
          {/* More to explore */}
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 font-pixel text-[#1d428a]">More to explore:</h2>
            <ul className="space-y-2">
              {blogs
                .filter((b) => b.id !== blog.id)
                .slice(0, 3)
                .map((relatedBlog) => (
                  <li key={relatedBlog.id} className="font-pixel text-sm">
                    <Link to={`/blog/${relatedBlog.id}`} className="text-[#2c5282] hover:text-[#1d428a]">
                      {relatedBlog.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Share */}
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 font-pixel text-[#1d428a]">SHARE:</h2>
            <div className="flex space-x-3">
              <Facebook className="text-[#1d428a] hover:text-[#2c5282] cursor-pointer" />
              <Twitter className="text-[#1d428a] hover:text-[#2c5282] cursor-pointer" />
              <LinkedInIcon className="text-[#1d428a] hover:text-[#2c5282] cursor-pointer" />
              <Mail className="text-[#1d428a] hover:text-[#2c5282] cursor-pointer" />
            </div>
          </div>

          {/* Realisator */}
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 font-pixel text-[#1d428a]">Realisator:</h2>
            <div className="flex items-center space-x-2">
              <User className="text-[#1d428a]" />
              <span className="font-pixel text-sm text-[#2c5282]">{blog.author}</span>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h2 className="text-xl font-bold mb-2 font-pixel text-[#1d428a]">SUBSCRIBE TO OUR WEB SITE:</h2>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded font-pixel text-sm bg-[#d1e8ff] border-2 border-[#1d428a] focus:outline-none focus:border-[#2c5282]"
              />
              <button
                type="submit"
                className="w-full bg-[#1d428a] text-[#4a90e2] p-2 rounded font-pixel text-sm hover:bg-[#153e75]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameBoyArticlePage   