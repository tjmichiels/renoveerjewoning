import Link from "next/link";
import QuickBenefits from "./QuickBenefits";
import GradientBlob from "./GradientBlob";

type CTA = { label: string; href: string };
export default function Hero({
                                 title,
                                 subtitle,
                                 ctaPrimary,
                                 ctaSecondary,
                                 blob = { from: "from-indigo-200", via: "via-sky-200", to: "to-emerald-200" },
                             }: {
    title: string;
    subtitle: string;
    ctaPrimary: CTA;
    ctaSecondary?: CTA;
    blob?: { from: string; via: string; to: string };
}) {
    return (
        <section className="relative mx-auto max-w-4xl py-16 text-center">
            <GradientBlob from={blob.from} via={blob.via} to={blob.to} />

            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                {title}
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
                {subtitle}
            </p>

            <QuickBenefits />

            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    href={ctaPrimary.href}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {ctaPrimary.label}
                </Link>
                {ctaSecondary && (
                    <Link href={ctaSecondary.href} className="text-sm/6 font-semibold text-gray-900">
                        {ctaSecondary.label} <span aria-hidden="true">→</span>
                    </Link>
                )}
            </div>
        </section>
    );
}
