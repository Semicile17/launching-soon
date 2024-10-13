import "./globals.css";
import { ThemeProvider } from "@/contexts/themeContext";

export const metadata = {
  title: "BlackTree",
  description: "Code.Collaborate.Connect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
