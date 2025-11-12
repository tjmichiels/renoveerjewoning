import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Renoveer je woning",
  description: "Ontdek hoe je jouw woning stap voor stap kunt renoveren. Krijg inzicht in kosten, besparing en comfort, en leer hoe slimme maatregelen jouw huis energiezuiniger maken.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="nl">
        <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
        </html>
    );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="nl">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
