import { Card } from "@/components/ui/card";
import { Store, Image, MessageSquare, Code, Globe, Zap } from "lucide-react";

export const Home = () => {
  const quickLinks = [
    {
      title: "Gemini Chat",
      description: "Talk with AI - completely free",
      icon: MessageSquare,
      url: "dotly://chat",
      color: "bg-blue-500"
    },
    {
      title: "Image Generator",
      description: "Generate images with Gemini - free",
      icon: Image,
      url: "dotly://imagegen",
      color: "bg-green-500"
    },
    {
      title: "Web Addons",
      description: "Themes, wallpapers, and extensions",
      icon: Store,
      url: "dotly://webaddons",
      color: "bg-purple-500"
    },
    {
      title: "Local Ports",
      description: "Run localhost:8081 and more",
      icon: Code,
      url: "dotly://localhost",
      color: "bg-orange-500"
    },
    {
      title: "XFrame Bypass",
      description: "Access any site without restrictions",
      icon: Globe,
      url: "dotly://xframe",
      color: "bg-red-500"
    },
    {
      title: "ExeCode:null",
      description: "Execute code directly in browser",
      icon: Zap,
      url: "dotly://execode",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-subtle overflow-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-primary">
          Dotly Browser
        </h1>
        <p className="text-lg text-muted-foreground">
          Modern, secure, and infinitely customizable - with AI built in
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mb-8">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Card
              key={link.title}
              className="p-6 bg-card border border-border hover:border-primary cursor-pointer transition-smooth hover:shadow-lg hover:scale-[1.02] group"
              onClick={() => window.location.href = link.url}
            >
              <div className={`w-14 h-14 rounded-full ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce shadow-md`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{link.title}</h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          All features are completely free • No sign-up required
        </p>
      </div>
    </div>
  );
};
