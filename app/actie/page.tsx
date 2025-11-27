// app/actie/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/layout/Header";
import { NAV } from "../content/navigation";

export const metadata: Metadata = {
    title: "Actie ondernemen – stap voor stap renoveren",
    description:
        "Ben je van plan om te renoveren? Volg dit stappenplan: kies je woningtype, bepaal logische maatregelen, bekijk kosten en besparing, en bereid je voor op offertes en uitvoering.",
};

const steps = [
    {
        nr: "1",
        title: "Begin met je woningtype",
        summary:
            "Niet elke maatregel past bij elke woning. Door eerst naar je woningtype te kijken, maak je het kiezen van maatregelen een stuk eenvoudiger.",
        bullets: [
            "Kies het woningtype dat het meest lijkt op jouw huis (tussenwoning, hoekwoning of vrijstaand).",
            "Bekijk per type welke maatregelen meestal het meeste opleveren.",
            "Gebruik dit als startpunt, niet als verplicht stappenplan.",
        ],
        linkLabel: "Bekijk voorbeelden per woningtype",
        href: "/woningtypes",
    },
    {
        nr: "2",
        title: "Kies één of twee logische eerste maatregelen",
        summary:
            "Je hoeft niet alles tegelijk te doen. Eén goede maatregel kan al veel verschil maken in comfort en energierekening.",
        bullets: [
            "Kijk welke maatregelen bij jouw woningtype veel voorkomen (bijv. spouwmuurisolatie, vloerisolatie, HR++-glas).",
            "Let op: maatregelen aan schil (gevel, dak, vloer, glas) geven vaak snel resultaat.",
            "Kies één of twee maatregelen die passen bij jouw budget en situatie.",
        ],
    },
    {
        nr: "3",
        title: "Krijg gevoel bij kosten en besparing",
        summary:
            "Voordat je offertes opvraagt, is het handig om globaal te weten in welke orde van grootte je moet denken.",
        bullets: [
            "Bekijk per maatregel wat de gebruikelijke bandbreedte is qua kosten.",
            "Kijk naar de globale jaarlijkse besparing in euro’s of procenten gasverbruik.",
            "Gebruik dit niet als exacte berekening, maar als grove richtlijn.",
        ],
        linkLabel: "Naar kosten en besparing",
        href: "/financieel",
    },
    {
        nr: "4",
        title: "Check subsidies en regelingen",
        summary:
            "Subsidies kunnen een flinke hap uit de kosten halen, maar de regels veranderen regelmatig.",
        bullets: [
            "Controleer welke landelijke regelingen op dit moment bestaan (zoals ISDE).",
            "Kijk bij je gemeente of er extra lokale subsidies of leningen zijn.",
            "Let erop dat je vaak pas subsidie krijgt als de maatregel door een erkend bedrijf is uitgevoerd.",
        ],
        linkLabel: "Bekijk uitleg over subsidies",
        href: "/financieel#subsidies",
    },
    {
        nr: "5",
        title: "Bereid je voor op offertes en uitvoering",
        summary:
            "Met een idee van maatregelen, kosten en subsidies kun je gericht in gesprek met bedrijven.",
        bullets: [
            "Vraag bij meerdere bedrijven een offerte op voor dezelfde maatregel, zodat je goed kunt vergelijken.",
            "Let niet alleen op prijs, maar ook op planning, garantie en gebruikte materialen.",
            "Bedenk vooraf: wil je alles in één keer doen, of verspreid over meerdere jaren?",
        ],
    },
];

export default function ActiePage() {
    return (
        <div className="bg-white">
            <Header navigation={NAV} />

            <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
                <div className="mx-auto max-w-5xl pb-16">
                    {/* Paginaheader */}
                    <header className="mb-8">
                        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                            Klaar om echt iets te doen?
                        </h1>
                        <p className="mt-2 text-gray-700 text-base sm:text-lg">
                            Dit stappenplan helpt je om van “ik zou eigenlijk iets moeten” naar
                            concreet handelen te gaan. Zonder technische taal, maar met logische
                            volgorde: eerst inzicht, dan keuzes, dan actie.
                        </p>
                    </header>

                    {/* Stappenlijst */}
                    <section
                        aria-label="Stappenplan voor woningrenovatie"
                        className="space-y-6"
                    >
                        {steps.map((step) => (
                            <article
                                key={step.nr}
                                className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                            >
                                {/* Nummer */}
                                <div className="flex-shrink-0">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                                        {step.nr}
                                    </div>
                                </div>

                                {/* Tekst */}
                                <div className="space-y-2">
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        {step.title}
                                    </h2>
                                    <p className="text-sm text-gray-700">{step.summary}</p>
                                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-gray-700">
                                        {step.bullets.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>

                                    {step.href && step.linkLabel && (
                                        <div className="pt-2">
                                            <Link
                                                href={step.href}
                                                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                                            >
                                                {step.linkLabel}
                                                <span className="ml-1" aria-hidden>
                          →
                        </span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </section>

                    {/* Slotcallout */}
                    <section className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-6 py-5">
                        <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                            Je hoeft niet alles tegelijk te doen om resultaat te merken.
                        </h2>
                        <p className="mt-1 text-sm text-gray-800">
                            Kies één maatregel die past bij jouw woning en situatie — dat levert vaak al een merkbaar verschil op in comfort én verbruik. Later kun je altijd uitbreiden met extra stappen.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
