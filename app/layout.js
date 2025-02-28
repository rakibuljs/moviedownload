import { Inter } from "next/font/google";
import "./globals.css";
import PopunderAndSocialBar from "@/components/PopunderAndSocialBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Download your favorite movie here",
  description: "play your favorite movie or download your favorite movie here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <PopunderAndSocialBar />
        {children}
      </body>
    </html>
  );
}
