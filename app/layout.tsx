import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Orphic Solutions",
  description: "Orphic Solutions - Your Partner in Digital Transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
