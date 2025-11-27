import Link from "next/link";
    import { notFound } from "next/navigation";
    import Header from "../../components/layout/Header"; // Pas het pad aan indien nodig
    import { NAV } from "../../content/navigation"; // Pas het pad aan indien nodig
    import { getRenovationOptionBySlug, renovationOptions } from "../../content/renovatiemogelijkheden"; // Pas het pad aan indien nodig

    export function generateStaticParams() {
        return renovationOptions.map((o) => ({ slug: o.slug }));
    }

    // Hulpfunctie om de 'markdown-achtige' tekst netjes te renderen
    function renderFormattedText(text: string) {
        if (!text) return null;

        return text.split('\n').map((line, index) => {
            // 1. Kopjes (###)
            if (line.startsWith('### ')) {
                return (
                    <h3 key={index} className="text-xl font-semibold text-emerald-800 mt-8 mb-3">
                        {line.replace('### ', '')}
                    </h3>
                );
            }

            // 2. Lijstitems (*) met ondersteuning voor dikgedrukte tekst (\*\*text\*\*)
            if (line.startsWith('* ')) {
                const content = line.replace('* ', '');
                // Split de tekst op '**' om dikgedrukte delen te vinden
                const parts = content.split('**');

                return (
                    <li key={index} className="ml-5 list-disc text-gray-700 mb-2 pl-1 leading-relaxed">
                        {parts.map((part, i) =>
                            // Elk oneven deel was omsloten door **, dus maak dat dikgedrukt
                            i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900">{part}</strong> : part
                        )}
                    </li>
                );
            }

            // 3. Lege regels (voor witruimte)
            if (line.trim() === '') {
                return <div key={index} className="h-2"></div>;
            }

            // 4. Gewone paragrafen
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
                    <div className="mx-auto max-w-4xl pb-16 relative z-20 bg-white lg:pr-60"> {/* higher z so content sits above the positioned image; increased lg padding to avoid overlap */}

                        {/* Large-screen positioned image (top-right) - now uses same sizing as woningtypes */}
                        <div className="hidden lg:block absolute -right-12 -top-8 rounded-xl border border-gray-100 shadow-sm overflow-hidden z-0 pointer-events-none w-64 h-40 sm:w-72 sm:h-44">
                            <img
                                src={option.image}
                                alt={option.imageAlt}
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>

                        {/* Small-screen full-width image (keeps original behaviour on mobile) */}
                        <div className="mt-6 overflow-hidden rounded-xl border border-gray-100 shadow-sm lg:hidden">
                            <img
                                src={option.image}
                                alt={option.imageAlt}
                                className="h-64 w-full object-cover sm:h-80"
                                loading="eager"
                            />
                        </div>

                        <Link
                            href="/renovatiemogelijkheden"
                            className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
                        >
                            ← Terug naar overzicht
                        </Link>

                        <header className="mt-6 border-b border-gray-100 pb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                                    {option.title}
                                </h1>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                {option.short}
                            </p>
                        </header>

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