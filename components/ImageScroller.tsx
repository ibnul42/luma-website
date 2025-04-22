"use client";
import React, { useEffect, useRef, useState } from "react";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

export default function ImageScroller() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  const duplicatedImages = [...images, ...images]; // double the set

  const scrollSpeed = 0.4;
  let scrollAccumulator = 0;

  const step = () => {
    const container = containerRef.current;
    if (container && !isDragging) {
      scrollAccumulator += scrollSpeed;
      const move = Math.floor(scrollAccumulator);

      if (move >= 1) {
        container.scrollLeft += move;
        scrollAccumulator -= move;

        const scrollWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= scrollWidth) {
          container.scrollLeft = 0;
        }
      }
    }

    animationRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(step);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startXRef.current;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(step);
  };

  return (
    <div
      ref={containerRef}
      className="image-slider-container scrollable"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      <div className="image-track flex gap-5">
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="image-card shrink-0 relative w-60 h-20 mx-2 flex items-center justify-center select-none"
          >
            <p className="text-3xl">Image-{index % images.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
