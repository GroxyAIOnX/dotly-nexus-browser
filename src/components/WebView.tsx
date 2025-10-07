import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { WebAddons } from "./pages/WebAddons";
import { GeminiChat } from "./pages/GeminiChat";
import { ImageGenerator } from "./pages/ImageGenerator";
import { LocalhostRunner } from "./pages/LocalhostRunner";
import { XFrameBypass } from "./pages/XFrameBypass";
import { ExeCode } from "./pages/ExeCode";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface WebViewProps {
  url: string;
}

export const WebView = ({ url }: WebViewProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url.startsWith("dotly://")) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [url]);

  // Handle custom protocol routes
  if (url.startsWith("dotly://")) {
    const route = url.replace("dotly://", "");
    
    switch (route) {
      case "home":
        return <Home />;
      case "webaddons":
        return <WebAddons />;
      case "chat":
        return <GeminiChat />;
      case "imagegen":
        return <ImageGenerator />;
      case "localhost":
        return <LocalhostRunner />;
      case "xframe":
        return <XFrameBypass />;
      case "execode":
        return <ExeCode />;
      default:
        return <Home />;
    }
  }

  // Render external URLs in iframe with XFrame bypass attempt
  return (
    <div className="relative w-full h-full overflow-hidden bg-card border border-border rounded-lg shadow-md">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}
      <iframe
        src={url}
        className="w-full h-full border-0 rounded-lg"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        title="Browser Content"
      />
    </div>
  );
};
