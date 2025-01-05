import React from "react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import FlipText from "@/components/ui/flip-text";
import WordRotate from "@/components/ui/word-rotate";

const words = ["welcome", "To","Our Website"];
function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <DotPattern>
      </DotPattern>
       <WordRotate words={words} className="text-6xl font-bold" />
       
    </div>
  );
}

export default Home;
