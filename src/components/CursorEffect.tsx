"use client";

import { useEffect, useState } from "react";

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState({ width: 150, height: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setCursorSize({ width: 200, height: 200 });
    };

    const handleMouseLeave = () => {
      setCursorSize({ width: 150, height: 150 });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a, button, .hover-expand").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document
        .querySelectorAll("a, button, .hover-expand")
        .forEach((element) => {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
        });
    };
  }, []);

  return (
    <div
      className="cursor-dot"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        width: `${cursorSize.width}px`,
        height: `${cursorSize.height}px`,
      }}
    />
  );
}
