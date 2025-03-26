"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FormLogin from "@/components/commons/FormLogin";

const LoginPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [formHeight, setFormHeight] = useState(0);
  const formRef = useRef(null);

  const slides = [
    "/images/slide1.png",
    "/images/slide2.png",
    "/images/slide3.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const updateFormHeight = () => {
      if (formRef.current) {
        const height = formRef.current.offsetHeight;
        setFormHeight(height + 104);
      }
    };

    updateFormHeight();

    const resizeObserver = new ResizeObserver(updateFormHeight);
    if (formRef.current) {
      resizeObserver.observe(formRef.current);
    }

    updateFormHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, [isPhoneLogin]);

  return (
    <div className="bg-primary flex flex-col">
      <div className="w-full flex-1 p-4">
        <div
          className="relative mx-auto w-full max-w-full"
          style={{ height: `calc(100dvh - ${formHeight}px)` }}
        >
          <Image
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <div className="relative z-10 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="rounded-t-3xl bg-white">
        <div className="px-6 py-8">
          <FormLogin
            ref={formRef}
            isPhoneLogin={isPhoneLogin}
            onSwitchMethodAction={() => setIsPhoneLogin(!isPhoneLogin)}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
