// app/financieel/page.tsx
import type {Metadata} from "next";
import Header from "../components/layout/Header";
import {NAV} from "../content/navigation";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Wat levert renovatie financieel op?",
    description:
        "Een helder overzicht van indicatieve kosten, besparingen en terugverdientijden van veelvoorkomende renovatiemaatregelen, plus uitleg over subsidies en logische eerste stappen.",
};

export default function FinancieelPage() {
    return (
        <div className="bg-white">
            <Header navigation={NAV}/>

            <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
                <div className="mx-auto max-w-5xl pb-16">
                    {/* Header */}
                    <header>
                        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                            Wat levert renovatie financieel op?
                        </h1>
                        <p className="mt-3 text-gray-700 max-w-3xl">
                            Renovatie is een investering, maar geen sprong in het diepe.
                            Hieronder zie je indicatieve bedragen voor veelvoorkomende maatregelen,
                            wat ze ongeveer kosten, wat ze per jaar opleveren en hoe snel je ze meestal terugverdient.
                        </p>
                    </header>

                    {/*Gradient divider*/}
                    <div className="h-px w-full bg-gradient-to-r from-amber-200 via-emerald-200 to-lime-200 mt-8 mb-0"/>

                    {/* Sectie: drie belangrijkste maatregelen */}
                    <section className="mt-7">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Globale kosten en besparing per maatregel
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 max-w-3xl">
                            De bedragen hieronder zijn <strong>ruwe richtlijnen</strong> voor een gemiddelde jaren
                            80-woning.
                            Werkelijke kosten hangen af van oppervlak, staat van de woning en gekozen uitvoerder.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {/* Spouwmuurisolatie */}
                            <article
                                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Spouwmuurisolatie
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Vaak de snelste winst bij rijwoningen en hoekwoningen.
                                </p>
                                <dl className="mt-3 space-y-1 text-sm">
                                    <div className="flex justify-between gap-2">
                                        <dt className="text-gray-500">Indicatie investering</dt>
                                        <dd className="font-semibold text-gray-900">± €800 – €1.500</dd>
                                    </div>
                                    <div className="flex justify-between gap-2">
                                        <dt className="text-gray-500">Gem. besparing per jaar</dt>
                                        <dd className="font-semibold text-gray-900">± €150 – €300</dd>
                                    </div>
                                    <div className="flex justify-between gap-2">
                                        <dt className="text-gray-500">Terugverdientijd</dt>
                                        <dd className="font-semibold text-emerald-700">± 3 – 6 jaar</dd>
                                    </div>
                                </dl>
                            </article>

                            {/* Vloerisolatie */}
                            <article
                                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Vloerisolatie
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Minder koude voeten en minder warmteverlies via de kruipruimte.
                                </p>
                                <dl className="mt-3 space-y-1 text-sm">
                                    <div className="flex justify-between gap-2">
                                        <dt className="text-gray-500">Indicatie investering</dt>
                                        <dd className="font-semibold text-gray-900">± €1.500 – €3.000</dd>
                                    </div>
                                    <div className="flex justify-between gap-2">
                                        <dt className="text-gray-500">Gem. besparing per jaar</dt>
                                        <dd className="font-semibold text-gray-900">± €150 – €250</dd>
                                    </div>
                                    <div className="flex justify-between gap-2">
                                        <dt className="text-gray-500">Terugverdientijd</dt>
                                        <dd className="font-semibold text-emerald-700">± 5 – 8 jaar</dd>
                                    </div>
                                </dl>
                            </article>

                            {/* HR++-glas */}
                            <article
                                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900">
                                    HR++-glas
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Minder tocht langs ramen en een constantere temperatuur in huis.
                                </p>
                                <dl className="mt-3 space-y-1 text-sm">
                                    <div className="flex justify-between gap-2">
                                        <dt className="text-gray-500">Indicatie investering</dt>
                                        <dd className="font-semibold text-gray-900">
                                            ± €4.000 – €6.000*
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-2">
                                        <dt className="text-gray-500">Gem. besparing per jaar</dt>
                                        <dd className="font-semibold text-gray-900">± €200 – €350</dd>
                                    </div>
                                    <div className="flex justify-between gap-2">
                                        <dt className="text-gray-500">Terugverdientijd</dt>
                                        <dd className="font-semibold text-emerald-700">± 8 – 12 jaar</dd>
                                    </div>
                                </dl>
                                <p className="mt-2 text-xs text-gray-500">
                                    *Sterk afhankelijk van het aantal ramen en het huidige glas.
                                </p>
                            </article>
                        </div>
                    </section>

                    <p className="mt-4 text-sm/6 text-gray-600 max-w-3-xl">
                        <strong>Goed om te weten:</strong> veel isolatiemaatregelen worden binnen een dag uitgevoerd en geven nauwelijks overlast. In veel gevallen kun je gewoon thuis blijven.
                    </p>
                    <p className="mt-10 text-sm/6 text-gray-600 max-w-3xl">
                        Wil je niet alleen bedragen zien, maar ook de inhoudelijke uitleg per maatregel?<br/>{" "}
                        <Link
                            href="/renovatiemogelijkheden"
                            className="font-semibold text-emerald-700 hover:text-emerald-900"
                        >
                            Bekijk de renovatiemogelijkheden →
                        </Link>
                    </p>

                    {/*Gradient divider*/}
                    <div className="h-px w-full bg-gradient-to-r from-amber-200 via-emerald-200 to-lime-200 mt-10 mb-0"/>

                    {/* Sectie: andere voordelen dan alleen geld */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Het gaat niet alleen om geld
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 max-w-3xl">
                            De meeste bewoners merken de financiële besparing pas op de energierekening,
                            maar het dagelijkse verschil zit vaak in comfort. Dat is lastig in euro’s uit te drukken,
                            maar wel belangrijk om mee te nemen.
                        </p>

                        <div className="mt-5 grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Minder koude plekken in huis
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Je voelt veel minder trek bij ramen of langs muren. Kamers voelen overal
                                    gelijkmatiger aan.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Rustigere temperatuur door de dag heen
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Je huis koelt minder snel af en reageert minder heftig op het weer buiten. Minder
                                    pieken en dalen.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Woningwaarde en verkoopbaarheid
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Een beter energielabel en lagere maandlasten maken je woning aantrekkelijker voor
                                    kopers en kunnen zich vertalen in een hogere verkoopprijs.
                                </p>
                            </div>
                        </div>
                        <p className="mt-3 text-xs text-gray-500">
                            Meer over wooncomfort{" "}
                            <Link
                                href="/wooncomfort"
                                className="font-semibold text-emerald-700 hover:text-emerald-900"
                            >
                                Bekijk de pagina →
                            </Link>
                        </p>
                    </section>

                    {/*Gradient divider*/}
                    <div className="h-px w-full bg-gradient-to-r from-amber-200 via-emerald-200 to-lime-200 mt-11 mb-0"/>

                    {/* Sectie: subsidies en regelingen (praktisch en concreet) */}
                    <section id="subsidies" className="mt-9">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Subsidies en leningen: wat kun je ongeveer verwachten?
                        </h2>

                        <p className="mt-2 text-sm text-gray-600 max-w-3xl">
                            De meeste bewoners betalen een deel zelf en krijgen een deel terug via subsidie of een
                            lening. Hieronder zie je wat de belangrijkste regelingen in de praktijk vaak betekenen.
                        </p>

                        <div className="mt-5 grid gap-4 md:grid-cols-3 text-sm text-gray-700">
                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-sm font-semibold text-gray-900">
                                    1. Landelijke subsidie (ISDE)
                                </h3>
                                <p className="mt-2">
                                    Voor isolatiemaatregelen en warmtepompen kun je via de landelijke regeling
                                    <strong> een deel van de investering terugkrijgen</strong>. De vergoeding wordt
                                    berekend per m² isolatie of per installatie (bijvoorbeeld een warmtepomp).
                                </p>
                                <p className="mt-2 text-xs text-gray-500">
                                    Vaak krijg je <strong>extra subsidie als je twee isolatiemaatregelen
                                    combineert</strong>,
                                    bijvoorbeeld spouwmuur + vloer.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-sm font-semibold text-gray-900">
                                    2. Gemeentelijke regelingen
                                </h3>
                                <p className="mt-2">
                                    Veel gemeenten bieden extra <strong>subsidies, waardebonnen of een gratis
                                    energiecoach</strong>.
                                    Soms wordt een deel van isolatie, advies of kleine maatregelen vergoed.
                                </p>
                                <p className="mt-2 text-xs text-gray-500">
                                    Check op de pagina “duurzaam wonen” of het “energieloket” van jouw gemeente
                                    welke regelingen nu lopen.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-sm font-semibold text-gray-900">
                                    3. Leningen voor verduurzaming
                                </h3>
                                <p className="mt-2">
                                    Met speciale <strong>verduurzamingsleningen</strong> kun je de kosten spreiden
                                    over meerdere jaren. De rente is vaak lager dan bij een gewone persoonlijke lening.
                                </p>
                                <p className="mt-2 text-xs text-gray-500">
                                    Deze leningen zijn meestal alleen te gebruiken voor isolatie, glas, warmtepompen,
                                    zonnepanelen en ventilatie.
                                </p>
                            </div>
                        </div>

                        <h3 className="mt-8 text-sm font-semibold text-gray-900">
                            Wat betekent dit concreet voor jou?
                        </h3>

                        <ul className="mt-3 space-y-2 text-sm text-gray-700 max-w-3xl">
                            <li className="flex gap-2">
                                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500 mt-1"/>
                                <span>
        Bij een gemiddelde tussenwoning kun je vaak rekenen op{" "}
                                    <strong>een bijdrage van enkele honderden tot soms meer dan duizend euro</strong>{" "}
                                    aan subsidie, afhankelijk van het aantal m² en het type maatregel.
      </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500 mt-1"/>
                                <span>
        Combineer je <strong>twee isolatiemaatregelen</strong> (bijvoorbeeld spouwmuur
        en vloer), dan valt de totale subsidie in veel gevallen duidelijk hoger uit
        dan bij één losse stap.
      </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500 mt-1"/>
                                <span>
        Gemeentelijke regelingen en leningen kunnen er net voor zorgen dat een maatregel
        <strong> nu wél binnen bereik komt</strong> in plaats van “ooit later”.
      </span>
                            </li>
                        </ul>

                        <p className="mt-4 text-sm text-gray-600 max-w-3xl">
                            Op deze site focussen we op <strong>logische stappen voor jouw woning</strong>.
                            De exacte bedragen en voorwaarden veranderen regelmatig. Gebruik deze uitleg om
                            in te schatten wat er ongeveer mogelijk is en check voor actuele cijfers de
                            landelijke subsidieregeling en de website van jouw gemeente als je offertes
                            gaat aanvragen.
                        </p>
                    </section>


                    {/*Gradient divider*/}
                    <div className="h-px w-full bg-gradient-to-r from-amber-200 via-emerald-200 to-lime-200 mt-10 mb-0"/>

                    <section className="mx-auto mt-10 max-w-5xl pb-16">
                        <div
                            className="rounded-2xl border border-emerald-100 bg-emerald-50/60 px-6 py-6 sm:py-8 shadow-sm">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                                Klaar om er echt werk van te maken?
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-gray-700 max-w-3xl">
                                Je weet nu wat renovatie ongeveer kost en oplevert. Op{" "}
                                <strong>Actie ondernemen</strong> zie je hoe je dit omzet in concrete stappen,
                                en via <strong>Woningtypes</strong> zie je welke maatregelen logisch zijn voor jouw
                                huis.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-3">
                                <Link
                                    href="/actie-ondernemen"
                                    className="inline-flex items-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
                                >
                                    Naar: Actie ondernemen
                                    <span className="ml-1" aria-hidden>→</span>
                                </Link>
                                <Link
                                    href="/woningtypes"
                                    className="inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-emerald-900"
                                >
                                    Of bekijk eerst woningtypes →
                                </Link>
                            </div>
                        </div>
                    </section>


                </div>
            </main>
        </div>
    );
}
