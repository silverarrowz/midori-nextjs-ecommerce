import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const garamond = localFont({
  src: "./fonts/Garamond.ttf",
  variable: "--font-garamond",
  weight: "400",
});

const garamondItalic = localFont({
  src: "./fonts/Garamond-Italic.woff",
  variable: "--font-garamond-italic",
  weight: "400",
  style: "italic",
});

const garamondBold = localFont({
  src: "./fonts/Garamond-Bold.ttf",
  variable: "--font-garamond-bold",
  weight: "700",
});

const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
  weight: "400",
});

const robotoLight = localFont({
  src: "./fonts/Roboto-Light.ttf",
  variable: "--font-roboto-light",
  weight: "100",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} ${garamondBold.variable} ${roboto.variable} ${robotoLight.variable} ${garamondItalic.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
