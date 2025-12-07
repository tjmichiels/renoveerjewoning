// app/actie-ondernemen/page.tsx
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
            "Door eerst naar je woningtype te kijken, wordt het kiezen van maatregelen een stuk overzichtelijker.",
        bullets: [
            "Kies het woningtype dat het meest lijkt op jouw huis.",
            "Bekijk per type welke maatregelen meestal het meeste opleveren.",
        ],
        linkLabel: "Bekijk voorbeelden per woningtype",
        href: "/woningtypes",
    },
    {
        nr: "2",
        title: "Kies één of twee logische eerste maatregelen",
        summary:
            "Je hoeft niet alles tegelijk te doen. Eén stap kan al veel schelen in comfort en energierekening.",
        bullets: [
            "Let vooral op maatregelen aan gevel, dak, vloer en glas: die leveren vaak snel resultaat op.",
            "Kies één of twee maatregelen die passen bij jouw budget en situatie.",
        ],
        linkLabel: "Lees meer per maatregel",
        href: "/renovatiemogelijkheden",
    },
    {
        nr: "3",
        title: "Krijg gevoel bij kosten en besparing",
        summary:
            "Voordat je offertes opvraagt, is het handig om globaal te weten in welke orde van grootte je moet denken.",
        bullets: [
            "Bekijk per maatregel wat de gebruikelijke bandbreedte is qua kosten.",
            "Gebruik de bedragen als grove richtlijn, niet als exacte berekening.",
        ],
        linkLabel: "Naar kosten en besparing",
        href: "/financieel",
    },
    {
        nr: "4",
        title: "Check subsidies en regelingen",
        summary:
            "Subsidies en leningen kunnen een flinke hap uit de kosten halen.",
        bullets: [
            "Check de landelijke regeling (zoals ISDE) voor jouw maatregelen.",
            "Kijk bij je gemeente of er extra lokale subsidies of leningen zijn.",
        ],
        linkLabel: "Bekijk uitleg over subsidies",
        href: "/financieel#subsidies",
    },
    {
        nr: "5",
        title: "Bereid je voor op offertes en uitvoering",
        summary:
            "Met een helder beeld van maatregelen, kosten en subsidies kun je gerichter in gesprek met bedrijven.",
        bullets: [
            "Vraag bij meerdere bedrijven een offerte op voor dezelfde maatregel.",
            "Let niet alleen op prijs, maar ook op planning, garantie en materialen.",
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
                    <header className="mb-7">
                        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                            Klaar om echt iets te doen?
                        </h1>
                        <p className="mt-2 text-gray-700 text-base sm:text-lg">
                            Dit stappenplan helpt je om duidelijkheid te krijgen in wat voor jouw woning logisch is. Stap voor stap, van inzicht naar keuzes naar actie.
                        </p>
                    </header>

                    {/*Gradient divider*/}
                    <div className="h-px w-full bg-gradient-to-r from-amber-200 via-emerald-200 to-lime-200 mt-0 mb-8"/>

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
                                    {step.nr === "4" && (
                                        <p className="mt-2 text-sm text-gray-600">
                                            Tip: in veel gemeenten kun je gratis
                                            een <strong>energiecoach</strong> inschakelen.
                                            Dat is een getrainde vrijwilliger die samen met jou meekijkt in je woning
                                            en praktisch advies geeft over logische stappen.
                                        </p>

                                    )}
                                    {step.nr === "5" && (
                                        <p className="mt-4 text-sm text-gray-500">
                                            Wil je zien hoe zo’n uitvoering er in de praktijk uitziet?{" "}
                                            <Link
                                                href="/renovatie-verloop"
                                                className="font-semibold text-emerald-700 hover:text-emerald-900"
                                            >
                                                Bekijk een voorbeeld van een renovatiedag →
                                            </Link>
                                        </p>
                                    )}

                                </div>
                            </article>
                        ))}
                    </section>

                    {/*Gradient divider*/}
                    <div className="h-px w-full bg-gradient-to-r from-amber-200 via-emerald-200 to-lime-200 mt-10 mb-0"/>

                    {/* Slotcallout */}
                    <section className="mt-9 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-6 py-5">
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
