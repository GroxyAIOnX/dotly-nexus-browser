import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCw, Home, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { BrowserTab } from "./BrowserTab";
import { WebView } from "./WebView";

interface Tab {
  id: string;
  url: string;
  title: string;
}

export const BrowserFrame = () => {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: "1", url: "dotly://home", title: "New Tab" }
  ]);
  const [activeTabId, setActiveTabId] = useState("1");
  const [urlInput, setUrlInput] = useState("dotly://home");

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const handleNavigate = (url?: string) => {
    const targetUrl = url || urlInput;
    if (!activeTab) return;

    const updatedTabs = tabs.map(tab =>
      tab.id === activeTabId
        ? { ...tab, url: targetUrl, title: targetUrl.includes("dotly://") ? targetUrl.split("//")[1] : "Web Page" }
        : tab
    );
    setTabs(updatedTabs);
    setUrlInput(targetUrl);
  };

  const addTab = () => {
    const newTab: Tab = {
      id: Date.now().toString(),
      url: "dotly://home",
      title: "New Tab"
    };
    setTabs([...tabs, newTab]);
    setActiveTabId(newTab.id);
    setUrlInput(newTab.url);
  };

  const closeTab = (tabId: string) => {
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    if (newTabs.length === 0) {
      addTab();
      return;
    }
    setTabs(newTabs);
    if (activeTabId === tabId) {
      setActiveTabId(newTabs[0].id);
      setUrlInput(newTabs[0].url);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Tab Bar */}
      <div className="flex items-center gap-1 px-2 pt-2 bg-card/50 border-b border-border">
        <div className="flex-1 flex items-center gap-1 overflow-x-auto">
          {tabs.map(tab => (
            <BrowserTab
              key={tab.id}
              title={tab.title}
              active={tab.id === activeTabId}
              onClick={() => {
                setActiveTabId(tab.id);
                setUrlInput(tab.url);
              }}
              onClose={() => closeTab(tab.id)}
            />
          ))}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={addTab}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Navigation Bar */}
      <Card className="m-4 mb-0 p-3 flex items-center gap-2 bg-card border-border shadow-card">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleNavigate(activeTab?.url)}>
            <RotateCw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleNavigate("dotly://home")}>
            <Home className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 relative">
          <Input
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNavigate()}
            placeholder="Search or enter URL..."
            className="w-full bg-secondary border-border focus:border-primary transition-smooth"
          />
        </div>
      </Card>

      {/* Content Area */}
      <div className="flex-1 m-4 mt-2">
        <WebView url={activeTab?.url || "dotly://home"} />
      </div>
    </div>
  );
};
