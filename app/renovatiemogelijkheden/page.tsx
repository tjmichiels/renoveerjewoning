import Link from "next/link";
import Header from "../components/Header";
import { NAV } from "../content/navigation";
import { renovationOptions } from "../content/renovatiemogelijkheden";
import {
  HomeModernIcon,
  WindowIcon,
  FireIcon,
  SunIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  insulation: HomeModernIcon,
  windows: WindowIcon,
  heating: FireIcon,
  solar: SunIcon,
  ventilation: ArrowPathIcon,
} as const;

export default function Renovatiemogelijkheden() {
  return (
    <div className="bg-white">
      <Header navigation={NAV} />
      <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
        <header className="mx-auto max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Renovatiemogelijkheden
          </h1>
          <p className="mt-2 text-gray-600">
            Kies een categorie om praktisch aan de slag te gaan.
          </p>
        </header>

        <section className="mx-auto max-w-5xl pb-16 pt-8">
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {renovationOptions.map((opt) => {
              const Icon = iconMap[opt.icon];
              return (
                <Link
                  key={opt.slug}
                  href={`/renovatiemogelijkheden/${opt.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center rounded-lg bg-emerald-50 p-2">
                      <Icon className="h-5 w-5 text-emerald-700" aria-hidden />
                    </span>
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-emerald-800">
                      {opt.title}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{opt.short}</p>
                  <span className="mt-3 text-sm font-medium text-emerald-700">Meer over {opt.title} →</span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}