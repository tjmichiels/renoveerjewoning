// app/faq/page.tsx
import Header from "../components/Header";
import FaqList from "../components/FaqList";
import { faqTopSix, faqMore } from "../content/faqs";
import { palettes } from "../lib/theme";
import { NAV } from "../content/navigation";

export default function FaqPage() {
    return (
        <div className="bg-white">
            <Header navigation={NAV} />

            <main className="relative isolate min-h-screen px-6 pt-24 lg:px-8">
                <header className="mx-auto max-w-5xl">
                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Veelgestelde vragen</h1>
                    <p className="mt-2 text-gray-600">
                        Antwoorden op de meest voorkomende vragen over kosten, besparingen en uitvoering.
                    </p>
                </header>

                {/* Top 6 */}
                <section id="top" aria-labelledby="top-heading" className="mx-auto max-w-5xl py-10 scroll-mt-24">
                    <h2 id="top-heading" className="sr-only">Top 6 vragen</h2>
                    <FaqList items={faqTopSix} palette={palettes.greenYellow} columns={2} />
                </section>

                {/* Meer */}
                <section id="more" aria-labelledby="more-heading" className="mx-auto max-w-5xl pb-16 scroll-mt-24">
                    <h2 id="more-heading" className="text-xl font-semibold text-gray-900 mb-2">Meer vragen</h2>
                    <p className="text-gray-600 mb-4">Praktische info over planning, overlast en slimme volgorde.</p>
                    <FaqList items={faqMore} palette={palettes.greenYellow} columns={2} />
                </section>
            </main>
        </div>
    );
}
