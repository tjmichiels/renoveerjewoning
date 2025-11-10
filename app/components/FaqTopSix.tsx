// app/components/FaqTopSix.tsx
"use client";

import React from "react";

type FaqItem = {
    q: string;
    a: React.ReactNode;
};

const faqs: FaqItem[] = [
    {
        q: "Wat kost een woningrenovatie gemiddeld?",
        a: (
            <>
                Een woning energiezuiniger maken hoeft niet duur te zijn. Kleine
                verbeteringen, zoals tochtstrips of radiatorfolie, beginnen al bij{" "}
                <strong>enkele tientjes</strong>. Grotere stappen, zoals isolatie of
                HR++-glas, kosten vaak tussen de <strong>€2000 en €4000</strong> — een
                investering die je meestal binnen <strong>2 tot 5 jaar</strong> terugverdient.
            </>
        ),
    },
    {
        q: "Is renoveren niet een grote investering?",
        a: (
            <>
                Renovatie is een investering, maar eentje die zichzelf snel terugbetaalt.
                Met <strong>isolatie, HR++-glas of een warmtepomp</strong> verlaag je direct je
                energiekosten én verhoog je de waarde van je woning.
            </>
        ),
    },
    {
        q: "Wat als ik niet alles tegelijk kan betalen?",
        a: (
            <>
                Je hoeft niet alles in één keer te doen. Je kunt <strong>stapsgewijs renoveren</strong>,
                beginnend met de maatregelen die het meest opleveren — zoals
                <strong> dakisolatie of HR++-glas</strong>. Zo spreid je de kosten en zie je toch snel resultaat.
            </>
        ),
    },
    {
        q: "Wat als ik niet alles in één keer wil doen?",
        a: (
            <>
                Dat hoeft ook niet. <strong>Elke stap telt.</strong> Begin bijvoorbeeld met één
                verbetering die goed past bij jouw woning of budget, zoals
                <strong> vloerisolatie of nieuw glas</strong>. Zelfs één aanpassing kan al merkbaar schelen in
                comfort en energierekening.
            </>
        ),
    },
    {
        q: "Levert renovatie echt zoveel op?",
        a: (
            <>
                Ja. Zelfs één maatregel, zoals <strong>spouwmuurisolatie</strong>, verlaagt het
                gasverbruik met gemiddeld <strong>20%</strong>. Daarmee bespaar je al snel
                <strong> honderden euro’s per jaar</strong> op je energierekening.
            </>
        ),
    },
    {
        q: "Zijn er subsidies of regelingen waar ik gebruik van kan maken?",
        a: (
            <>
                Ja. De overheid en veel gemeenten bieden <strong>subsidies voor energiebesparende
                maatregelen</strong>. Op deze website lees je eenvoudig <strong>welke regelingen voor jouw
                woning gelden</strong> en hoeveel je kunt besparen.
            </>
        ),
    },
];

export default function FaqTopSix() {
    return (
        <section
            aria-labelledby="faq-heading"
            className="mx-auto w-full max-w-5xl p-4 md:p-6"
        >
            {/*<h2*/}
            {/*    id="faq-heading"*/}
            {/*    className="text-2xl font-semibold tracking-tight text-gray-900"*/}
            {/*>*/}
            {/*    Veelgestelde vragen*/}
            {/*</h2>*/}

            <dl className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-2 md:gap-6">
                {faqs.map((item, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                        <dt className="text-base font-semibold text-gray-900">{item.q}</dt>
                        <dd className="mt-2 text-[15px] leading-6 text-gray-900">{item.a}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
