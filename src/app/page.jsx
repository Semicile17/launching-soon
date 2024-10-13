"use client";
import { useTheme } from "@/contexts/themeContext";
import Header from "@/components/header";
import EmailComponent from "@/components/emailComponent";
export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex ${
        theme === "light" ? "bg-white" : "bg-[#060505]"
      } w-full h-screen `}
    >
      <Header />
      <main className="w-full h-fit mt-20 p-12">
        <EmailComponent/>
      </main>
    </div>
  );
}
