import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Publications() {
  const publications = [
    {
      title: "Advancing Vietnamese Language Processing with Transformer Models",
      authors: "Nguyen Van A, Tran Thi B, Le Van C",
      conference: "ACL 2023",
      abstract:
        "This paper presents a novel approach to Vietnamese language processing using transformer-based models...",
      link: "#",
    },
    {
      title: "Cross-lingual Transfer Learning for Low-resource Languages",
      authors: "Pham Van D, Nguyen Thi E",
      conference: "EMNLP 2022",
      abstract:
        "We propose a new method for cross-lingual transfer learning that significantly improves performance on low-resource languages...",
      link: "#",
    },
    {
      title: "Visual Question Answering for Vietnamese Cultural Heritage",
      authors: "Tran Van F, Le Thi G",
      conference: "CVPR 2023",
      abstract:
        "This work introduces a multimodal dataset and model for visual question answering focused on Vietnamese cultural heritage...",
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Publications</h1>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-600 text-center">
          Our research team publishes in top-tier conferences and journals in the fields of artificial intelligence,
          natural language processing, and computer vision.
        </p>
      </div>

      <div className="grid gap-6">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pub.title}</CardTitle>
              <CardDescription>
                {pub.authors} - {pub.conference}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{pub.abstract}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                  Read Paper
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

