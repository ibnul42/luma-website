"use client";
import React from "react";

export default function BackgroundVideo() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full flex justify-end items-end md:items-center z-20">
            <div className="w-40 h-60 bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                <p>About agency</p>
            </div>
        </div>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="assets/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/30">
        <div className="text-center text-white space-y-4">
          <h1 className="text-5xl font-bold">Welcome to the Site</h1>
          <p className="text-xl">Enjoy the seamless background video</p>
        </div>
      </div>
    </div>
  );
}
