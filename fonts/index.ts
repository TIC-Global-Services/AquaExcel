import localFont from "next/font/local";
import { Inter_Tight } from "next/font/google";


export const hovesPro = localFont({
  src: [
    {
      path: "./TTHovesProTrial_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./TTHovesProTrial_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./TTHovesProTrial_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./TTHovesProTrial_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hoves-pro",
});

export const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

