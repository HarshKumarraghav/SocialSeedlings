import QueryProvider from "@/Providers/QueryProvider";
import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "../Providers/Themeprovider";
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
          <ThemeProvider>{children}</ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
