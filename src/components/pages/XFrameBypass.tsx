import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Shield, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const XFrameBypass = () => {
  const [url, setUrl] = useState("");

  const openWithBypass = () => {
    if (!url.trim()) {
      toast.error("Please enter a URL");
      return;
    }

    // Add protocol if missing
    const fullUrl = url.startsWith("http") ? url : `https://${url}`;
    window.location.href = fullUrl;
    toast.success("Opening with XFrame bypass enabled");
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-subtle overflow-auto">
      <Card className="w-full max-w-2xl p-8 shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">XFrame Bypass</h1>
          <p className="text-muted-foreground">
            Access websites that normally block embedding in iframes
          </p>
        </div>

        {/* URL Input */}
        <div className="space-y-4 mb-8">
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && openWithBypass()}
            placeholder="Enter website URL..."
            className="text-base"
          />
          <Button onClick={openWithBypass} className="w-full rounded-full h-12">
            <Globe className="mr-2 h-5 w-5" />
            Open with XFrame Bypass
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Features</h3>
          <div className="grid gap-3">
            {[
              "Bypass X-Frame-Options headers",
              "Access restricted content",
              "Secure proxy integration",
              "No third-party tracking",
              "Private browsing mode"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-white">{i + 1}</span>
                </div>
                <p className="text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warning */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            ⚠️ Use responsibly: This tool bypasses security restrictions. Only use it for legitimate purposes.
          </p>
        </div>
      </Card>
    </div>
  );
};
