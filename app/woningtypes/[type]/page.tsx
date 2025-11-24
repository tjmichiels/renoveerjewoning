// app/woningtypes/[type]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import { NAV } from "../../content/navigation";
import { getHousingTypeBySlug, housingTypes } from "../../content/housingTypes";

type Props = {
    params: { type: string };
};

export function generateStaticParams() {
    return housingTypes.map((t) => ({ type: t.slug }));
}

export default function HousingTypeDetailPage({ params }: Props) {
    const housingType = getHousingTypeBySlug(params.type);

    if (!housingType) {
        return notFound();
    }

    return (
        <div className="bg-white">
            <Header navigation={NAV} />

            <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
                <div className="mx-auto max-w-5xl pb-16">
                    {/* Teruglink */}
                    <Link
                        href="/woningtypes"
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                    >
                        ← Terug naar woningtypes
                    </Link>

                    {/* Hoofdblok: titel + tekst + afbeelding */}
                    <section className="mt-4 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
                        <header>
                            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                                {housingType.title}
                            </h1>
                            <p className="mt-2 text-gray-600">
                                {housingType.intro}
                            </p>

                            {housingType.yearlySavings && (
                                <p className="mt-3 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                                    Gemiddelde besparing:{" "}
                                    <span className="ml-1 font-semibold">
                    {housingType.yearlySavings}
                  </span>
                                </p>
                            )}

                            <div className="mt-6">
                                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                                    Wat vaak speelt bij dit type woning
                                </h2>
                                <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
                                    {housingType.typicalIssues.map((issue, idx) => (
                                        <li key={idx} className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                            <span>{issue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </header>

                        {/* Afbeelding rechts */}
                        <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 md:h-56">
                            <Image
                                src={housingType.imageSrc}
                                alt={housingType.imageAlt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </section>

                    {/* Maatregelen */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Maatregelen die vaak goed passen bij dit type woning
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Dit zijn geen exacte adviezen, maar logische eerste stappen die bij dit soort woningen vaak veel opleveren.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {housingType.measures.map((measure, idx) => (
                                <article
                                    key={idx}
                                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                                >
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {measure.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-600">
                                        {measure.description}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-800">
                      Kosten: <span className="font-semibold">{measure.costRange}</span>
                    </span>
                                        {measure.savingsRange && (
                                            <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-800">
                        Besparing: <span className="font-semibold">{measure.savingsRange}</span>
                      </span>
                                        )}
                                    </div>
                                    {measure.note && (
                                        <p className="mt-2 text-xs text-gray-500">
                                            {measure.note}
                                        </p>
                                    )}
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
