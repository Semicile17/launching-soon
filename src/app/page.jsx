"use client";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import EmailComponent from "@/components/EmailComponent";
import Landingtext from "@/components/LandingText";
export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex ${
        theme === "light" ? "bg-white body-gradient-light" : "bg-[#060505] body-gradient-dark"
      } w-full pattern h-screen flex flex-col md:justify-center`}
    >
      <Header />
      <main className="w-full h-fit p-6 mt-20 md:ml-32">
        <section>
        <Landingtext/>
        <EmailComponent/>
        </section>

      </main>
    </div>
  );
}
