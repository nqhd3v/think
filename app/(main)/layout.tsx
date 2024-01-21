"use client";
import "../globals.css";
import { twMerge } from "tailwind-merge";
import { nunito, ubuntu, writer } from "@/fonts";
import ThinkProvider from "@/context/think";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="just a blog, where i share about everything of my life"
        />
      </head>
      <body
        className={twMerge(
          "w-full min-h-screen",
          ubuntu.variable,
          nunito.variable,
          writer.variable
        )}
      >
        <ThinkProvider>
          <Header />
          {children}
        </ThinkProvider>
      </body>
    </html>
  );
}
