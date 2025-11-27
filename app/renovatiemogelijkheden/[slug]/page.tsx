import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import { NAV } from "../../content/navigation";
import { getRenovationOptionBySlug, renovationOptions } from "../../content/renovatiemogelijkheden";

export function generateStaticParams() {
  return renovationOptions.map((o) => ({ slug: o.slug }));
}

export default function RenovationDetailPage({ params }: { params: { slug: string } }) {
  const option = getRenovationOptionBySlug(params.slug);
  if (!option) return notFound();

  return (
    <div className="bg-white">
      <Header navigation={NAV} />
      <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
        <div className="mx-auto max-w-5xl pb-16">
          <Link href="/renovatiemogelijkheden" className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
            ← Terug naar renovatiemogelijkheden
          </Link>

          <header className="mt-4">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">{option.title}</h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600">{option.short}</p>
          </header>

          <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">In het kort</h2>
            <p className="mt-2 text-gray-700">{option.details}</p>
          </section>

          <section className="mt-6">
            <h3 className="text-base font-semibold text-gray-900"></h3>
            <p className="mt-2 text-sm text-gray-600">
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
