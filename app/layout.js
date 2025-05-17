import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI語言學習單字生成器",
  description: "A simple React app that uses OpenAI's API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-lvh pt-5 bg-gradient-to-tr from-slate-100 to-slate-200">
          {children}
        </main>
      </body>
    </html>
  );
}
