import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg.png"
            alt="Vietnamese landscape with traditional pagoda and modern buildings"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-md">
              Welcome to the <span className="text-primary-foreground">VLAI Team</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">
              Vision and Language in AI - Advancing AI research with a focus on Vietnamese language
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-800 hover:bg-white/90">
                Explore Our Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Try Our Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-800">About Us</h2>
          <p className="text-gray-600 mb-4 text-center">
            <span className="font-medium">VLAI Team</span> (Vision and Language in AI), an AI research group dedicated
            to investigating and building innovative AI applications. We focus on the Vietnamese language and other
            Vietnam-related challenges, while also contributing to the global AI community.
          </p>
          <p className="text-gray-600 text-center">
            Our goal is to push the boundaries of artificial intelligence by creating cutting-edge solutions that
            positively impact society.
          </p>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-gray-800">Our Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Natural Language Processing",
              description: "Developing models for Vietnamese language understanding and generation.",
            },
            {
              title: "Computer Vision",
              description: "Creating systems that can interpret and analyze visual information.",
            },
            {
              title: "Multimodal Learning",
              description: "Combining vision and language for more comprehensive AI applications.",
            },
          ].map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-3 text-gray-800">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl p-6 md:p-10 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Join Our Community</h2>
          <p className="text-gray-600 mb-6">Interested in our research or want to collaborate? Get in touch with us!</p>
          <Button className="px-6 py-2">Contact Us</Button>
        </div>
      </section>
    </div>
  )
}

