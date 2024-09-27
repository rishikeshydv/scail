"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from "react";
import Image from 'next/image';
interface ReportInfoCardProps {
  icon: any;
  title: string;
  description: string;
}
import OwnershipIcon from "@/assets/icons/ownership.svg";
import InsuranceIcon from "@/assets/icons/insurance.svg";
export default function ReviewCarousalMobile() {
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
  }, [embla, onSelect]);

  return (
    <div className="md:pt-[40px] md:px-[100px] md:hidden flex flex-col">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Carousel inner container */}
        <div className="flex">
          {/* First set of 3 reviews */}
          <div className="flex-[0_0_100%]">
            <div className="md:grid md:grid-cols-3 gap-8 p-10">
            <ReportInfoCard
            icon={InsuranceIcon}
            title="Insurance Company Records"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        recusandae officiis fuga unde dolor quis minus porro iusto explicabo
        nisi."
          />
            </div>
          </div>
          
          {/* Second set of 3 reviews */}
          <div className="flex-[0_0_100%]">
            <div className="md:grid md:grid-cols-3 gap-8 p-10">
            <ReportInfoCard
            icon={OwnershipIcon}
            title="Ownership History"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        recusandae officiis fuga unde dolor quis minus porro iusto explicabo
        nisi."
          />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center md:mt-16 space-x-4">
        {scrollSnaps.map((_, idx) => (
          <button
            className={`w-3 h-3 rounded-full ${
              idx === selectedIndex ? "bg-yellow-500" : "bg-gray-700"
            }`}
            key={idx}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}


const ReportInfoCard = ({ icon, title, description }: ReportInfoCardProps) => {
  return (
    <div className="rounded-[40px] px-[30px] py-[20px] border border-[#0000000D] bg-[#F5F5F5] flex flex-col items-center gap-y-4">
      <div className="h-[80px] w-[80px] rounded-[50%] bg-white border border-[#00000026] flex items-center justify-center">
        <Image src={icon} alt="icon" height={40} width={40} />
      </div>

      <div className="font-semibold text-[26px] text-center">{title}</div>

      <div className="font-normal text-[18px] text-[#808080] text-center line-[21.6px]">
        {description}
      </div>
    </div>
  );
};