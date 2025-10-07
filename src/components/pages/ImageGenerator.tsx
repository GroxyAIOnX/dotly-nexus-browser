import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Sparkles, Download } from "lucide-react";
import { toast } from "sonner";

export const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setLoading(true);
    
    // Simulate image generation (in real implementation, this would call Gemini API)
    setTimeout(() => {
      toast.success("Image generated!");
      setGeneratedImage("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-subtle overflow-auto">
      <Card className="w-full max-w-3xl p-8 shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Gemini Image Generator</h1>
          <p className="text-muted-foreground">
            Generate stunning images with AI - completely free, powered by Google
          </p>
        </div>

        {/* Prompt Input */}
        <div className="space-y-4 mb-8">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && generateImage()}
            placeholder="Describe the image you want to generate..."
            className="text-base"
            disabled={loading}
          />
          <Button
            onClick={generateImage}
            disabled={loading}
            className="w-full rounded-full h-12"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Image
              </>
            )}
          </Button>
        </div>

        {/* Generated Image */}
        {generatedImage && (
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-border shadow-lg">
              <img
                src={generatedImage}
                alt="Generated"
                className="w-full h-auto"
              />
            </div>
            <Button
              variant="outline"
              className="w-full rounded-full"
              onClick={() => toast.success("Download feature coming soon!")}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Image
            </Button>
          </div>
        )}

        {/* Info */}
        <div className="mt-8 p-4 bg-secondary rounded-lg">
          <p className="text-sm text-center text-muted-foreground">
            ✨ Powered by Google Gemini • 🆓 Completely Free • ⚡ No Limits
          </p>
        </div>
      </Card>
    </div>
  );
};
