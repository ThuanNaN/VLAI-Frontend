import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Nguyen Van A",
      role: "Principal Investigator",
      bio: "Dr. Nguyen specializes in natural language processing with a focus on low-resource languages.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Tran Thi B",
      role: "Senior Researcher",
      bio: "Tran's research focuses on computer vision and multimodal learning for Vietnamese cultural contexts.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Le Van C",
      role: "Research Engineer",
      bio: "Le develops and optimizes AI models for deployment in real-world applications.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section with Background */}
      <div className="relative rounded-xl overflow-hidden mb-12 h-64 md:h-80">
        <Image
          src="/images/bg.png"
          alt="Vietnamese landscape with traditional pagoda and modern buildings"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">About Us</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-600 mb-6 text-center">
          <span className="font-medium">VLAI Team</span> (Vision and Language in AI) is an AI research group dedicated
          to investigating and building innovative AI applications. We focus on the Vietnamese language and other
          Vietnam-related challenges, while also contributing to the global AI community.
        </p>
        <p className="text-lg text-gray-600 text-center">
          Our goal is to push the boundaries of artificial intelligence by creating cutting-edge solutions that
          positively impact society.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <div className="relative w-full h-48">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Mission</h2>
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <p className="text-gray-600 mb-4">
            At VLAI, our mission is to advance the field of artificial intelligence with a specific focus on addressing
            challenges related to the Vietnamese language and cultural context. We believe that AI should be accessible
            and beneficial to all communities, including those that speak languages with fewer digital resources.
          </p>
          <p className="text-gray-600">
            Through our research and applications, we aim to bridge the technological gap and ensure that Vietnamese
            speakers can benefit from the latest advancements in AI technology. We are committed to open science and
            collaboration, sharing our findings with the global research community while developing practical solutions
            that can make a positive impact on society.
          </p>
        </div>
      </div>
    </div>
  )
}

