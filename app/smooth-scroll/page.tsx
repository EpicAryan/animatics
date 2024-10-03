'use client'

import SmoothScroll from "@/components/SmoothScroll";
import Lenis from 'lenis';
import { useEffect } from "react";

const SmoothScrollPage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="">
      <SmoothScroll />
    </div>
  )
}

export default SmoothScrollPage