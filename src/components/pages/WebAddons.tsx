import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Download, Star, Palette, Image, Sparkles, Box, Layers } from "lucide-react";
import { toast } from "sonner";

interface Addon {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  downloads: string;
  preview?: string;
}

export const WebAddons = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const addons: Addon[] = [
    {
      id: "1",
      name: "Midnight Purple",
      description: "Dark theme with purple accents",
      category: "themes",
      rating: 4.8,
      downloads: "10K+"
    },
    {
      id: "2",
      name: "Neon Sunset",
      description: "Vibrant gradient wallpaper collection",
      category: "wallpapers",
      rating: 4.9,
      downloads: "25K+"
    },
    {
      id: "3",
      name: "XFrame Pro",
      description: "Advanced XFrame bypass integration",
      category: "extensions",
      rating: 5.0,
      downloads: "50K+"
    },
    {
      id: "4",
      name: "Minimal Glass",
      description: "Clean glassmorphic theme",
      category: "themes",
      rating: 4.7,
      downloads: "15K+"
    },
    {
      id: "5",
      name: "Cosmic Search",
      description: "Beautiful space-themed search bar",
      category: "searchbars",
      rating: 4.6,
      downloads: "8K+"
    },
    {
      id: "6",
      name: "Lucide Pro",
      description: "Extended icon pack with 1000+ icons",
      category: "icons",
      rating: 4.9,
      downloads: "30K+"
    },
    {
      id: "7",
      name: "Gradient Master",
      description: "Premium gradient collection",
      category: "gradients",
      rating: 4.8,
      downloads: "20K+"
    },
    {
      id: "8",
      name: "Code Injector",
      description: "Advanced code execution tools",
      category: "extensions",
      rating: 4.7,
      downloads: "12K+"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "themes":
        return Palette;
      case "wallpapers":
        return Image;
      case "extensions":
        return Box;
      case "searchbars":
        return Search;
      case "icons":
        return Sparkles;
      case "gradients":
        return Layers;
      default:
        return Box;
    }
  };

  const filteredAddons = addons.filter(addon =>
    addon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    addon.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInstall = (addon: Addon) => {
    toast.success(`Installing ${addon.name}...`, {
      description: "Your addon will be ready in a moment"
    });
  };

  return (
    <div className="w-full h-full overflow-y-auto p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Web Addons Store</h1>
          <p className="text-muted-foreground">
            Customize your Dotly Browser with themes, extensions, and more
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search addons..."
            className="pl-10 bg-secondary border-border"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 bg-card">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="themes">Themes</TabsTrigger>
            <TabsTrigger value="wallpapers">Wallpapers</TabsTrigger>
            <TabsTrigger value="extensions">Extensions</TabsTrigger>
            <TabsTrigger value="searchbars">Search Bars</TabsTrigger>
            <TabsTrigger value="icons">Icons</TabsTrigger>
            <TabsTrigger value="gradients">Gradients</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAddons.map((addon) => {
                const Icon = getCategoryIcon(addon.category);
                return (
                  <Card
                    key={addon.id}
                    className="p-6 bg-card border-border hover:border-primary transition-smooth hover:shadow-glow group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center glow-effect">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span>{addon.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {addon.downloads}
                      </span>
                      <Button
                        size="sm"
                        className="gradient-primary glow-effect"
                        onClick={() => handleInstall(addon)}
                      >
                        Install
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {["themes", "wallpapers", "extensions", "searchbars", "icons", "gradients"].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAddons
                  .filter((addon) => addon.category === category)
                  .map((addon) => {
                    const Icon = getCategoryIcon(addon.category);
                    return (
                      <Card
                        key={addon.id}
                        className="p-6 bg-card border-border hover:border-primary transition-smooth hover:shadow-glow group"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center glow-effect">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span>{addon.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {addon.downloads}
                          </span>
                          <Button
                            size="sm"
                            className="gradient-primary glow-effect"
                            onClick={() => handleInstall(addon)}
                          >
                            Install
                          </Button>
                        </div>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
