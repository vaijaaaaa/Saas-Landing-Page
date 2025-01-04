import React from "react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import FlipText from "@/components/ui/flip-text";

function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <DotPattern>
        <FlipText
          word="Hello, World!"
          duration={0.5}
          delayMultiple={0.1}
          className="text-4xl font-extrabold text-indigo-600 drop-shadow-lg"
        />
      </DotPattern>
    </div>
  );
}

export default Home;
