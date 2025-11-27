// app/financieel/page.tsx
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import { NAV } from "../content/navigation";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Wat levert renovatie financieel op?",
    description:
        "Een helder overzicht van indicatieve kosten, besparingen en terugverdientijden van veelvoorkomende renovatiemaatregelen, plus uitleg over subsidies en logische eerste stappen.",
};

export default function FinancieelPage() {
    return (
        <div className="bg-white">
            <Header navigation={NAV} />

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

                    {/* Sectie: drie belangrijkste maatregelen */}
                    <section className="mt-10">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Globale kosten en besparing per maatregel
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 max-w-3xl">
                            De bedragen hieronder zijn <strong>ruwe richtlijnen</strong> voor een gemiddelde jaren 80-woning.
                            Werkelijke kosten hangen af van oppervlak, staat van de woning en gekozen uitvoerder.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {/* Spouwmuurisolatie */}
                            <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
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
                            <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
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
                            <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
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

                    {/* Sectie: andere voordelen dan alleen geld */}
                    <section className="mt-12">
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
                                    Minder tocht & temperatuurschommelingen
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Geen koudeval meer bij ramen en minder “warme bovenverdieping, koude begane grond”.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Rustiger binnenklimaat
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Een beter geïsoleerde woning verandert minder snel van temperatuur,
                                    waardoor het in de winter én in de zomer aangenamer is.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Woningwaarde en verkoopbaarheid
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Een beter energielabel en lagere maandlasten maken je woning vaak aantrekkelijker
                                    voor toekomstige kopers.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sectie: subsidies en regelingen (hoog over, geen calculator) */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Subsidies en regelingen
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 max-w-3xl">
                            Voor veel energiebesparende maatregelen zijn subsidies of leningen beschikbaar.
                            De exacte bedragen en voorwaarden verschillen per periode en soms per gemeente,
                            maar grofweg kun je rekening houden met:
                        </p>

                        <ul className="mt-4 space-y-2 text-sm text-gray-700">
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                <span>
                  <strong>Landelijke subsidie</strong> voor isolatiemaatregelen en
                  soms warmtepompen (bedragen per m² of per installatie).
                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                <span>
                  <strong>Gemeentelijke regelingen</strong> zoals extra subsidies of een
                  energiecoach die met je meekijkt.
                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                <span>
                  <strong>Leningen met lagere rente</strong> speciaal voor verduurzaming
                  (bijvoorbeeld via een energiebespaarlening).
                </span>
                            </li>
                        </ul>

                        <p className="mt-4 text-sm text-gray-600 max-w-3xl">
                            Op deze site laten we vooral zien <strong>welke stappen logisch zijn</strong> voor jouw woning.
                            De exacte subsidiebedragen kun je het beste controleren bij de overheid of je gemeente
                            op het moment dat je echt offertes gaat opvragen.
                        </p>
                    </section>

                    {/* Laatste sectie: logische eerste stap / CTA */}
                    <section  id="subsidies" className="mt-12">
                        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 px-6 py-6 sm:py-7 shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Wat is een logische eerste stap voor jou?
                            </h2>
                            <p className="mt-2 text-sm text-gray-700 max-w-3xl">
                                Wil je nu concreet zien wat logisch is voor jouw woning?
                                Kies dan eerst het woningtype dat het meest op jouw huis lijkt,
                                of bekijk nog even de veelgestelde vragen als je nog twijfels hebt.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <Link
                                    href="/woningtypes"
                                    className="inline-flex items-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
                                >
                                    Bekijk maatregelen per woningtype
                                    <span className="ml-1" aria-hidden>
                    →
                  </span>
                                </Link>
                                <Link
                                    href="/faq"
                                    className="inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-emerald-900"
                                >
                                    Nog vragen? Bekijk de FAQ
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
