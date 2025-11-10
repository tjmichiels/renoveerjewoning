// app/components/FaqTopSix.tsx
"use client";

import {
    BanknotesIcon,
    BoltIcon,
    ClipboardDocumentCheckIcon,
    HomeModernIcon,
    ShieldCheckIcon,
    SquaresPlusIcon,
} from "@heroicons/react/24/outline";
// import {JSX} from "react";

type FaqItem = {
    q: string;
    a: React.ReactNode;
    // Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    Icon: React.ElementType;
    color: string; // tailwind color token for accent bg
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
        Icon: BanknotesIcon,
        color: "bg-emerald-50",
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
        Icon: ShieldCheckIcon,
        color: "bg-indigo-50",
    },
    {
        q: "Wat als ik niet alles tegelijk kan betalen?",
        a: (
            <>
                Je hoeft niet alles in één keer te doen. Je kunt <strong>stapsgewijs renoveren</strong>,
                beginnend met de maatregelen die het meest opleveren — zoals{" "}
                <strong>dakisolatie of HR++-glas</strong>. Zo spreid je de kosten en zie je toch snel resultaat.
            </>
        ),
        Icon: ClipboardDocumentCheckIcon,
        color: "bg-amber-50",
    },
    {
        q: "Wat als ik niet alles in één keer wil doen?",
        a: (
            <>
                Dat hoeft ook niet. <strong>Elke stap telt.</strong> Begin bijvoorbeeld met één verbetering
                die goed past bij jouw woning of budget, zoals <strong>vloerisolatie of nieuw glas</strong>.
                Zelfs één aanpassing kan al merkbaar schelen in comfort en energierekening.
            </>
        ),
        Icon: SquaresPlusIcon,
        color: "bg-sky-50",
    },
    {
        q: "Levert renovatie echt zoveel op?",
        a: (
            <>
                Ja. Zelfs één maatregel, zoals <strong>spouwmuurisolatie</strong>, verlaagt het gasverbruik
                met gemiddeld <strong>20%</strong>. Daarmee bespaar je al snel <strong>honderden euro’s per
                jaar</strong>.
            </>
        ),
        Icon: BoltIcon,
        color: "bg-fuchsia-50",
    },
    {
        q: "Zijn er subsidies of regelingen waar ik gebruik van kan maken?",
        a: (
            <>
                Ja. De overheid en veel gemeenten bieden <strong>subsidies voor energiebesparende maatregelen</strong>.
                Op deze website lees je eenvoudig <strong>welke regelingen voor jouw woning gelden</strong> en hoeveel
                je kunt besparen.
            </>
        ),
        Icon: HomeModernIcon,
        color: "bg-rose-50",
    },
];

export default function FaqTopSix() {
    return (
        <section
            aria-labelledby="faq-heading"
            className="mx-auto w-full max-w-5xl p-4 md:p-6 text-left"
        >
            {/*<h2*/}
            {/*    id="faq-heading"*/}
            {/*    className="text-2xl font-semibold tracking-tight text-gray-900"*/}
            {/*>*/}
            {/*    Veelgestelde vragen*/}
            {/*</h2>*/}

            <div className="mt-5 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-2 md:gap-6">
                {faqs.map(({q, a, Icon, color}, idx) => (
                    <article
                        key={idx}
                        className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md`}
                    >
                        {/* zachte kleur-accent achter het icoon */}
                        <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${color}`}/>

                        {/* vraag + icoon + antwoord */}
                        <div className="relative">
                            <div className="flex items-center gap-2">
      <span
          className={`inline-flex size-7 items-center justify-center rounded-lg ${color} ring-1 ring-black/5`}
          aria-hidden="true"
      >
        <Icon className="h-4 w-4 text-gray-700"/>
      </span>
                                <h3 className="text-base font-semibold text-gray-900 leading-tight">{q}</h3>
                            </div>
                            <p className="mt-2 text-[15px] leading-6 text-gray-900">{a}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
