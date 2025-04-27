"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const repeatItems = [...items, ...items];

export default function InfiniteMarquee() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const speed = 50;

  const [totalWidth, setTotalWidth] = useState(0);

  const lastTimeRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);

  useEffect(() => {
    if (containerRef.current) {
      const total = containerRef.current.scrollWidth / 2;
      setTotalWidth(total);
      x.set(0);
    }
  }, [x]);

  useAnimationFrame((time) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;

    const moveBy = (speed * delta) / 1000;
    x.set(x.get() - moveBy);

    if (x.get() <= -totalWidth) {
      x.set(0);
    }
  });

  function handlePointerDown(e: React.PointerEvent) {
    e.currentTarget.setPointerCapture(e.pointerId);
    startXRef.current = e.clientX;
    startScrollRef.current = x.get();
    lastTimeRef.current = null;
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (e.pressure === 0) return;

    const rawDiff = e.clientX - startXRef.current;
    x.set(startScrollRef.current + rawDiff);
  }

  return (
    <div
      ref={containerRef}
      className="container mx-auto flex overflow-hidden relative MyGradient"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    >
      <motion.div style={{ x }} className="flex shrink-0 select-none">
        {repeatItems.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[300px] h-20 flex items-center justify-center text-2xl font-bold m-2 rounded select-auto"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
