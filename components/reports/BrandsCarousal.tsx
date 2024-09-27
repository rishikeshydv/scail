"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function BrandsCarousal() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false, // No loop to easily manage sets of 3 reviews
    skipSnaps: false,
    containScroll: "trimSnaps", // Ensure it trims extra space if fewer slides
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Scroll to the selected set of reviews
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  // Update the selected index when the carousel scrolls
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
     // Auto-scroll effect
     const autoScroll = setInterval(() => {
      // Get the current index
const currentIndex = embla.selectedScrollSnap();
const totalCards = embla.scrollSnapList().length;

      // Check if the current index is the last one
if (currentIndex === totalCards - 1) {
  embla.scrollTo(0); // Reset to the first card
} else {
  embla.scrollNext(); // Scroll to the next slide
}
}, 2000); // 2 seconds interval

return () => {
  clearInterval(autoScroll); // Clear the interval on component unmount
};
  }, [embla, onSelect]);

  return (
<div className="pt-16 lg:pt-28 flex flex-col md:hidden">
  {/* Carousel Container */}
  <div className="overflow-hidden" ref={emblaRef}>
    {/* Carousel Inner Container */}
    <div className="flex transition-transform ease-in-out duration-500">
      
      {/* First review */}
      <div className="flex-[0_0_100%] flex justify-center items-center">
        <Image
          src="/logo/zillow.svg"
          alt="Zillow logo"
          className="object-contain"
          width={150}
          height={150}
        />
      </div>
      
      {/* Second review */}
      <div className="flex-[0_0_100%] flex justify-center items-center">
        <Image
          src="/logo/realtor.svg"
          alt="Realtor logo"
          className="object-contain"
          width={210}
          height={210}
        />
      </div>

      {/* Third review */}
      <div className="flex-[0_0_100%] flex justify-center items-center">
        <Image
          src="/logo/trulia.png"
          alt="Trulia logo"
          className="object-contain"
          width={200}
          height={200}
        />
      </div>

      {/* Fourth review */}
      <div className="flex-[0_0_100%] flex justify-center items-center">
        <Image
          src="/logo/redfin.png"
          alt="Redfin logo"
          className="object-contain"
          width={160}
          height={160}
        />
      </div>

      {/* Fifth review */}
      <div className="flex-[0_0_100%] flex justify-center items-center">
        <Image
          src="/logo/apartments.png"
          alt="Apartments.com logo"
          className="object-contain"
          width={275}
          height={275}
        />
      </div>
    </div>
  </div>

  {/* Navigation Dots */}
  <div className="flex items-center justify-center mt-10 lg:mt-16 space-x-2 lg:space-x-4">
    {scrollSnaps.map((_, idx) => (
      <button
        className={`w-2.5 lg:w-3 h-2.5 lg:h-3 rounded-full ${
          idx === selectedIndex ? "bg-[#0874de]" : "bg-gray-700"
        }`}
        key={idx}
        onClick={() => scrollTo(idx)}
      />
    ))}
  </div>
</div>

  );
}
