import "./globals.css";
import type {Metadata} from "next";
import {Inter, Source_Sans_3, Poppins} from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const sourceSans3 = Source_Sans_3({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-friendly",
    weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-emphasis",
    weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Renoveer je woning",
    description:
        "Ontdek hoe je jouw woning stap voor stap kunt renoveren. Krijg inzicht in kosten, besparing en comfort, en leer hoe slimme maatregelen jouw huis energiezuiniger maken.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="nl">
        <body
            className={`${inter.variable} ${sourceSans3.variable} ${poppins.variable} font-sans antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
