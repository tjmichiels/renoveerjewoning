// app/aanbevolenopties/vrijstaand/page.tsx
import  Header from "../../components/Header";
import { NAV } from "../../content/navigation";
import Link from "next/link";
import { HomeModernIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import GradientBlob from "../../components/GradientBlob";
import SplitSection from "../../components/SplitSection";

export default function VrijstaandPage() {
  return (
    <div className="bg-white">
      <Header navigation={NAV} />

      <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8 flex flex-col">
        <GradientBlob from="from-emerald-200" via="via-yellow-200" to="to-sky-200" />
        <header className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200">
              <HomeModernIcon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h1 className="font-emphasis text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Vrijstaand
            </h1>
          </div>
        </header>

        <SplitSection
          eyebrow="Aanbevelingen"
          title="Maximaal comfort voor je vrijstaande woning"
          image={{ src: "/images/vrijstaand.jpeg", alt: "Vrijstaande woning" }}
        >
            {/*Hier moet wat informatie bij voor de betreffende woonsituatie.*/}

          <ul className="list-disc pl-6">
              <li>Template 1</li>
              <li>Template 2</li>
              <li>Template 3</li>
          </ul>
        </SplitSection>

        <footer className="pb-12 mt-auto text-left">
          <Link
            href="/aanbevolenopties"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600"
            aria-label="Ga terug naar de aanbevolen opties"
            title="Ga terug naar de aanbevolen opties"
          >
            <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
            Terug naar aanbevolen
          </Link>
        </footer>
      </main>
    </div>
  );
}
