import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gaming UI Demo" },
    { name: "description", content: "Modern gaming UI components" },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-accent/5 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Gaming UI Components
        </h1>
        
        <div className="card p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Button Styles</h2>
          <div className="flex flex-wrap gap-4">
            <Button>White</Button>
            <Button variant="ghost">Ghost</Button>
            <Button className="bg-black text-white hover:bg-black/90">Black</Button>
          </div>
        </div>
      </div>
    </main>
  );
}