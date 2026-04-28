import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-headline",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sartaj Security — Elite Protection Services",
  description:
    "Premium security firm offering bodyguards, event security, and corporate protection services. Verified protection since 2010.",
  keywords: [
    "security",
    "bodyguards",
    "event security",
    "corporate protection",
    "VIP protection",
    "elite security",
  ],
  openGraph: {
    title: "Sartaj Security — Elite Protection Services",
    description:
      "Premium security firm offering bodyguards, event security, and corporate protection services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#C9922A",
          colorText: "#F0EDE8",
          colorBackground: "#111111",
          colorInputBackground: "#0A0A0A",
          colorInputText: "#F0EDE8",
          borderRadius: "0px",
        },
      }}
    >
      <html
        lang="en"
        className={`${bebasNeue.variable} ${dmSans.variable} h-full`}
      >
        <body className="min-h-full flex flex-col noise-overlay">
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#111111",
                border: "1px solid #2A2A2A",
                color: "#F0EDE8",
                borderRadius: "0px",
                fontFamily: "var(--font-body)",
              },
            }}
            theme="dark"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
