"use client";
import React from "react";
import Service from "@/public/assets/Service";

const managements = [
  {
    title: "Lucas Pohlmann",
    position: "Co Founder",
    works: ["Social Media Manager", "SEO Optimizer"],
  },
  {
    title: "Maximilian Vogt",
    position: "Co Founder",
    works: ["Video- und Fotograph", "Ads-Manager"],
  },
  {
    title: "Milan Rapp",
    position: "",
    works: ["Copywriter"],
  },
];

export default function Services() {
  return (
    <div className="py-10 container mx-auto px-3 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {managements.map((person, index) => (
        <Service key={index} person={person} />
      ))}
    </div>
  );
}
