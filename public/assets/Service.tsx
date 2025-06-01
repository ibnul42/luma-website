"use client";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import { useInView } from "framer-motion";
import signatureAnimation from "@/helper/signature.json";

type Person = {
  title: string;
  position?: string;
  works: string[];
};

type ServiceProps = {
  person: Person;
};

export default function Service({ person }: ServiceProps) {
  const [played, setPlayed] = useState(false);

  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // (margin triggers earlier)

  React.useEffect(() => {
    if (isInView) {
      // setPlayed(true);
    }
  }, [isInView]);

  return (
    <Tilt className="w-full h-auto bg-white/5 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl overflow-hidden px-5 py-6 hover:shadow-lg transition-all text-center">
      <div
        onMouseEnter={() => {
          setPlayed(false);
          setTimeout(() => setPlayed(true), 10);
        }}
        ref={ref}
        className="flex flex-col justify-between h-full"
      >
        <div>
          <h3 className="text-xl font-bold">{person.title}</h3>
          {person.position && (
            <p className="text-sm mb-2 text-gray-500">{person.position}</p>
          )}
          <ul className="space-y-1 text-sm text-gray-700">
            {person.works.map((work, i) => (
              <li key={i}>{work}</li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex justify-center h-24">
          {played && (
            <Lottie
              animationData={signatureAnimation}
              loop={false}
              style={{ width: 200, height: 100 }}
            />
          )}
        </div>
      </div>
    </Tilt>
  );
}