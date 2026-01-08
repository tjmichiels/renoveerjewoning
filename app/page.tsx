// app/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import FaqList from "./components/faq/FaqList";
import { faqTopSix } from "./content/faqs";
import { palettes } from "./lib/theme";
import { NAV } from "./content/navigation";

export const metadata: Metadata = {
    title: "Renoveer je woning – inzicht in kosten en besparing",
    description:
        "In veel woningen verdwijnt onnodig warmte. Bekijk welke renovatiestappen je kunt zetten, wat ze ongeveer kosten en hoeveel je per jaar kunt besparen.",
};

export default function Home() {
    return (
        <div className="bg-white">
            <Header navigation={NAV} />

            <main className="relative isolate min-h-screen px-6 pt-0 lg:px-8">
                {/* HERO */}
                <Hero
                    blob={{from: "from-emerald-200", via: "via-yellow-200", to: "to-sky-200"}}
                />


                <section aria-labelledby="faq" className="mx-auto max-w-5xl pt-1">

                    {/*Gradient divider*/}
                    <div
                        className="h-px w-full bg-gradient-to-r from-amber-200 via-emerald-200 to-lime-200 mt-11 mb-9"/>

                    <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end ">
                        <div>
                            <h2 id="faq" className="text-2xl font-semibold text-gray-900">
                                Veelgestelde vragen
                            </h2>
                            <p className="mt-1 text-sm text-gray-600">
                                Twijfels over kosten, besparing en wat logisch is om eerst te doen.
                            </p>
                        </div>

                        <Link
                            href="/wooncomfort"
                            className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                        >
                            Liever weten hoe het voelt in huis? <span aria-hidden>→</span>
                        </Link>
                    </div>

                    <FaqList
                        items={faqTopSix}
                        palette={palettes.greenYellow}
                        columns={2}
                    />
                </section>




                {/* CTA-SECTIE ONDER FAQ */}
                <section className="mx-auto max-w-5xl pb-24">
                    {/*Gradient divider*/}
                    <div
                        className="h-px w-full bg-gradient-to-r from-amber-200 via-emerald-200 to-lime-200 mt-4 mb-11"/>

                    {/*Europese doelstelling voor 2050 benoemen*/}
                    <div
                        className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-gray-800">
                        <p>
                            Nederland werkt toe naar de Europese doelstelling voor 2050:
                            woningen die goed geïsoleerd en energiezuinig zijn.
                            Een paar logische stappen nu zorgen ervoor dat je straks goed voorbereid bent.
                        </p>
                    </div>

                    <div className="mt-6 rounded-2xl border border-emerald-100 bg-white px-6 py-6 sm:py-7 shadow-sm">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                                    Wat is een logische volgende stap voor jouw woning?
                                </h2>
                                <p className="mt-1 text-sm text-gray-700">
                                    Kies jouw woningtype om voorbeelden te zien, of bekijk eerst wat renovatie
                                    je financieel kan opleveren.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 sm:justify-end">
                                <Link
                                    href="/woningtypes"
                                    className="font-emphasis rounded-full bg-gradient-to-r from-emerald-700 to-lime-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90 hover:shadow-lg transition"
                                >
                                    Kies jouw woningtype
                                </Link>
                                <Link
                                    href="/financieel"
                                    className="font-emphasis text-sm font-semibold text-gray-800 hover:text-emerald-700 flex items-center gap-1"
                                >
                                    Wat levert dit op? <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
