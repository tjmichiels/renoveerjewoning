// app/content/faqs.tsx
import {
    BanknotesIcon,
    BoltIcon,
    ClipboardDocumentCheckIcon,
    HomeModernIcon,
    ShieldCheckIcon,
    SquaresPlusIcon,
    ClockIcon,
    ArrowTrendingDownIcon,
    WrenchScrewdriverIcon,
    HomeIcon,
    InformationCircleIcon,
    ChartBarIcon,
} from "@heroicons/react/24/outline";
import type { FaqEntry } from "@/app/components/FaqList";

export const faqTopSix: FaqEntry[] = [
    {
        q: "Wat kost een woningrenovatie gemiddeld?",
        a: (
            <>
                Een woning energiezuiniger maken hoeft niet duur te zijn. Kleine verbeteringen beginnen bij{" "}
                <strong>enkele tientjes</strong>. Grotere stappen, zoals isolatie of HR++-glas, kosten vaak tussen{" "}
                <strong>€2000 en €4000</strong> — meestal binnen <strong>2 tot 5 jaar</strong> terugverdiend.
            </>
        ),
        Icon: BanknotesIcon,
    },
    {
        q: "Is renoveren niet een grote investering?",
        a: (
            <>
                Het is een investering die zichzelf snel terugbetaalt. Met <strong>isolatie, HR++-glas of een warmtepomp</strong>{" "}
                verlaag je direct je energiekosten én verhoog je de woningwaarde.
            </>
        ),
        Icon: ShieldCheckIcon,
    },
    {
        q: "Wat als ik niet alles tegelijk kan betalen?",
        a: (
            <>
                Je kunt <strong>stapsgewijs renoveren</strong>, beginnend met de maatregelen die het meest opleveren — zoals{" "}
                <strong>dakisolatie of HR++-glas</strong>. Zo spreid je de kosten en zie je toch snel resultaat.
            </>
        ),
        Icon: ClipboardDocumentCheckIcon,
    },
    {
        q: "Wat als ik niet alles in één keer wil doen?",
        a: (
            <>
                Dat hoeft ook niet. <strong>Elke stap telt.</strong> Begin met één verbetering die past bij jouw woning of budget, zoals{" "}
                <strong>vloerisolatie of nieuw glas</strong>. Eén aanpassing kan al merkbaar schelen.
            </>
        ),
        Icon: SquaresPlusIcon,
    },
    {
        q: "Levert renovatie echt zoveel op?",
        a: (
            <>
                Ja. Zelfs één maatregel, zoals <strong>spouwmuurisolatie</strong>, verlaagt het gasverbruik
                met gemiddeld <strong>20%</strong>. Dat betekent een besparing van <strong>€300 tot €600 per jaar</strong>.
                Combineer je meerdere stappen, dan loopt dat nog verder op.
            </>
        ),
        Icon: BoltIcon,
    },
    {
        q: "Zijn er subsidies of regelingen waar ik gebruik van kan maken?",
        a: (
            <>
                Ja. Overheid en gemeenten bieden <strong>subsidies voor energiebesparende maatregelen</strong>. Hier lees je{" "}
                <strong>welke regelingen voor jouw woning gelden</strong> en hoeveel je kunt besparen.
            </>
        ),
        Icon: HomeModernIcon,
    },
];

export const faqMore: FaqEntry[] = [
    {
        q: "Wanneer verdien ik mijn investering terug?",
        a: (
            <>
                Binnen <strong>2 tot 5 jaar</strong> verdien je maatregelen als{" "}
                <strong>dak- of vloerisolatie</strong> vaak volledig terug. Daarna blijft
                de besparing elk jaar doorlopen — een investering die zichzelf dus
                letterlijk terugbetaalt.
            </>
        ),
        Icon: ArrowTrendingDownIcon,
    },
    {
        q: "Wanneer merk ik iets van de besparing?",
        a: (
            <>
                Vrijwel direct. Al bij de <strong>volgende energierekening</strong> zie je
                verschil, en je merkt het ook in huis: minder tocht, minder kou, en een
                stabielere temperatuur.
            </>
        ),
        Icon: ChartBarIcon,
    },
    {
        q: "Hoe lang duurt een renovatie gemiddeld?",
        a: (
            <>
                Dat gaat sneller dan veel mensen denken. <strong>Glas vervangen</strong>{" "}
                duurt meestal één dag, <strong>spouwmuurisolatie</strong> een paar uur,
                en <strong>dakisolatie</strong> enkele dagen. Vaak is alles binnen een week afgerond.
            </>
        ),
        Icon: ClockIcon,
    },
    {
        q: "Moet ik tijdens een renovatie mijn huis uit?",
        a: (
            <>
                Nee, bijna nooit. De meeste werkzaamheden duren{" "}
                <strong>hooguit één dag</strong> en veroorzaken{" "}
                <strong>nauwelijks overlast</strong>. Je kunt gewoon thuis blijven tijdens de uitvoering.
            </>
        ),
        Icon: HomeIcon,
    },
    {
        q: "Mijn woning is al eens gerenoveerd. Heeft het nog zin?",
        a: (
            <>
                Ja. Veel woningen zijn eerder maar <strong>gedeeltelijk geïsoleerd</strong>{" "}
                of gebruiken <strong>verouderde materialen</strong>. Met moderne technieken
                kun je vaak nog <strong>10–30% extra besparen</strong> op energie.
            </>
        ),
        Icon: InformationCircleIcon,
    },
    {
        q: "Wat is de makkelijkste stap om mee te beginnen?",
        a: (
            <>
                Begin met <strong>spouwmuurisolatie</strong> of <strong>HR++-glas</strong>.
                Beide leveren <strong>snel resultaat</strong> op, zijn betaalbaar, en kunnen zonder
                ingrijpende verbouwing worden uitgevoerd.
            </>
        ),
        Icon: WrenchScrewdriverIcon,
    },
];
