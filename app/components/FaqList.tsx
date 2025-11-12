import React from "react";
import {palettes} from "@/app/lib/theme";

export type FaqIcon = React.ElementType;

export type FaqEntry = {
    q: string;
    a: React.ReactNode;
    Icon?: FaqIcon;
};

export default function FaqList({
                                    items,
                                    palette = palettes.indigoSkyEmerald,
                                    className = "",
                                    columns = 2,
                                }: {
    items: FaqEntry[];
    palette?: readonly string[];
    className?: string;
    columns?: 1 | 2;
}) {
    return (
        <section className={`mx-auto w-full max-w-5xl pt-0 pb-8 text-left ${className}`}>
            <div
                className={`mt-5 grid grid-cols-1 gap-4 md:mt-6 ${
                    columns === 2 ? "md:grid-cols-2 md:gap-6" : ""
                }`}
            >
                {items.map(({q, a, Icon}, idx) => {
                    const color = palette[idx % palette.length];
                    return (
                        <article
                            key={idx}
                            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                        >
                            <div
                                className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${color}`}/>
                            <div className="relative">
                                <div className="flex items-center gap-2">
                                    {Icon ? (
                                        <span
                                            className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${color} ring-1 ring-black/5`}
                                            aria-hidden="true"
                                        >
                      <Icon className="h-4 w-4 text-gray-700"/>
                    </span>
                                    ) : null}
                                    <h3 className="text-base font-semibold leading-tight text-gray-900">{q}</h3>
                                </div>
                                <p className="mt-2 text-[15px] leading-6 text-gray-600">{a}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
