"use client";
import { useTheme } from "@/contexts/themeContext";
import Header from "@/components/header";
import EmailComponent from "@/components/emailComponent";
import Landingtext from "@/components/landingText";
export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex ${
        theme === "light" ? "bg-white body-gradient-light" : "bg-[#060505] body-gradient-dark"
      } w-full h-screen flex flex-col md:justify-center`}
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
