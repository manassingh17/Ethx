import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethical Xchange | Infrastructure for the World's Data Economies",
  description:
    "Ethical Xchange is not a marketplace — it's the infrastructure platform powering radically different data ecosystems across industries. Deploy your own marketplace on our blockchain-secured platform.",
  keywords: [
    "data marketplace",
    "enterprise data",
    "blockchain",
    "data infrastructure",
    "white-label marketplace",
    "ethical data",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen bg-dark text-foreground">{children}</body>
    </html>
  );
}
