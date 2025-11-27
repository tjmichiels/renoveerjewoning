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
                        <p className="mt-2 text-gray-700 text-lg max-w-2xl font-friendly">
                            Kleine aanpassingen kunnen je woning veel comfortabeler maken. Minder
                            tocht, minder geluid en een veel gelijkmatiger temperatuur.
                        </p>
                    </header>

                    {/* Comfortvoordelen */}
                    <section className="mt-10">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Waar je comfort vooral wint
                        </h2>

                        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
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


                    {/* Maatregelen */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Maatregelen die comfort direct verbeteren
                        </h2>

                        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
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

                    <section className="mx-auto mt-10 max-w-5xl pb-16">
                        <div className="rounded-2xl border border-gray-100 bg-white px-5 py-5 shadow-sm">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Comfort verbeteren in jouw eigen woning?
                            </h2>
                            <p className="mt-2 text-sm text-gray-700">
                                Op de pagina <strong>Actie ondernemen</strong> zie je welke stappen je nu
                                al kunt zetten: van inzicht in je woning tot het aanvragen van offertes.
                            </p>
                            <Link
                                href="/actie-ondernemen"
                                className="mt-3 inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                            >
                                Bekijk de stappen →
                            </Link>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
