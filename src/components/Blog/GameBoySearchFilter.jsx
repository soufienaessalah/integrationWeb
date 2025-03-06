import { useState, useEffect } from "react";
import { Search, RotateCw, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from React Router for navigation

export default function GameBoySearchFilter() {
  const initialBlogs = [
    {
      id: 1,
      title: "GameBoy History",
      subject: "Console",
      date: "2025-03-01",
      console: "GameBoy",
      author: "Youssef Ben Arous",
      content: "The GameBoy was released in 1989 and changed the world of portable gaming. It was the first true handheld console with a large game library. Click 'Read More' to learn more.",
    },
    {
      id: 2,
      title: "Top GameBoy Games",
      subject: "Article",
      date: "2025-03-02",
      console: "GameBoy Color",
      author: "Maria Johnson",
      content: "The GameBoy Color expanded the legacy of its predecessor, introducing color graphics. Here are some of the top games for the GameBoy Color. Click 'Read More' for the full list.",
    },
    {
      id: 3,
      title: "GameBoy Design Evolution",
      subject: "Console",
      date: "2025-03-03",
      console: "GameBoy Advance",
      author: "Alex Smith",
      content: "Over the years, the GameBoy has gone through multiple design changes, each improving the overall user experience. Click 'Read More' to explore its evolution.",
    },
    {
      id: 4,
      title: "GameBoy vs. NES",
      subject: "Article",
      date: "2025-03-04",
      console: "GameBoy",
      author: "Sophie Lee",
      content: "GameBoy and NES are two of Nintendo's most iconic consoles. How do they compare in terms of design, games, and performance? Click 'Read More' for the detailed comparison.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("title");
  const [filteredBlogs, setFilteredBlogs] = useState([...initialBlogs]);
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(0);

  useEffect(() => {
    sortAndFilterBlogs();
  }, [searchTerm, sortOption]);

  const sortAndFilterBlogs = () => {
    let sortedBlogs = [...initialBlogs];

    if (searchTerm) {
      sortedBlogs = sortedBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    sortedBlogs.sort((a, b) => {
      if (sortOption === "date") {
        return new Date(a.date) - new Date(b.date);
      } else {
        return a[sortOption].localeCompare(b[sortOption]);
      }
    });

    setFilteredBlogs(sortedBlogs);
    setSelectedBlogIndex(0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleInit = () => {
    setSearchTerm("");
    setSortOption("title");
    setFilteredBlogs([...initialBlogs]);
  };

  const navigateBlog = (direction) => {
    if (filteredBlogs.length === 0) return;

    if (direction === "up") {
      setSelectedBlogIndex((prev) => (prev > 0 ? prev - 1 : filteredBlogs.length - 1));
    } else if (direction === "down") {
      setSelectedBlogIndex((prev) => (prev < filteredBlogs.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="w-full">
      <div className="bg-brick-pattern p-6 pb-16 shadow-xl border-8 border-[#0f380f] relative">
        <div className="flex justify-between items-center mb-4">
          <div className="text-[#0f380f] font-bold text-xl tracking-wider font-pixel">GAME BOY</div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-inner animate-pulse"></div>
            <span className="text-[#0f380f] text-xs font-pixel">POWER</span>
          </div>
        </div>

        <div className="rounded-lg p-4 border-4 border-[#0f380f] shadow-inner mb-6">
          <h2 className="text-[#0f380f] text-3xl font-bold mb-4 text-center font-pixel">BLOG FINDER</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3 bg-yellow-300 p-3 rounded-lg border-2 border-[#0f380f]">
              <form onSubmit={handleSearch} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 p-2 rounded border-2 border-[#0f380f]">
                  <Search className="w-4 h-4 text-[#0f380f]" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="w-full bg-transparent border-none outline-none text-[#0f380f] font-pixel placeholder:text-[#306230]"
                  />
                  <button
                    type="button"
                    onClick={handleInit}
                    className="bg-[#0f380f] text-[#e8d6d2] p-1 rounded font-pixel flex items-center"
                  >
                    <RotateCw className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-2">
                  <h3 className="font-pixel text-[#0f380f] text-xl mb-2">SORT BY:</h3>
                  <div className="grid grid-cols-3 gap-1 mx-auto max-w-[150px]">
                    <div className="col-start-2">
                      <button
                        onClick={() => handleSortChange("title")}
                        className={`w-full h-10 flex items-center justify-center rounded-t-lg border-2 border-[#0f380f] ${
                          sortOption === "title" ? "bg-[#0f380f] text-[#e8d6d2]" : "bg-[#e8d6d2] text-[#0f380f]"
                        } font-pixel`}
                      >
                        <ChevronUp className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="col-start-1">
                      <button
                        onClick={() => handleSortChange("subject")}
                        className={`w-full h-10 flex items-center justify-center rounded-l-lg border-2 border-[#0f380f] ${
                          sortOption === "subject" ? "bg-[#0f380f] text-[#e8d6d2]" : "bg-[#e8d6d2] text-[#0f380f]"
                        } font-pixel`}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="col-start-2">
                      <div className="w-full h-10 flex items-center justify-center bg-[#306230] rounded border-2 border-[#0f380f] font-pixel text-[#e8d6d2]">
                        SORT
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleSortChange("console")}
                        className={`w-full h-10 flex items-center justify-center rounded-r-lg border-2 border-[#0f380f] ${
                          sortOption === "console" ? "bg-[#0f380f] text-[#e8d6d2]" : "bg-[#e8d6d2] text-[#0f380f]"
                        } font-pixel`}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="col-start-2">
                      <button
                        onClick={() => handleSortChange("date")}
                        className={`w-full h-10 flex items-center justify-center rounded-b-lg border-2 border-[#0f380f] ${
                          sortOption === "date" ? "bg-[#0f380f] text-[#e8d6d2]" : "bg-[#e8d6d2] text-[#0f380f]"
                        } font-pixel`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      onClick={() => handleSortChange("author")}
                      className={`px-4 py-2 rounded-full border-2 border-[#0f380f] ${
                        sortOption === "author" ? "bg-[#0f380f] text-[#e8d6d2]" : "bg-[#e8d6d2] text-[#0f380f]"
                      } font-pixel`}
                    >
                      AUTHOR
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="w-full md:w-2/3 p-3 rounded-lg border-2 border-[#0f380f]">
              <div className="bg-[#0f380f] p-1 rounded mb-2">
                <div className="flex justify-between text-[#e8d6d2] font-pixel text-xs">
                  <span>BLOGS: {filteredBlogs.length}</span>
                  <span>SORT: {sortOption.toUpperCase()}</span>
                </div>
              </div>

              <div className="relative">
                {filteredBlogs.length > 0 && (
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-10">
                    <button onClick={() => navigateBlog("up")} className="bg-[#0f380f] text-[#e8d6d2] p-1 rounded-full">
                      <ChevronUp className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigateBlog("down")}
                      className="bg-[#0f380f] text-[#e8d6d2] p-1 rounded-full"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                )}

                <ul className="space-y-2">
                  {filteredBlogs.map((blog, index) => (
                    <li
                      key={blog.id}
                      className={`p-4 rounded-lg border-2 border-[#0f380f] ${
                        index === selectedBlogIndex ? "bg-[#0f380f] text-[#e8d6d2]" : "bg-[#e8d6d2] text-[#0f380f]"
                      }`}
                    >
                      <div>
                        <h3 className="font-bold text-xl font-pixel">{blog.title}</h3>
                        <p className="text-sm">{blog.author} | {blog.date}</p>
                        <p className="mt-2">{blog.content.split(' ').slice(0, 10).join(' ')}...</p>
                        <Link
                          to={`/blog/${blog.id}`} // Link to the detailed blog page
                          className="inline-block mt-2 text-[#306230] bg-[#e8d6d2] py-1 px-4 rounded-full font-pixel hover:bg-[#0f380f] hover:text-[#e8d6d2]"
                        >
                          Read More
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
