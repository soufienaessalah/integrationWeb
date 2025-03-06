"use client"
import { useParams } from "react-router-dom"
import GameBoyBlogPost from "./GameBoyBlogPost"

export default function Blog() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center font-pixel">Blog Post</h1>
        <GameBoyBlogPost id={id} />
      </main>
    </div>
  )
}