import "./globals.css";
import Providers from "./provider";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Metagram",
  description: "Metagram is a social media platform for the metaverse.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
