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
import type {FaqEntry} from "@/app/components/faq/FaqList";

export const faqTopSix: FaqEntry[] = [
    {
        q: "Wat kost een woningrenovatie gemiddeld?",
        a: (
            <>
                Dat hangt sterk af van je woning en welke stappen je zet. Kleine
                maatregelen kosten vaak <strong>tientjes tot enkele honderden euro’s</strong>.
                Voor grotere stappen (zoals isolatie of HR++-glas) moet je eerder denken
                aan <strong>enkele duizenden euro’s</strong>. Op de pagina{" "}
                <strong>Financieel</strong> laten we per maatregel
                een globale bandbreedte zien.
            </>
        ),
        Icon: BanknotesIcon,
    },
    {
        q: "Is renoveren niet een grote investering?",
        a: (
            <>
                Renoveren is wel een investering, maar vaak een{" "}
                <strong>voorspelbare</strong>. Met maatregelen als{" "}
                <strong>isolatie, HR++-glas of (hybride) warmtepomp</strong> dalen je
                energiekosten en verbetert je energielabel.
            </>
        ),
        Icon: ShieldCheckIcon,
    },
    {
        q: "Wat als ik niet alles tegelijk kan betalen?",
        a: (
            <>
                Je hoeft niet in één keer het volledige bedrag op je rekening te hebben.
                Veel huiseigenaren combineren{" "}
                <strong>stap-voor-stap renoveren</strong> met{" "}
                <strong>subsidies of een energiebespaarlening</strong>.
                Zo kun je beginnen met één maatregel die veel oplevert (bijvoorbeeld
                <strong> spouwmuurisolatie of HR++-glas</strong>) en de kosten
                spreiden over meerdere jaren.
            </>
        ),
        Icon: ClipboardDocumentCheckIcon,
    },
    {
        q: "Wat als ik niet alles in één keer wil doen?",
        a: (
            <>

                Veel bewoners kiezen er bewust voor om{" "}
                <strong>niet in één keer groots te renoveren</strong>.
                Je kunt prima beginnen met één rustige stap, zoals{" "}
                <strong>vloerisolatie, spouwmuurisolatie of nieuw glas</strong>,
                en later eventueel verder gaan met dak, installatie of zonnepanelen.
                Eén aanpassing kan al merkbaar schelen.
            </>
        ),
        Icon: SquaresPlusIcon,
    },
    {
        q: "Levert renovatie echt zoveel op?",
        a: (
            <>
                Eén maatregel kan al merkbaar schelen. Denk aan{" "}
                <strong>spouwmuurisolatie of HR++-glas</strong>: je verliest minder warmte
                en verbruikt daardoor minder gas. Voor een doorsnee jaren 80-woning lopen
                de besparingen al snel op tot <strong>enkele honderden euro’s per jaar</strong>,
                afhankelijk van je woning en energieprijs. Op de pagina{" "}
                <strong>Financieel</strong> laten we globaal zien
                met welke bandbreedtes je kunt rekenen.
            </>
        ),
        Icon: BoltIcon,
    },
    {
        q: "Zijn er subsidies of regelingen waar ik gebruik van kan maken?",
        a: (
            <>
                Vaak wel. Voor isolatie, glas en soms warmtepompen zijn{" "}
                <strong>landelijke subsidies</strong> beschikbaar. Veel gemeenten hebben
                daarnaast eigen regelingen of leningen. Op de pagina{" "}
                <strong>Financieel</strong> leggen we kort uit
                welke soorten regelingen er zijn en waar je ze kunt checken.
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
                {/*Begin met <strong>spouwmuurisolatie</strong> of <strong>HR++-glas</strong>.*/}
                {/*Beide leveren <strong>snel resultaat</strong> op, zijn betaalbaar, en kunnen zonder*/}
                {/*ingrijpende verbouwing worden uitgevoerd.*/}
                Als je laagdrempelig wilt starten, zijn{" "}
                <strong>tochtstrips, een brievenbusborstel en radiatorfolie</strong> vaak het eenvoudigst.
                Die kun je zelf plaatsen en je merkt het comfortverschil meteen.
                <br /><br/>
                Wil je een grotere stap zetten, dan zijn{" "}
                <strong>spouwmuurisolatie of HR++-glas</strong> logische vervolgstappen: die kosten meer,
                maar leveren ook structureel besparing op.
            </>
        ),
        Icon: WrenchScrewdriverIcon,
    },
];
