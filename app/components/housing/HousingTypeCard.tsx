// app/components/HousingTypeCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { HousingType } from "../../content/housingTypes";

type Props = {
    type: HousingType;
};

export default function HousingTypeCard({ type }: Props) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            {/* Afbeelding met donkere overlay voor leesbare tekst */}
            <div className="relative h-40 w-full overflow-hidden">
                <Image
                    src={type.imageSrc}
                    alt={type.imageAlt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />

                <div className="absolute bottom-3 left-4 right-4 flex flex-col gap-1 text-left">
                    <h2 className="text-lg font-semibold text-white drop-shadow">
                        {type.title}
                    </h2>
                    {type.tagline && (
                        <p className="text-xs text-gray-100 drop-shadow-sm">
                            {type.tagline}
                        </p>
                    )}
                </div>
            </div>

            {/* Onderkant: besparing + CTA, verder niks */}
            <div className="flex items-center justify-between p-4">
                {type.yearlySavings && (
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-800">
            Besparing:{" "}
                        <span className="ml-1 font-semibold">{type.yearlySavings}</span>
          </span>
                )}

                <Link
                    href={`/woningtypes/${type.slug}`}
                    className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 shrink-0 inline-flex items-center"
                >
                    Bekijk maatregelen <span aria-hidden>→</span>
                </Link>
            </div>
        </article>
    );
}
