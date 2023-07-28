import QueryProvider from "@/Providers/QueryProvider";
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Social Seedlings",
  description: "Social Seedlings is a social media platform for the metaverse.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
