import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Blogs() {
  const blogs = [
    {
      title: "The Future of Vietnamese NLP",
      excerpt: "Exploring the latest advancements in Vietnamese natural language processing and what's on the horizon.",
      date: "March 15, 2023",
      author: "Dr. Nguyen Van A",
      readTime: "5 min read",
      slug: "future-vietnamese-nlp",
    },
    {
      title: "Building Multilingual AI Systems",
      excerpt:
        "Challenges and solutions in developing AI systems that work across multiple languages including Vietnamese.",
      date: "February 22, 2023",
      author: "Tran Thi B",
      readTime: "8 min read",
      slug: "multilingual-ai-systems",
    },
    {
      title: "Computer Vision for Cultural Heritage Preservation",
      excerpt: "How we're using computer vision to help preserve and document Vietnamese cultural artifacts.",
      date: "January 10, 2023",
      author: "Le Van C",
      readTime: "6 min read",
      slug: "computer-vision-cultural-heritage",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Blog</h1>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-600 text-center">
          Insights, updates, and deep dives into our research and the broader AI landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Card key={index} className="flex flex-col h-full">
            <div className="relative w-full h-48">
              <Image
                src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(blog.title)}`}
                alt={blog.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
              <CardDescription>
                {blog.date} • {blog.readTime}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 line-clamp-3">{blog.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/blogs/${blog.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

