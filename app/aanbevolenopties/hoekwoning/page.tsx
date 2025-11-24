// app/aanbevolenopties/hoekwoning/page.tsx
import Header from "../../components/Header";
import { NAV } from "../../content/navigation";
import Link from "next/link";
import { Squares2X2Icon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import GradientBlob from "../../components/GradientBlob";
import SplitSection from "../../components/SplitSection";

export default function HoekwoningPage() {
  return (
    <div className="bg-white">
      <Header navigation={NAV} />

      <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8 flex flex-col">
        <GradientBlob from="from-emerald-200" via="via-yellow-200" to="to-sky-200" />
        <header className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-200">
              <Squares2X2Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h1 className="font-emphasis text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Hoekwoning
            </h1>
          </div>
        </header>

          {/*Hier moet wat informatie bij voor de betreffende woonsituatie.*/}

        <SplitSection
          eyebrow="Aanbevelingen"
          title="Maak optimaal gebruik van je hoekwoning"
          image={{ src: "/images/hoekwoning.jpg", alt: "Hoekwoning" }}
        >
          <ul className="list-disc pl-6">
            <li>Template 1</li>
            <li>Template 2</li>
            <li>Template 3</li>
          </ul>
        </SplitSection>

        <footer className="pb-12 mt-auto text-left">
          <Link
            href="/aanbevolenopties"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
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
