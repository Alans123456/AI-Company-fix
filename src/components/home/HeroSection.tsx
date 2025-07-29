// src/components/hero/HeroSection.tsx
import React, { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  ChevronDown,
  Rocket,
} from "lucide-react";
import { useMousePosition } from "./MousePostion";
import { AnimatedWaves } from "./subcomponents/AnimatedWaves";
import { FloatingGeometry } from "./subcomponents/FloatingGeometry";
import { NeuralNetwork } from "./subcomponents/NeuralNetwork";
import { InteractiveButton } from "../hero/subcomponents/InteractiveButton";

export const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mousePosition = useMousePosition();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleExploreClick = useCallback(() => {
    console.log("Explore clicked");
  }, []);

  const handleDemoClick = useCallback(() => {
    console.log("Demo clicked");
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <AnimatedWaves />
      <FloatingGeometry />
      <NeuralNetwork />

      {/* Dynamic Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-violet-900/10 to-black" />

        {/* Dynamic particle effect */}
        <div
          className="absolute inset-0 opacity-80 transition-opacity duration-1000"
          style={{
            backgroundImage: `
              radial-gradient(300px circle at ${mousePosition.x}% ${
              mousePosition.y
            }%, 
                rgba(192, 132, 252, 0.3) 0%, 
                rgba(99, 102, 241, 0.2) 40%, 
                transparent 100%
              ),
              radial-gradient(300px circle at ${100 - mousePosition.x}% ${
              100 - mousePosition.y
            }%, 
                rgba(236, 72, 153, 0.15) 0%, 
                rgba(219, 39, 119, 0.1) 20%, 
                transparent 100%
              )
            `,
            mixBlendMode: "screen",
          }}
        />

        {/* Animated grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />

        {/* Subtle animated shimmer */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              conic-gradient(
                from 230deg at 50% 50%,
                rgba(99, 102, 241, 0) 0deg,
                rgba(99, 102, 241, 0.05) 90deg,
                rgba(139, 92, 246, 0.03) 180deg,
                rgba(192, 132, 252, 0) 360deg
              )
            `,
            animation: "spin 20s linear infinite",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-7xl mx-auto">
          {/* Status Badge */}
          <div
            className={`inline-flex items-center px-6 py-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/20 mb-8 transform transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3" />
              <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-white font-medium">Tech Solutions</span>
              <Zap className="w-4 h-4 text-blue-400 ml-2 animate-bounce" />
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight transform transition-all duration-1000 delay-300 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="block mb-4">Transform Your</span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl lg:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light transform transition-all duration-1000 delay-500 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Pioneering the intersection of{" "}
            <span className="text-indigo-400 font-semibold">
              artificial intelligence
            </span>
            ,{" "}
            <span className="text-purple-400 font-semibold">
              immersive design
            </span>
            , and{" "}
            <span className="text-pink-400 font-semibold">
              cutting-edge technology
            </span>{" "}
            to create extraordinary digital experiences that shape tomorrow.
          </p>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 transform transition-all duration-1000 delay-700 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <InteractiveButton onClick={handleExploreClick} variant="primary">
              <Rocket className="w-5 h-5 mr-2 inline" />
              Launch Experience
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
            </InteractiveButton>

            <InteractiveButton onClick={handleDemoClick} variant="secondary">
              <Play className="w-5 h-5 mr-2 inline" />
              Watch Innovation
            </InteractiveButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 cursor-pointer group">
            <span className="text-sm mb-2 font-medium">Discover More</span>
            <div className="relative">
              <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-pulse" />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
