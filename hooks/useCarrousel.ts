"use client";
import { useState, useEffect, useRef } from "react";

export function useCarrousel(length: number, delay = 10000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, delay);

    return resetTimeout;
  }, [currentIndex, delay]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
  };
}
