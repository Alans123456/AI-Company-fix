// src/components/MouseAnimationBackground.tsx
import React from "react";
import { useMousePosition } from "./home/MousePostion";

export const MouseAnimationBackground: React.FC = () => {
  const mousePosition = useMousePosition({ trackVelocity: true });

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Smoke-like flowing gradient that follows mouse */}
      <div
        className="absolute inset-0"
        style={{
          opacity: mousePosition.isMoving ? 0.8 : 0.4,
          backgroundImage: `
            radial-gradient(${
              mousePosition.isMoving ? "600px" : "400px"
            } ellipse at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(192, 132, 252, ${mousePosition.isMoving ? "0.6" : "0.3"}) 0%,
              rgba(99, 102, 241, ${mousePosition.isMoving ? "0.4" : "0.2"}) 30%,
              rgba(139, 92, 246, ${mousePosition.isMoving ? "0.2" : "0.1"}) 60%,
              transparent 100%
            )
          `,
          filter: `blur(${mousePosition.isMoving ? "40px" : "20px"})`,
          transform: `
            scale(${mousePosition.isMoving ? "1.2" : "1"}) 
            rotate(${mousePosition.x * 0.2}deg)
          `,
          transition: "all 0.6s ease-out",
          animation: "smokeFlow 8s ease-in-out infinite",
        }}
      />

      {/* Secondary smoke trail with different timing */}
      <div
        className="absolute inset-0"
        style={{
          opacity: mousePosition.isMoving ? 0.6 : 0.3,
          backgroundImage: `
            radial-gradient(${
              mousePosition.isMoving ? "500px" : "300px"
            } ellipse at ${mousePosition.x * 0.9 + 5}% ${
            mousePosition.y * 0.9 + 5
          }%,
              rgba(236, 72, 153, ${mousePosition.isMoving ? "0.4" : "0.2"}) 0%,
              rgba(219, 39, 119, ${
                mousePosition.isMoving ? "0.3" : "0.15"
              }) 40%,
              transparent 80%
            )
          `,
          filter: `blur(${mousePosition.isMoving ? "30px" : "15px"})`,
          transform: `
            scale(${mousePosition.isMoving ? "1.1" : "0.9"}) 
            rotate(${-mousePosition.y * 0.15}deg)
          `,
          transition: "all 0.8s ease-out",
          animation: "smokeFlow2 10s ease-in-out infinite reverse",
        }}
      />

      {/* Flowing particle streams */}
      <div
        className="absolute inset-0"
        style={{
          opacity: mousePosition.isMoving ? 1 : 0.5,
          backgroundImage: `
            radial-gradient(3px circle at ${mousePosition.x * 0.8 + 10}% ${
            mousePosition.y * 0.8 + 10
          }%, rgba(255,255,255,0.8) 0%, transparent 60%),
            radial-gradient(2px circle at ${mousePosition.x * 1.2 - 10}% ${
            mousePosition.y * 1.2 - 10
          }%, rgba(192, 132, 252, 0.9) 0%, transparent 50%),
            radial-gradient(2.5px circle at ${mousePosition.x * 0.6 + 20}% ${
            mousePosition.y * 0.6 + 20
          }%, rgba(236, 72, 153, 0.7) 0%, transparent 40%),
            radial-gradient(1.5px circle at ${mousePosition.x * 1.3 - 15}% ${
            mousePosition.y * 1.3 - 15
          }%, rgba(139, 92, 246, 0.8) 0%, transparent 45%)
          `,
          filter: `blur(${mousePosition.isMoving ? "1px" : "0.5px"})`,
          transform: `translate(${mousePosition.isMoving ? "3px" : "0px"}, ${
            mousePosition.isMoving ? "3px" : "0px"
          })`,
          transition: "all 0.3s ease-out",
          animation: "particleFloat 6s ease-in-out infinite",
        }}
      />

      {/* Swirling smoke effect */}
      <div
        className="absolute inset-0"
        style={{
          opacity: mousePosition.isMoving ? 0.7 : 0.3,
          background: `
            conic-gradient(
              from ${mousePosition.x * 4}deg at ${mousePosition.x}% ${
            mousePosition.y
          }%,
              rgba(99, 102, 241, 0.3) 0deg,
              rgba(192, 132, 252, 0.2) 90deg,
              rgba(236, 72, 153, 0.15) 180deg,
              rgba(139, 92, 246, 0.25) 270deg,
              rgba(99, 102, 241, 0.3) 360deg
            )
          `,
          filter: `blur(${mousePosition.isMoving ? "50px" : "25px"})`,
          transform: `
            rotate(${mousePosition.x * 0.3}deg) 
            scale(${mousePosition.isMoving ? "1.3" : "1"})
          `,
          transition: "all 0.5s ease-out",
          animation: `swirl ${
            mousePosition.isMoving ? "12s" : "16s"
          } linear infinite`,
        }}
      />

      {/* Dynamic ripple waves */}
      {mousePosition.isMoving && (
        <>
          <div
            className="absolute"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              width: "100px",
              height: "100px",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(192, 132, 252, 0.4) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(20px)",
              animation: "ripple 2s ease-out infinite",
            }}
          />
          <div
            className="absolute"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              width: "60px",
              height: "60px",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 60%)",
              borderRadius: "50%",
              filter: "blur(15px)",
              animation: "ripple 1.5s ease-out infinite 0.3s",
            }}
          />
        </>
      )}

      {/* Ambient floating orbs */}
      <div
        className="absolute inset-0"
        style={{
          opacity: mousePosition.isMoving ? 0.8 : 0.4,
          backgroundImage: `
            radial-gradient(8px circle at ${mousePosition.x * 0.7 + 15}% ${
            mousePosition.y * 0.7 + 15
          }%, rgba(255,255,255,0.6) 0%, transparent 70%),
            radial-gradient(6px circle at ${mousePosition.x * 1.1 - 8}% ${
            mousePosition.y * 1.1 - 8
          }%, rgba(192, 132, 252, 0.7) 0%, transparent 60%),
            radial-gradient(10px circle at ${mousePosition.x * 0.9 + 25}% ${
            mousePosition.y * 0.9 + 25
          }%, rgba(139, 92, 246, 0.5) 0%, transparent 80%)
          `,
          filter: `blur(${mousePosition.isMoving ? "3px" : "1px"})`,
          animation: "orbFloat 8s ease-in-out infinite",
          transform: `translate(${mousePosition.x * 0.01}px, ${
            mousePosition.y * 0.01
          }px)`,
        }}
      />

      {/* Global animation styles */}
      <style>{`
        @keyframes smokeFlow {
          0%, 100% {
            transform: scale(1) rotate(0deg) translateY(0px);
          }
          25% {
            transform: scale(1.05) rotate(2deg) translateY(-5px);
          }
          50% {
            transform: scale(1.1) rotate(-1deg) translateY(-10px);
          }
          75% {
            transform: scale(1.05) rotate(1deg) translateY(-5px);
          }
        }
        
        @keyframes smokeFlow2 {
          0%, 100% {
            transform: scale(0.9) rotate(0deg) translateX(0px);
          }
          33% {
            transform: scale(1) rotate(-2deg) translateX(5px);
          }
          66% {
            transform: scale(1.05) rotate(1deg) translateX(-3px);
          }
        }
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-8px) translateX(3px);
          }
          50% {
            transform: translateY(-15px) translateX(-2px);
          }
          75% {
            transform: translateY(-8px) translateX(4px);
          }
        }
        
        @keyframes swirl {
          from {
            transform: rotate(0deg) scale(1);
          }
          to {
            transform: rotate(360deg) scale(1);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
        
        @keyframes orbFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          33% {
            transform: translateY(-10px) scale(1.1);
          }
          66% {
            transform: translateY(-5px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};
