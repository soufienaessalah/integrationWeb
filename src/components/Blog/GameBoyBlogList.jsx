import React from 'react'
import GameBoyRelevantBlogs from './GameBoyRelevantBlogs'
import GameBoySearchFilter from './GameBoySearchFilter'

export default function GameBoyBlogList() {
  const blogs = [
    { id: 1, title: "GameBoy History", author: "Youssef Ben Arous" },
    { id: 2, title: "Top GameBoy Games", author: "Maria Johnson" },
    { id: 3, title: "GameBoy Design Evolution", author: "Alex Smith" },
    { id: 4, title: "GameBoy vs. NES", author: "Sophie Lee" },
    { id: 5, title: "The Rise of Pokemon", author: "Ash Ketchum" },
    { id: 6, title: "GameBoy Camera Revolution", author: "Snap Master" },
  ]

  return (
    <div className="w-full mx-auto">
      {/* Modify grid layout to stack vertically */}
      <div className="grid grid-cols-1 gap-8">
        <GameBoyRelevantBlogs blogs={blogs.slice(0, 4)} />
        <GameBoySearchFilter blogs={blogs} />
      </div>
    </div>
  )
}
