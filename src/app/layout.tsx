import QueryProvider from "@/Providers/QueryProvider";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "./provider";
export const metadata: Metadata = {
  title: "Social Seedlings",
  description: "Social Seedlings is a social media platform for the metaverse.",
  icons: {
    icon: "/images/metagram.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <QueryProvider>
          <Providers>{children}</Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
