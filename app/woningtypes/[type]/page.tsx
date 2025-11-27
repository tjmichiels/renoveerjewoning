// app/woningtypes/[type]/page.tsx
import type {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import {notFound} from "next/navigation";
import Header from "../../components/layout/Header";
import {NAV} from "../../content/navigation";
import {
    getHousingTypeBySlug,
    housingTypes,
    MeasureIconKey,
} from "../../content/housingTypes";
import {
    BanknotesIcon,      // Kosten
    BoltIcon,           // Besparing
    InformationCircleIcon,

    BuildingStorefrontIcon,
    BuildingOfficeIcon,
    Square3Stack3DIcon,
    WindowIcon,
    WrenchIcon,
    HomeModernIcon,

    UserGroupIcon,
} from "@heroicons/react/24/outline";


type Props = {
    params: { type: string };
};

export function generateStaticParams() {
    return housingTypes.map((t) => ({type: t.slug}));
}


// ➜ hier metadata per woningtype
export async function generateMetadata(
    {params}: Props
): Promise<Metadata> {
    const housingType = getHousingTypeBySlug(params.type);

    if (!housingType) {
        return {
            title: "Woningtype niet gevonden",
            description: "Het gekozen woningtype kon niet worden gevonden.",
        };
    }

    return {
        title: `${housingType.title} – logische renovatiemaatregelen en besparing`,
        description: `Bekijk welke renovatiemaatregelen vaak goed passen bij een ${housingType.title}, met globale kosten, mogelijke besparing en praktische uitleg.`,
    };
}

// mapping van type → icoon
const measureIconMap: Record<MeasureIconKey, React.ElementType> = {
    wall: BuildingStorefrontIcon,
    cavity: BuildingOfficeIcon,
    floor: Square3Stack3DIcon,
    glass: WindowIcon,
    small: WrenchIcon,
    roof: HomeModernIcon,
};

export default function HousingTypeDetailPage({params}: Props) {
    const housingType = getHousingTypeBySlug(params.type);

    if (!housingType) {
        return notFound();
    }

    return (
        <div className="bg-white">
            <Header navigation={NAV}/>

            <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
                <div className="mx-auto max-w-5xl pb-16">
                    {/* Teruglink */}
                    <Link
                        href="/woningtypes"
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                    >
                        ← Terug naar woningtypes
                    </Link>

                    {/* Hoofdblok: titel + samenvatting + afbeelding */}
                    <section className="mt-4 grid items-start gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                        <header className="space-y-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                                    {housingType.title}
                                </h1>
                                <p className="mt-2 text-sm sm:text-base text-gray-600">
                                    {housingType.intro}
                                </p>
                            </div>

                            {housingType.yearlySavings && (
                                <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                                    <BanknotesIcon className="h-4 w-4" aria-hidden/>
                                    <span>
                    Gemiddelde besparing:{" "}
                                        <span className="font-semibold">
                      {housingType.yearlySavings}
                    </span>
                  </span>
                                </p>
                            )}

                            <div className="mt-2 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
                                <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Wat vaak speelt bij dit type woning
                                </h2>
                                <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                                    {housingType.typicalIssues.map((issue, idx) => (
                                        <li key={idx} className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"/>
                                            <span>{issue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </header>

                        {/* Afbeelding rechts */}
                        <figure
                            className="relative h-48 w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 md:h-56">
                            <Image
                                src={housingType.imageSrc}
                                alt={housingType.imageAlt}
                                fill
                                className="object-cover"
                            />
                        </figure>
                    </section>

                    {/* Maatregelen */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Maatregelen die vaak goed passen
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Deze maatregelen leveren bij dit woningtype meestal de meeste winst op.
                        </p>

                        {/*Sociale vergelijking: "Wat anderen vaak doen"*/}
                        {housingType.socialProof && (
                            <div
                                className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-[13px] text-emerald-900 flex items-start gap-3">
                                <span
                                    className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                                    <UserGroupIcon className="h-4 w-4 text-emerald-700" aria-hidden/>
                                </span>
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                                        Wat anderen vaak doen
                                    </p>
                                    <p className="mt-0.5 leading-relaxed">
                                        {housingType.socialProof}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {housingType.measures.map((measure, idx) => {
                                const Icon = measureIconMap[measure.icon];
                                return (
                                    <article
                                        key={idx}
                                        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                    >
                                        {/* hover-afbeelding over de achtergrond */}
                                        <div
                                            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <Image
                                                src={measure.imageSrc}
                                                alt={measure.imageAlt}
                                                fill
                                                className="object-cover"
                                            />
                                            {/* lichte overlay voor leesbaarheid */}
                                            <div className="absolute inset-0 bg-white/80"/>
                                        </div>

                                        {/* inhoud boven de overlay */}
                                        <div className="relative">
                                            {/* Titel + icoon op één regel */}
                                            <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-lg bg-emerald-50 p-1.5">
              <Icon className="h-4 w-4 text-emerald-700" aria-hidden/>
            </span>
                                                <h3 className="text-base font-semibold text-gray-900">
                                                    {measure.title}
                                                </h3>
                                            </div>

                                            {/* Beschrijving */}
                                            <p className="mt-2 text-sm text-gray-600">
                                                {measure.description}
                                            </p>

                                            {/* kosten + besparing */}
                                            <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-gray-700">
              <BanknotesIcon className="h-3.5 w-3.5" aria-hidden/>
              <span>
                Kosten:{" "}
                  <span className="font-semibold">{measure.costRange}</span>
              </span>
            </span>

                                                {measure.savingsRange && (
                                                    <span
                                                        className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-emerald-800">
                <BoltIcon className="h-3.5 w-3.5" aria-hidden/>
                <span>
                  Besparing:{" "}
                    <span className="font-semibold">
                    {measure.savingsRange}
                  </span>
                </span>
              </span>
                                                )}
                                            </div>

                                            {/* optionele toelichting */}
                                            {measure.note && (
                                                <p className="mt-3 flex items-start gap-1.5 text-xs text-gray-500">
                                                    <InformationCircleIcon
                                                        className="mt-0.5 h-3.5 w-3.5"
                                                        aria-hidden
                                                    />
                                                    <span>{measure.note}</span>
                                                </p>
                                            )}
                                        </div>
                                    </article>
                                );

                            })}
                        </div>
                    </section>

                    <section className="mt-10">
                        <div className="rounded-2xl border border-gray-100 bg-white px-5 py-5 shadow-sm">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Hoe merk je dit in je woning?
                            </h2>
                            <p className="mt-2 text-sm text-gray-700">
                                Minder tocht, warmere kamers en een stiller huis. Ontdek hoe renovatie
                                jouw wooncomfort direct verbetert.
                            </p>

                            <Link
                                href="/wooncomfort"
                                className="mt-3 inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                            >
                                Meer over wooncomfort →
                            </Link>
                        </div>
                    </section>


                    <section className="mt-10">
                        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-5 py-5 sm:py-6">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Met deze maatregelen aan de slag?
                            </h2>
                            <p className="mt-2 text-sm text-gray-700">
                                Op <strong>Actie ondernemen</strong> helpen we je om dit om te zetten
                                in een concreet plan: wat je eerst doet, hoe je offertes kunt vergelijken
                                en waar je op moet letten.
                            </p>
                            <Link
                                href="/actie-ondernemen"
                                className="mt-3 inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-emerald-900"
                            >
                                Naar: Actie ondernemen →
                            </Link>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
