import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, Code, Palette, Zap } from "lucide-react";

export const Home = () => {
  const quickLinks = [
    {
      title: "Web Addons",
      description: "Themes, wallpapers, and extensions",
      icon: Store,
      url: "dotly://webaddons",
      gradient: "gradient-primary"
    },
    {
      title: "ExeCode:null",
      description: "Execute code directly in browser",
      icon: Code,
      url: "dotly://execode",
      gradient: "gradient-accent"
    },
    {
      title: "Theme Creator",
      description: "Create custom themes",
      icon: Palette,
      url: "dotly://creator",
      gradient: "gradient-primary"
    },
    {
      title: "XFrame Bypass",
      description: "Access protected sites",
      icon: Zap,
      url: "dotly://xframe",
      gradient: "gradient-accent"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50 animate-pulse" />
      
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-6xl font-bold mb-4 gradient-text">
          Dotly Browser
        </h1>
        <p className="text-xl text-muted-foreground">
          Modern, secure, and infinitely customizable
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative z-10">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Card
              key={link.title}
              className="p-6 bg-card border-border hover:border-primary cursor-pointer transition-smooth hover:shadow-glow hover:scale-105 group"
              onClick={() => window.location.href = link.url}
            >
              <div className={`w-12 h-12 rounded-lg ${link.gradient} flex items-center justify-center mb-4 glow-effect group-hover:scale-110 transition-bounce`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
              <p className="text-muted-foreground">{link.description}</p>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 text-center relative z-10">
        <p className="text-sm text-muted-foreground">
          Press <kbd className="px-2 py-1 bg-secondary rounded">Ctrl + T</kbd> for new tab
        </p>
      </div>
    </div>
  );
};
