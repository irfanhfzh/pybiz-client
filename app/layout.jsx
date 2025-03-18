import { Inter } from "next/font/google";
import SplashScreen from "@/components/layouts/SplashScreen";
import PWAInstallPrompt from "@/components/layouts/PWAInstallPrompt";
import BottomNavigation from "@/components/layouts/BottomNavigation";
import DisableTabKey from "@/components/commons/DisableTabKey";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "PYBIZ Application",
  description: "Retail Business Application",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="PYBIZ" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PYBIZ" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="text-size-adjust" content="none" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.className} flex h-dvh items-center justify-center antialiased`}
      >
        <DisableTabKey />
        {/* <main className="h-full w-full max-w-md overflow-y-auto shadow-md"> */}
        <main className="h-full w-full max-w-md overflow-y-auto pb-[86px] shadow-md">
          <SplashScreen />
          <PWAInstallPrompt />
          {children}
          <BottomNavigation />
        </main>
      </body>
    </html>
  );
}
