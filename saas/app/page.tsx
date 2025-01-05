import React from "react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import WordRotate from "@/components/ui/word-rotate";
import SparklesText from "@/components/ui/sparkles-text";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

const words = ["welcome", "To", "Our Website"];


function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <DotPattern>
      </DotPattern>
        <div className="flex flex-col items-center">
          <WordRotate words={words} className="text-6xl font-bold mb-4" />
          <SparklesText text="This is best ai website" className="text-1xl mt-4" />
     

        </div>
     
    </div>
  );
}

export default Home;
