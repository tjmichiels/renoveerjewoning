// app/aanbevolenopties/page.tsx
import Header from "../components/Header";
import {NAV} from "../content/navigation";
import Link from "next/link";
import { HomeModernIcon, HomeIcon, Squares2X2Icon, ArrowRightIcon } from "@heroicons/react/24/outline";
import GradientBlob from "../components/GradientBlob";

export default function AanbevolenOptiesPage() {
    return (
        <div className="bg-white">
            <Header navigation={NAV} />

            <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
                <GradientBlob from="from-emerald-200" via="via-yellow-200" to="to-sky-200" />
                <header className="mx-auto max-w-5xl text-center">
                    <h1 className="font-emphasis text-5xl tracking-tight text-gray-900 sm:text-6xl mb-4">
                        Aanbevolen opties
                    </h1>
                    <p className="mt-2 text-lg font-medium text-gray-800 sm:text-xl font-friendly">
                        Hier vind je opties die goed passen bij jouw woning en situatie.
                    </p>
                </header>

                <section className="mx-auto max-w-5xl pt-10 pb-16">
                    <h2 className="sr-only">Kies je woningtype</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Tussenwoning (groen accent) */}
                        <Link
                            href="/aanbevolenopties/tussenwoning"
                            className="group rounded-xl border border-green-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                            aria-label="Ga naar Tussenwoning"
                        >
                            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-200">
                                <HomeIcon className="h-8 w-8" aria-hidden="true" />
                            </span>
                            <span className="mt-4 block text-lg font-semibold text-gray-900">Tussenwoning</span>
                            <span className="mt-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-green-700">
                                Bekijk aanbevelingen
                                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
                            </span>
                        </Link>

                        {/* Hoekwoning (blauw accent) */}
                        <Link
                            href="/aanbevolenopties/hoekwoning"
                            className="group rounded-xl border border-blue-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                            aria-label="Ga naar Hoekwoning"
                        >
                            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-200">
                                <Squares2X2Icon className="h-8 w-8" aria-hidden="true" />
                            </span>
                            <span className="mt-4 block text-lg font-semibold text-gray-900">Hoekwoning</span>
                            <span className="mt-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-700">
                                Bekijk aanbevelingen
                                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
                            </span>
                        </Link>

                        {/* Vrijstaand (amber/oranje accent) */}
                        <Link
                            href="/aanbevolenopties/vrijstaand"
                            className="group rounded-xl border border-amber-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md hover:border-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600"
                            aria-label="Ga naar Vrijstaand"
                        >
                            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                                <HomeModernIcon className="h-8 w-8" aria-hidden="true" />
                            </span>
                            <span className="mt-4 block text-lg font-semibold text-gray-900">Vrijstaand</span>
                            <span className="mt-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-amber-700">
                                Bekijk aanbevelingen
                                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
                            </span>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
