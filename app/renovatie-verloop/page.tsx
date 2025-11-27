// app/renovatie-verloop/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/layout/Header";
import { NAV } from "../content/navigation";
import {
    ClipboardDocumentCheckIcon,
    WrenchScrewdriverIcon,
    HomeModernIcon,
    WindowIcon,
    BoltIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Hoe ziet een renovatie er in de praktijk uit?",
    description:
        "Van het eerste idee tot de uitvoeringsdag: een concreet beeld van wat er gebeurt bij maatregelen zoals spouwmuurisolatie, vloerisolatie en HR++-glas.",
};

export default function RenovatieVerloopPage() {
    const timeline = [
        {
            icon: ClipboardDocumentCheckIcon,
            title: "1. Oriëntatie en keuzes",
            text: "Je brengt in kaart wat je ongeveer wilt doen (bijvoorbeeld isolatie of nieuw glas) en wat je budget is. Op basis daarvan bepaal je één of twee logische eerste maatregelen.",
        },
        {
            icon: WrenchScrewdriverIcon,
            title: "2. Offertes aanvragen",
            text: "Je vraagt bij meerdere bedrijven een offerte op voor dezelfde maatregel. Je vergelijkt prijs, planning, garantie en werkwijze.",
        },
        {
            icon: HomeModernIcon,
            title: "3. Afspraak en voorbereiding",
            text: "Je spreekt een datum af, krijgt vaak een globale planning per dagdeel en hoort wat je zelf moet voorbereiden (zoals vrije doorgang, meubels een stukje verplaatsen).",
        },
        {
            icon: BoltIcon,
            title: "4. Uitvoering van de maatregel",
            text: "De vakmensen komen langs en voeren het werk uit. Meestal is dat in één dag of een paar dagen klaar, afhankelijk van de maatregel.",
        },
        {
            icon: CheckCircleIcon,
            title: "5. Afronding en nazorg",
            text: "Je loopt samen het werk na, ontvangt uitleg over garanties en eventueel advies voor een volgende stap.",
        },
    ];

    const measures = [
        {
            icon: HomeModernIcon,
            title: "Spouwmuurisolatie",
            duration: "Duur: vaak 2–4 uur voor een rijwoning",
            whatTheyDo:
                "De gevel wordt op vaste afstanden aangeboord, de spouw wordt gevuld met isolatiemateriaal en de gaatjes worden weer dichtgemaakt.",
            whatYouDo:
                "Je zorgt dat de gevel bereikbaar is (geen auto of grote spullen ertegenaan) en dat er iemand thuis is om toegang te geven.",
            inconvenience:
                "Geluid van boren buiten en wat rommel rondom de gevel. Binnen kun je meestal gewoon in huis blijven.",
        },
        {
            icon: WindowIcon,
            title: "HR++-glas plaatsen",
            duration: "Duur: meestal 1 dag voor een gemiddelde woning",
            whatTheyDo:
                "Het oude glas wordt uit de kozijnen gehaald, de sponningen worden voorbereid en het nieuwe HR++-glas wordt geplaatst en afgewerkt.",
            whatYouDo:
                "Je haalt vensterbanken leeg, zet meubels een stuk van het raam af en zorgt dat er ruimte is om te werken.",
            inconvenience:
                "Tijdelijk wat kou en tocht tijdens het vervangen. Er kan glasgerinkel en bouwgeluid zijn, maar je hoeft je huis niet uit.",
        },
        {
            icon: BoltIcon,
            title: "Vloerisolatie via kruipruimte",
            duration: "Duur: vaak een halve dag",
            whatTheyDo:
                "De isolatiespecialist gaat via de kruipruimte onder de vloer, brengt isolatiemateriaal aan tegen de onderkant van de vloer en controleert op vocht.",
            whatYouDo:
                "Je maakt de toegang tot de kruipruimte vrij (bijvoorbeeld in de hal, meter- of trapkast) en zorgt dat de vloer rondom vrij is.",
            inconvenience:
                "Soms kort wat geluid en een beetje geur van het isolatiemateriaal. Die geur trekt meestal snel weg door te ventileren.",
        },
    ];

    return (
        <div className="bg-white">
            <Header navigation={NAV} />

            <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
                <div className="mx-auto max-w-5xl pb-16">
                    {/* Header */}
                    <header className="mb-8">
                        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                            Hoe ziet een renovatie er in de praktijk uit?
                        </h1>
                        <p className="mt-2 text-gray-700 text-base sm:text-lg max-w-3xl">
                            Hier zie je stap voor stap wat er globaal gebeurt: van het eerste
                            idee tot de uitvoeringsdag zelf. Zo weet je wat je kunt verwachten
                            en waar je je wel (en juist niet) druk om hoeft te maken.
                        </p>
                    </header>

                    {/* Globale tijdlijn */}
                    <section aria-label="Globale stappen van een renovatie">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            De renovatie in vijf overzichtelijke stappen
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 max-w-3xl">
                            Elke woning en elk bedrijf werkt net anders, maar in grote lijnen
                            doorloop je bijna altijd deze stappen.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {timeline.map(({ icon: Icon, title, text }, idx) => (
                                <article
                                    key={idx}
                                    className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                                >
                                    <div className="mt-1 flex-shrink-0">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                      <Icon className="h-5 w-5 text-emerald-700" aria-hidden />
                    </span>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900">
                                            {title}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-700">{text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* De dag zelf per maatregel */}
                    <section className="mt-12" aria-label="Wat gebeurt er op de dag zelf">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Wat gebeurt er op de dag zelf?
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 max-w-3xl">
                            Hieronder zie je in grote lijnen hoe een gemiddelde dag eruitziet
                            bij drie veelvoorkomende maatregelen. Bedragen en exacte duur
                            verschillen per woning en bedrijf, maar het proces lijkt hier vaak
                            sterk op.
                        </p>

                        <div className="mt-6 grid gap-6 md:grid-cols-3">
                            {measures.map(
                                (
                                    { icon: Icon, title, duration, whatTheyDo, whatYouDo, inconvenience },
                                    idx
                                ) => (
                                    <article
                                        key={idx}
                                        className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                    >
                                        <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center rounded-lg bg-emerald-50 p-2">
                        <Icon className="h-5 w-5 text-emerald-700" aria-hidden />
                      </span>
                                            <h3 className="text-base font-semibold text-gray-900">
                                                {title}
                                            </h3>
                                        </div>
                                        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-emerald-700">
                                            {duration}
                                        </p>

                                        <dl className="mt-3 space-y-2 text-sm text-gray-700">
                                            <div>
                                                <dt className="font-semibold">Wat doet het bedrijf?</dt>
                                                <dd className="mt-0.5">{whatTheyDo}</dd>
                                            </div>
                                            <div>
                                                <dt className="font-semibold">Wat verwacht men van jou?</dt>
                                                <dd className="mt-0.5">{whatYouDo}</dd>
                                            </div>
                                            <div>
                                                <dt className="font-semibold">Hoeveel overlast is er?</dt>
                                                <dd className="mt-0.5">{inconvenience}</dd>
                                            </div>
                                        </dl>
                                    </article>
                                )
                            )}
                        </div>
                    </section>

                    {/* Overlast & praktische zaken */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Overlast, planning en wat er soms tegenvalt
                        </h2>

                        <div className="mt-4 grid gap-4 md:grid-cols-3">
                            <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Hoeveel overlast is er meestal?
                                </h3>
                                <p className="mt-2 text-sm text-gray-700">
                                    Bij de meeste isolatiemaatregelen kun je gewoon thuis blijven.
                                    Je merkt vooral geluid, soms wat stof en korte momenten van
                                    kou tijdens het werk. Vaak is een ruimte een paar uur minder
                                    goed te gebruiken, maar niet dagenlang onbewoonbaar.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Moet je vrij nemen van werk?
                                </h3>
                                <p className="mt-2 text-sm text-gray-700">
                                    Er moet iemand aanwezig zijn om open te doen en vragen te
                                    beantwoorden. Veel bewoners kiezen ervoor om één dag(deel)
                                    thuis te werken of vrij te nemen. Bij kort werk, zoals
                                    spouwmuurisolatie, is een halve dag vaak genoeg.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Wat kan er tegenvallen?
                                </h3>
                                <p className="mt-2 text-sm text-gray-700">
                                    Soms komt er tijdens het werk iets naar voren: houtrot, vocht
                                    in de spouw of een kruipruimte die lastiger bereikbaar is. Dat
                                    kan extra werk of kosten betekenen. Vraag daarom vooraf om
                                    duidelijkheid over hoe het bedrijf hiermee omgaat.
                                </p>
                            </article>
                        </div>
                    </section>

                    {/* CTA: wat nu? */}
                    <section className="mx-auto mt-12 max-w-5xl">
                        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-6 py-6 sm:py-7 shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Nu je weet hoe het verloopt, een logische volgende stap
                            </h2>
                            <p className="mt-2 text-sm text-gray-700 max-w-3xl">
                                Wil je dit omzetten in een concreet plan? Op{" "}
                                <strong>Actie ondernemen</strong> zie je welke stappen logisch
                                zijn om nu te zetten — van het kiezen van maatregelen tot het
                                aanvragen van offertes.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <Link
                                    href="/actie-ondernemen"
                                    className="inline-flex items-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
                                >
                                    Ga naar: Actie ondernemen
                                    <span className="ml-1" aria-hidden>
                    →
                  </span>
                                </Link>

                                <Link
                                    href="/faq"
                                    className="inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-emerald-900"
                                >
                                    Nog één vraag? Bekijk de FAQ
                                    <span className="ml-1" aria-hidden>
                    →
                  </span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
