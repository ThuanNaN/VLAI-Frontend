"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"

export default function Demo() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("translation")

  const handleSubmit = () => {
    if (!inputText.trim()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (activeTab === "translation") {
        setOutputText(`Translated text: ${inputText} (This is a demo)`)
      } else if (activeTab === "summarization") {
        setOutputText(`Summary: This is a summary of "${inputText}" (This is a demo)`)
      } else {
        setOutputText(`Analysis: Sentiment is positive (This is a demo)`)
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Demo</h1>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-600 text-center">Try out our AI models for Vietnamese language processing.</p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Vietnamese NLP Demo</CardTitle>
          <CardDescription>Enter Vietnamese text to see our models in action</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="translation" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="translation">Translation</TabsTrigger>
              <TabsTrigger value="summarization">Summarization</TabsTrigger>
              <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
            </TabsList>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-1">
                  Input Text
                </label>
                <Textarea
                  id="input"
                  placeholder="Enter Vietnamese text here..."
                  className="min-h-32"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>

              {outputText && (
                <div>
                  <label htmlFor="output" className="block text-sm font-medium text-gray-700 mb-1">
                    Output
                  </label>
                  <div id="output" className="p-4 bg-gray-50 rounded-md min-h-32 border border-gray-200">
                    {outputText}
                  </div>
                </div>
              )}
            </div>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} disabled={isLoading || !inputText.trim()} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Process Text"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
