"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import EmailComponent from "@/components/EmailComponent";
import Landingtext from "@/components/LandingText";
import OverlayIntro from "@/components/Overlay";

export default function Home() {
  const { theme } = useTheme();
  const [overlayFinished, setOverlayFinished] = useState(false);

  useEffect(() => {
    // Set a timer for when the overlay should finish and hide
    const timer = setTimeout(() => {
      setOverlayFinished(true);
    }, 6000); // Adjust this duration based on the typing and fade out duration

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {!overlayFinished && <OverlayIntro />} {/* Show the overlay until finished */}
      
      {overlayFinished && (
        <div
          className={`flex ${
            theme === "light"
              ? "bg-white body-gradient-light"
              : "bg-[#060505] body-gradient-dark"
          } w-full pattern h-screen flex flex-col md:justify-center overflow-hidden`}
        >
          <Header />
          <main className="w-full md:flex  items-center justify-evenly h-fit p-6 mt-20 md:ml-32 gap-x-24">
            <section>
              <Landingtext />
              <EmailComponent />
            </section>
            <section className="hidden md:block justify-center items-center block:hidden">
              <span>
                <img
                  src="/maintenance.png"
                  alt="maintenance"
                  className="md:h-96 h-48"
                />
              </span>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
