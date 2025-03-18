"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import BGSplashScreen from "@/public/images/bg-splashscreen.webp";
import LogoPYBIZWhiteTitle from "@/public/logos/logo-pybiz-white-title.svg";
import LogoPYBIZSquareTitle from "@/public/logos/logo-pybiz-square-title.svg";

const SplashScreen = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [mainLoading, setMainLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [scale, setScale] = useState(1);
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  const preloadBackgroundImage = useCallback(() => {
    return new Promise((resolve) => {
      if (typeof window === "undefined") {
        resolve(false);
        return;
      }

      const img = new window.Image();
      img.src = BGSplashScreen.src;

      img.onload = () => {
        setBgImageLoaded(true);
        resolve(true);
      };

      img.onerror = () => {
        console.error("Failed to load background image");
        setBgImageLoaded(true);
        resolve(false);
      };

      setTimeout(() => {
        if (!bgImageLoaded) {
          setBgImageLoaded(true);
          resolve(false);
        }
      }, 3000);
    });
  }, [bgImageLoaded]);

  useEffect(() => {
    let mounted = true;

    const initializeSplashScreens = async () => {
      setTimeout(() => {
        if (mounted) {
          setInitialLoading(false);
        }
      }, 1000);

      await preloadBackgroundImage();

      const minDelay = new Promise((resolve) => setTimeout(resolve, 3000));
      await minDelay;

      const timer = setTimeout(() => {
        if (mounted) {
          setScale(1.1);
          setTimeout(() => {
            if (mounted) {
              setMainLoading(false);
              setTimeout(() => mounted && setIsVisible(false), 300);
            }
          }, 700);
        }
      }, 500);

      return () => clearTimeout(timer);
    };

    initializeSplashScreens();

    return () => {
      mounted = false;
    };
  }, [preloadBackgroundImage]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 mx-auto flex w-full max-w-md items-center justify-center bg-white ${
          initialLoading ? "block" : "hidden"
        }`}
      >
        <div className="flex h-full w-fit flex-col items-center justify-between">
          <div></div>
          <LogoPYBIZSquareTitle />
          <div className="mb-6 text-center">
            <p className="text-xs font-medium text-slate-600">
              POWERED BY POCKETYOU ASIA
            </p>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 mx-auto flex w-full max-w-md items-start justify-center ${
          !initialLoading && mainLoading
            ? "block"
            : "pointer-events-none opacity-0 transition-opacity duration-300"
        }`}
      >
        <div className="from-secondary via-primary to-accent absolute inset-0 bg-gradient-to-b" />

        <div className="absolute inset-0">
          <Image
            src={BGSplashScreen}
            alt="Splash Screen Background"
            className={`h-full w-full object-cover transition-all duration-300 ${
              bgImageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
            priority
            fill
            sizes="100vw"
            quality={50}
            onLoadingComplete={() => setBgImageLoaded(true)}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4">
          <div
            className="mb-4 transform transition-all duration-700 ease-in-out"
            style={{ transform: `scale(${scale})` }}
          >
            <div className="mt-32 flex flex-col items-center justify-start">
              <div className="w-48 space-y-2">
                <LogoPYBIZWhiteTitle />
                <div className="flex w-full justify-center">
                  <p className="text-xs font-medium -tracking-[0.5px] text-white">
                    POWERED BY POCKETYOU ASIA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="h-3 w-3 animate-bounce rounded-full bg-white"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationDuration: "0.8s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
