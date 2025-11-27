// app/components/home/Hero.tsx
import QuickBenefits from "./QuickBenefits";
import GradientBlob from "../layout/GradientBlob";

export default function Hero({
                                 title,
                                 subtitle,
                                 blob = { from: "from-indigo-200", via: "via-sky-200", to: "to-emerald-200" },
                             }: {
    title: string;
    subtitle: string;
    blob?: { from: string; via: string; to: string };
}) {
    return (
        <section className="relative mx-auto max-w-4xl pt-12 pb-0 text-center">
            <GradientBlob from={blob.from} via={blob.via} to={blob.to} />

            <h1 className="font-emphasis text-5xl tracking-tight text-balance text-gray-900 sm:text-6xl">
                Weet je dat jouw woning je elk jaar{" "}
                <span className="font-extrabold text-emerald-700">honderden euro’s</span>{" "}
                kan opleveren?
            </h1>

            <p className="mt-6 text-lg font-medium text-pretty text-gray-800 sm:text-xl/8 font-friendly">
                {subtitle}
            </p>

            <QuickBenefits />
        </section>
    );
}
