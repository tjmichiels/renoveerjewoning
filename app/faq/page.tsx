// app/faq/page.tsx
import {Metadata} from "next";
import Header from "../components/layout/Header";
import FaqList from "../components/faq/FaqList";
import {faqTopSix, faqMore} from "../content/faqs";
import {palettes} from "../lib/theme";
import {NAV} from "../content/navigation";
import SocialProofStrip from "@/app/components/faq/SocialProofStrip";


export const metadata: Metadata = {
    title: "Veelgestelde vragen over woningrenovatie",
    description:
        "Antwoorden op de belangrijkste vragen over kosten, terugverdientijd, overlast en praktische stappen bij het renoveren van je woning.",
};

export default function FaqPage() {
    return (
        <div className="bg-white">
            <Header navigation={NAV}/>

            <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
                <header className="mx-auto max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                        Veelgestelde vragen
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Alles wat je wilt weten voordat je aan renovatie begint.
                    </p>
                </header>

                {/* Kleine callout: skip naar vervolgvragen */}
                <div className="mx-auto max-w-5xl mt-6">
                    <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm text-gray-800">
                        <p>
                            Heb je de vragen op de homepage al gezien?{" "}
                            <a
                                href="#more"
                                className="font-semibold text-emerald-700 hover:text-emerald-900"
                            >
                                Ga direct naar de vervolgvragen →
                            </a>
                        </p>
                    </div>
                </div>


                {/* Top 6 */}
                <section id="top" aria-labelledby="top-heading" className="mx-auto max-w-5xl pt-8 scroll-mt-20">
                    <h2 id="top-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                        Belangrijkste vragen
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Start hier: de vragen waar de meeste huiseigenaren mee beginnen.
                    </p>
                    <FaqList items={faqTopSix} palette={palettes.greenYellow} columns={2}/>
                </section>

                {/* Sociale vergelijking / herkenbare context */}
                <SocialProofStrip/>


                {/* Meer */}
                <section id="more" aria-labelledby="more-heading"
                         className="mx-auto max-w-5xl pb-16 pt-10 scroll-mt-20">
                    <h2 id="more-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                        Meer vragen
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Meer weten over hoe het renoveren in de praktijk gaat?
                    </p>
                    <FaqList items={faqMore} palette={palettes.greenYellow} columns={2}/>
                </section>
            </main>
        </div>
    );
}
