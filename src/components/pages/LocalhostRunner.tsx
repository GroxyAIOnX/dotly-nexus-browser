import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Server, Play } from "lucide-react";
import { toast } from "sonner";

export const LocalhostRunner = () => {
  const [port, setPort] = useState("8081");

  const openLocalhost = () => {
    if (!port.trim() || isNaN(Number(port))) {
      toast.error("Please enter a valid port number");
      return;
    }

    const url = `http://localhost:${port}`;
    window.location.href = url;
    toast.success(`Opening localhost:${port}`);
  };

  const quickPorts = [
    { port: "3000", name: "React/Node" },
    { port: "8080", name: "Common Dev" },
    { port: "8081", name: "Alt Dev" },
    { port: "5173", name: "Vite" },
    { port: "4200", name: "Angular" },
    { port: "8000", name: "Django/Python" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-subtle overflow-auto">
      <Card className="w-full max-w-2xl p-8 shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Server className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Local Port Runner</h1>
          <p className="text-muted-foreground">
            Access your local development servers directly in Dotly Browser
          </p>
        </div>

        {/* Custom Port */}
        <div className="space-y-4 mb-8">
          <div className="flex gap-2">
            <Input
              value={port}
              onChange={(e) => setPort(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && openLocalhost()}
              placeholder="Enter port number..."
              className="flex-1"
              type="number"
            />
            <Button onClick={openLocalhost} className="rounded-full px-6">
              <Play className="mr-2 h-4 w-4" />
              Open
            </Button>
          </div>
        </div>

        {/* Quick Access */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickPorts.map((item) => (
              <Button
                key={item.port}
                variant="outline"
                className="justify-start rounded-full"
                onClick={() => {
                  setPort(item.port);
                  window.location.href = `http://localhost:${item.port}`;
                }}
              >
                <Server className="mr-2 h-4 w-4" />
                <div className="text-left">
                  <div className="font-semibold">:{item.port}</div>
                  <div className="text-xs text-muted-foreground">{item.name}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 p-4 bg-secondary rounded-lg">
          <p className="text-sm text-center text-muted-foreground">
            💡 Run your dev servers on any port and access them here
          </p>
        </div>
      </Card>
    </div>
  );
};
