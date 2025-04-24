"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Engine, Container, IOptions } from "tsparticles-engine";
import { useCallback, useEffect, useMemo } from "react";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    initParticlesEngine(async (engine: Engine) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      await loadFull(engine);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log(container);
  }, []);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const options: IOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: { value: "#000" } },
      fpsLimit: 60,
      particles: {
        number: {
          value: 150,
          density: { enable: true, area: 800 },
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 1 },
        size: { value: { min: 1, max: 2 } },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "bounce" },
        },
      },
      emitters: [
        {
          direction: "bottom-left",
          rate: {
            delay: 5,
            quantity: 1,
          },
          size: {
            width: 0,
            height: 0,
          },
          position: {
            x: 95,
            y: 0,
          },
          particles: {
            move: {
              direction: "bottom-left",
              speed: { min: 12, max: 15 },
              outModes: "destroy",
            },
            size: { value: { min: 2, max: 2.5 } },
            life: {
              duration: { min: 1, max: 1.5 },
              count: 1,
            },
            color: { value: "#fff" },
            shape: { type: "triangle" },
            opacity: { value: 0.8 },
            trail: {
              enable: true,
              length: 80,
              fillColor: "#000",
            },
          },
        },
      ],
    }),
    []
  );

  return (
    <Particles
      id="particle"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      particlesLoaded={particlesLoaded}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      options={options}
    />
  );
};

export default ParticlesComponent;
