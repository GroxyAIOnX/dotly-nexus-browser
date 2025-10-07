import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Code, Play, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const ExeCode = () => {
  const [code, setCode] = useState('console.log("Hello from ExeCode:null!");');
  const [output, setOutput] = useState<string[]>([]);

  const executeCode = () => {
    try {
      // Clear output
      setOutput([]);
      
      // Capture console output
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(" "));
        originalLog(...args);
      };

      // Execute code
      const result = eval(code);
      
      // Restore console
      console.log = originalLog;

      // Show output
      if (logs.length > 0) {
        setOutput(logs);
      } else if (result !== undefined) {
        setOutput([String(result)]);
      } else {
        setOutput(["Code executed successfully"]);
      }
      
      toast.success("Code executed!");
    } catch (error) {
      setOutput([`Error: ${error instanceof Error ? error.message : String(error)}`]);
      toast.error("Execution error");
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-4 bg-gradient-subtle overflow-auto">
      <Card className="flex-1 flex flex-col max-w-6xl mx-auto w-full shadow-xl">
        {/* Header */}
        <div className="p-4 border-b bg-gradient-primary">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">ExeCode:null</h2>
              <p className="text-sm text-white/80">Execute JavaScript directly in the browser</p>
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 p-4">
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Code Editor</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCode("")}
                className="rounded-full"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter JavaScript code..."
              className="flex-1 font-mono text-sm min-h-[300px]"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">Output</h3>
            <Card className="flex-1 bg-secondary p-4 font-mono text-sm overflow-auto min-h-[300px]">
              {output.length > 0 ? (
                output.map((line, i) => (
                  <div key={i} className="mb-1">
                    {line}
                  </div>
                ))
              ) : (
                <div className="text-muted-foreground">Output will appear here...</div>
              )}
            </Card>
          </div>
        </div>

        {/* Controls */}
        <div className="p-4 border-t">
          <Button onClick={executeCode} className="w-full rounded-full h-12">
            <Play className="mr-2 h-5 w-5" />
            Execute Code
          </Button>
        </div>
      </Card>
    </div>
  );
};
