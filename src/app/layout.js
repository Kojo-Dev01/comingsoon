import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata = {
  title: "Coming Soon",
  description: "Something new is on the way.",
  icons: {
    icon: [
      { url: "/kojologo1.png", sizes: "32x32", type: "image/png" },
      { url: "/kojologo1.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/kojologo1.png", sizes: "180x180", type: "image/png" },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
