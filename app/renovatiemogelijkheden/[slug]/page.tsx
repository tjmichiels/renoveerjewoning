import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import { NAV } from "../../content/navigation";
import { getRenovationOptionBySlug, renovationOptions } from "../../content/renovatiemogelijkheden";

export function generateStaticParams() {
  return renovationOptions.map((o) => ({ slug: o.slug }));
}

function renderFormattedText(text: string) {
  if (!text) return null;

  return text.split("\n").map((line, index) => {
    if (line.startsWith("### ")) {
      return (
        <h3 key={index} className="text-xl font-semibold text-emerald-800 mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    }

    if (line.startsWith("* ")) {
      const content = line.replace("* ", "");
      const parts = content.split("**");

      return (
        <li key={index} className="ml-5 list-disc text-gray-700 mb-2 pl-1 leading-relaxed">
          {parts.map((part, i) =>
            i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900">{part}</strong> : part
          )}
        </li>
      );
    }

    if (line.trim() === "") {
      return <div key={index} className="h-2" />;
    }

    return (
      <p key={index} className="text-gray-700 mb-3 leading-relaxed">
        {line}
      </p>
    );
  });
}

export default function RenovationDetailPage({ params }: { params: { slug: string } }) {
  const option = getRenovationOptionBySlug(params.slug);
  if (!option) return notFound();

  return (
    <div className="bg-white">
      <Header navigation={NAV} />
      <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
        <div className="mx-auto max-w-4xl pb-16">
          <Link
            href="/renovatiemogelijkheden"
            className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
          >
            ← Terug naar overzicht
          </Link>

          {/* Title + summary + image (matches woningtypes layout) */}
          <section className="mt-5 grid items-start gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <header className="space-y-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                  {option.title}
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  {option.short}
                </p>
              </div>
            </header>

            {/* Image on the right - uses same approach as woningtypes */}
            <figure className="relative h-48 w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 md:h-56">
              <Image
                src={option.image}
                alt={option.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </figure>
          </section>

          {/* Divider between title/image and the main text */}
          <div className="mt-6 border-t border-gray-100" />

          <section className="mt-8">
            <div className="prose prose-emerald max-w-none text-gray-700">
              {renderFormattedText(option.renovationdetails)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}