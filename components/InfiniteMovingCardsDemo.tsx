"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Amazing collection of fabric in Lajpat nagar! Must visit to find trendy fabric out in the market. <3",
    name: "Sanchita Sinha",
     title: "⭐⭐⭐⭐⭐",
   
  },
  {
    quote: "Its a good place to have clothes as per your taste and customisation. Must visit showroom for male and female both :)",
    name: "Lokesh Maheshwari",
    title: "⭐⭐⭐⭐⭐",
  },
  {
    quote: "Very nice experience! I bought many fabrics and I am truly satisfied with the quality. The owner and the lady working in the shop are very kind, welcoming, and professional. I highly recommend this store!”",
    name: "zemmouri yousra",
    title: "⭐⭐⭐⭐⭐",
  },
  {
    quote:
      "Superb experience, Very wide variety of designs, Very courteous staff and reasonable price.Highly recommended.",
    name: "Neeraj Goyal",
    title: "⭐⭐⭐⭐⭐",
  },
  {
    quote:
      "I’ve always had an amazing experience!!! The quality that they offer is the best you’ll get in town. Do visit for some elegant fabrics",
    name: "Prachi Passi",
    title: "⭐⭐⭐⭐⭐",
  },
];
