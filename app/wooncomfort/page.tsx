import { Metadata } from "next";
import Header from "../components/layout/Header";
import { NAV } from "../content/navigation";
import {
    BoltIcon,
    ShieldCheckIcon,
    SunIcon,
    SparklesIcon,
    WindowIcon,
    HomeModernIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Meer wooncomfort – minder tocht, meer rust in huis",
    description:
        "Ontdek hoe isolatie, ventilatie en betere ramen je comfort direct verhogen. Minder tocht, minder geluid, meer warmtebehoud.",
};

export default function WooncomfortPage() {
    const benefits = [
        {
            icon: ShieldCheckIcon,
            title: "Minder tocht & koude plekken",
            text: "Met isolatie en kierdichting voelt je woning overal gelijkmatiger aan. Geen koude hoeken of trek langs ramen en deuren.",
        },
        {
            icon: SunIcon,
            title: "Gelijkere temperatuur in huis",
            text: "Je huis koelt minder snel af. De temperatuur schommelt minder, waardoor het prettiger aanvoelt in alle ruimtes.",
        },
        {
            icon: SparklesIcon,
            title: "Frissere lucht & minder vochtproblemen",
            text: "Met goede ventilatie en isolatie heb je minder condens, minder vocht en een frissere lucht in huis.",
        },
    ];


    const measures = [
        {
            icon: HomeModernIcon,
            title: "Spouwmuurisolatie",
            text: "Verwarmt je woonkamer sneller en houdt tocht uit de muren.",
            link: "/woningtypes",
        },
        {
            icon: WindowIcon,
            title: "HR++ glas",
            text: "Merkbaar minder kou bij ramen en veel minder geluid.",
            link: "/woningtypes",
        },
        {
            icon: BoltIcon,
            title: "Vloerisolatie",
            text: "Warme voeten en geen koude trek meer van de kruipruimte.",
            link: "/woningtypes",
        },
    ];

    return (
        <div className="bg-white">
            <Header navigation={NAV} />

            <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">

                <div className="mx-auto max-w-5xl pb-20">
                    <header>
                        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                            Meer wooncomfort
                        </h1>
                        <p className="mt-2 text-gray-700 text-lg/6.5 max-w-2xl font-friendly">
                            Kleine aanpassingen kunnen je woning veel comfortabeler maken. Minder
                            tocht, minder geluid en een veel gelijkmatiger temperatuur.
                        </p>
                    </header>

                    {/* Comfortvoordelen */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Waar je comfort vooral wint
                        </h2>

                        <ul className="mt-3 grid gap-6 sm:grid-cols-2">
                            {benefits.map(({icon: Icon, title, text}, i) => (
                                <li
                                    key={i}
                                    className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"
                                >
                                    <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center rounded-lg bg-emerald-50 p-2">
            <Icon className="h-6 w-6 text-emerald-700"/>
          </span>
                                        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-700">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <div className="h-px w-full bg-gradient-to-r from-amber-200 via-emerald-200 to-lime-200 mt-11 mb-10"/>


                    {/* Maatregelen */}
                    <section className="mt-0">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Maatregelen die comfort direct verbeteren
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600 max-w-3xl">
                            Dit zijn typische maatregelen waar bewoners het comfort het sterkst van merken. <br/>
                            Wil je weten wat ze ongeveer kosten en besparen?{" "}
                            <Link
                                href="/financieel"
                                className="font-semibold text-emerald-700 hover:text-emerald-900"
                            >
                                Bekijk de financiële kant →
                            </Link>
                        </p>

                        <ul className="mt-5 grid gap-6 sm:grid-cols-3">
                            {measures.map(({icon: Icon, title, text, link}, i) => (
                                <li
                                    key={i}
                                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                >
                                    <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center rounded-lg bg-emerald-50 p-2">
                      <Icon className="h-5 w-5 text-emerald-700"/>
                    </span>
                                        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600">{text}</p>
                                    <Link
                                        href={link}
                                        className="mt-3 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                                    >
                                        Bekijk wat dit oplevert →
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                        <p>
                            Veel van deze verbeteringen zijn sneller klaar dan je verwacht.
                            Spouwmuurisolatie duurt vaak maar een paar uur,
                            HR++-glas wordt meestal binnen één dag geplaatst,
                            en vloerisolatie gebeurt vanuit de kruipruimte. Je hoeft meestal niets te
                            verplaatsen en kunt gewoon thuis blijven.
                        </p>
                    </div>


                    <section className="mx-auto mt-16 max-w-5xl pb-16">
                        <div
                            className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-6 py-6 sm:py-7 shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Wil je dit comfort ook in jouw woning?
                            </h2>
                            <p className="mt-2 text-sm text-gray-700 max-w-3xl">
                                Op <strong>Actie ondernemen</strong> zie je welke stappen
                                logisch zijn
                                om nu te zetten — van inzicht in je woning tot het aanvragen van offertes.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <Link
                                    href="/actie-ondernemen"
                                    className="inline-flex items-center rounded-full bg-emerald-700 px-5 py-2.5
                           text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
                                >
                                    Bekijk de stappen
                                    <span className="ml-1" aria-hidden>→</span>
                                </Link>
                            </div>
                        </div>
                    </section>


                </div>
            </main>
        </div>
    );
}
