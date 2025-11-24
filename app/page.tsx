// app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import FaqList from "./components/FaqList";
import {faqTopSix} from "./content/faqs";
import {palettes} from "./lib/theme";
import {NAV} from "./content/navigation";
import Link from "next/link";

export default function Home() {
    return (
        <div className="bg-white">
            <Header navigation={NAV}/>

            <main className="relative isolate min-h-screen px-6 pt-0 lg:px-8">
                <Hero
                    title="Weet je dat jouw woning je elk jaar honderden euro’s kan opleveren?"
                    subtitle="In veel woningen verdwijnt tot een kwart van de warmte via muren, vloeren en ramen. Door te isoleren en oude installaties te vervangen, kun je elk jaar honderden euro’s besparen, terwijl je woning comfortabeler en duurzamer wordt."
                    ctaPrimary={{label: "Ik wil renoveren", href: "#"}}
                    ctaSecondary={{label: "Vertel me meer", href: "/faq#more"}}
                    blob={{from: "from-emerald-200", via: "via-yellow-200", to: "to-sky-200"}}
                />

                <section aria-labelledby="faq" className="mx-auto max-w-5xl py-0">
                    <h2 id="faq" className="sr-only">Veelgestelde vragen</h2>

                    <FaqList
                        items={faqTopSix}
                        palette={palettes.greenYellow}
                        columns={2}
                    />
                </section>

                {/* Nieuwe callout naar woningtypes */}
                <section className="mx-auto max-w-5xl pb-20">
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 px-6 py-6 sm:py-8 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Wil je voorbeelden zien die lijken op jouw woning?
                        </h2>
                        <p className="mt-2 text-sm sm:text-base text-gray-700">
                            Kies jouw woningtype en bekijk welke maatregelen daar meestal het meeste opleveren.
                            Zo zie je sneller wat logisch is voor jouw situatie.
                        </p>
                        <div className="mt-4">
                            <Link
                                href="/woningtypes"
                                className="inline-flex items-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
                            >
                                Bekijk voorbeelden per woningtype
                                <span className="ml-1" aria-hidden>
                  →
                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
