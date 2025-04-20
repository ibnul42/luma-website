"use client";
import { useEffect, useRef, useState } from "react";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
];

export default function ImageScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const repeatedImages = [...images, ...images, ...images];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const content = contentRef.current;
    if (!scrollContainer || !content) return;

    let animationId: number;
    const speed = 0.5;
    const resetThreshold = content.scrollWidth / 3;

    const animateScroll = () => {
      if (!isDragging) {
        scrollContainer.scrollLeft += speed;

        if (scrollContainer.scrollLeft >= resetThreshold * 2) {
          scrollContainer.scrollLeft -= resetThreshold;
        }
      }
      animationId = requestAnimationFrame(animateScroll);
    };

    animateScroll();
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft ?? 0));
    setScrollLeft(scrollRef.current?.scrollLeft ?? 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <div ref={contentRef} className="flex w-max">
        {repeatedImages.map((src, index) => (
          <div
            key={index}
            className="relative w-64 h-40 mx-2 flex items-center justify-center select-none"
          >
            <p className="text-3xl">Image-{index % images.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
