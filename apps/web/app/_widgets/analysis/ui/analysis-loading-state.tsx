import React from "react";
import { Brain, Zap } from "lucide-react";

interface AnalysisLoadingStateProps {
  analysisId?: string;
}

export function AnalysisLoadingState({
  analysisId,
}: AnalysisLoadingStateProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="bg-card border-primary shadow-primary/50 -skew-x-2 transform border-4 p-8 shadow-[8px_8px_0px_0px]">
        <div className="skew-x-2 transform">
          <div className="mb-8 flex items-center justify-center gap-4">
            <Brain className="text-primary h-8 w-8 animate-pulse" />
            <h1 className="text-foreground text-2xl font-black tracking-wider uppercase md:text-3xl">
              FINALIZING DEEP ANALYSIS
            </h1>
            <Zap className="text-primary h-6 w-6 animate-bounce" />
          </div>
          <div className="mb-6 flex items-center justify-center space-x-4">
            <div className="bg-primary h-4 w-4 rotate-45 transform animate-pulse"></div>
            <div
              className="bg-primary h-4 w-4 rotate-45 transform animate-pulse"
              style={{
                animationDelay: "0.2s",
              }}
            ></div>
            <div
              className="bg-primary h-4 w-4 rotate-45 transform animate-pulse"
              style={{
                animationDelay: "0.4s",
              }}
            ></div>
          </div>
          <div className="bg-primary/20 border-primary mb-4 skew-x-1 transform border-2 p-4">
            <p className="text-primary -skew-x-1 transform animate-pulse text-sm font-black tracking-wider uppercase">
              PREPARING YOUR RESULTS...
            </p>
          </div>
          <p className="text-muted-foreground mt-4 font-mono text-sm">
            Analysis ID: {analysisId}
          </p>
        </div>
      </div>
    </div>
  );
}
