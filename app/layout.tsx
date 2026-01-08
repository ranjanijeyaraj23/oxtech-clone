import "./globals.css";
import { Inter } from "next/font/google";
import { Space_Mono } from "next/font/google";
export const metadata = {
  title: "EeshiSoft – Software & Web Development Company",
  description:
    "EeshiSoft is a software and web development company building modern, fast, and scalable web applications.",
};

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        
        <main>{children}</main>
      </body>
    </html>
  );
}
