// export type MeasureIconKey = "wall" | "roof" | "floor" | "glass" | "small";
export type MeasureIconKey =
    | "wall"
    | "cavity"
    | "floor"
    | "glass"
    | "small"
    | "roof";


export type HousingMeasure = {
    title: string;
    description: string;
    costRange: string;
    savingsRange?: string;
    note?: string;
    icon: MeasureIconKey;
    imageSrc: string;
    imageAlt: string;
};

export type HousingType = {
    id: string;
    slug: string;
    title: string;
    shortLabel: string;
    intro: string;
    typicalIssues: string[];
    yearlySavings?: string;

    imageSrc: string;
    imageAlt: string;
    tagline: string;

    measures: HousingMeasure[];
};

export const housingTypes: HousingType[] = [
    {
        id: "tussenwoning",
        slug: "tussenwoning",
        title: "Tussenwoning",
        shortLabel: "Typisch voor een tussenwoning:",
        intro:
            "Bij een tussenwoning gaat veel warmte verloren via de spouwmuur en het dak. Met een paar gerichte maatregelen kun je relatief snel veel besparen.",
        yearlySavings: "ongeveer €350–€650 per jaar",
        typicalIssues: [
            "Warmteverlies via de spouwmuur en het dak",
            "Ouder dubbel glas dat veel warmte doorlaat",
            "Koude plekken bij ramen en kozijnen"
        ],
        imageSrc: "/images/woningtypes/tussenwoning.jpg",
        imageAlt: "Typische tussenwoning in een rij huizen",
        tagline: "Veel winst te halen met spouwmuur- en dakisolatie.",
        measures: [
            {
                title: "Spouwmuurisolatie",
                description:
                    "Isolatiemateriaal wordt in de spouw geblazen. Dit vermindert warmteverlies via de gevel, zonder grote verbouwing.",
                costRange: "± €800 – €1.500",
                savingsRange: "gemiddeld 15–25% minder gasverbruik",
                icon: "cavity",
                imageSrc: "/images/maatregelen/spouwmuurisolatie.jpg",
                imageAlt: "Spouwmuurisolatie",
            },
            {
                title: "Dakisolatie",
                description:
                    "Het dak isoleren voorkomt dat warmte omhoog wegtrekt. Vooral interessant als de zolder vaak koud is.",
                costRange: "± €2.000 – €4.000",
                savingsRange: "tot enkele honderden euro’s per jaar",
                icon: "roof",
                imageSrc: "/images/maatregelen/dakisolatie.jpg",
                imageAlt: "Dakisolatie wordt aangebracht",
            },
            {
                title: "HR++-glas",
                description:
                    "Vervangt standaard dubbel glas of enkel glas. Dit verhoogt comfort en vermindert tocht bij ramen.",
                costRange: "± €4.000 – €6.000 (afhankelijk van aantal ramen)",
                savingsRange: "merkbaar lagere warmtevraag en meer comfort",
                icon: "glass",
                imageSrc: "/images/maatregelen/hrplusplusglas.jpg",
                imageAlt: "Een kozijn met HR++ glas",
            },
            {
                title: "Kleine maatregelen",
                description:
                    "Tochtstrips, radiatorfolie en buisisolatie zijn goedkoop en eenvoudig zelf te plaatsen.",
                costRange: "± €20 – €100",
                note: "Kleine investering, maar snel merkbaar in comfort.",
                icon: "small",
                imageSrc: "/images/maatregelen/kleinemaatregelen.jpg",
                imageAlt: "Tochtstrips worden aangebracht bij een kozijn",
            }
        ],
    },
    {
        id: "hoekwoning",
        slug: "hoekwoning",
        title: "Hoekwoning",
        shortLabel: "Typisch voor een hoekwoning:",
        intro:
            "Een hoekwoning heeft meer buitengevels dan een tussenwoning en verliest daardoor meer warmte. Gevel- en vloerisolatie leveren hier vaak veel winst op.",
        yearlySavings: "ongeveer €450–€750 per jaar",
        typicalIssues: [
            "Extra buitenmuur die warmte verliest",
            "Tocht bij hoeken en kozijnen",
            "Koude vloeren bij buitenmuren"
        ],
        imageSrc: "/images/woningtypes/hoekwoning.jpeg",
        imageAlt: "Hoekwoning met extra buitengevel",
        tagline: "Extra buitenmuur betekent extra warmteverlies — en extra besparingskans.",
        measures: [
            {
                title: "Gevel- of spouwmuurisolatie",
                description:
                    "Door de buitengevel of spouw te isoleren wordt de grootste warmte-lek aangepakt.",
                costRange: "± €1.500 – €3.000",
                savingsRange: "duidelijke daling in gasverbruik en meer comfort",
                icon: "wall",
                imageSrc: "/images/maatregelen/gevelofspouwmuurisolatie.jpg",
                imageAlt: "Gevelisolatie",
            },
            {
                title: "Vloerisolatie",
                description:
                    "Een geïsoleerde vloer voorkomt koude voeten en warmteverlies via de kruipruimte.",
                costRange: "± €1.500 – €3.000",
                savingsRange: "merkbare verbetering in comfort",
                icon: "floor",
                imageSrc: "/images/maatregelen/vloerisolatie.jpg",
                imageAlt: "Isolatiemateriaal dat onder een houten vloer wordt aangebracht",
            },
            {
                title: "HR++-glas",
                description:
                    "Zorgt voor minder warmteverlies en minder condens op ramen, vooral aan de windzijde.",
                costRange: "afhankelijk van aantal ramen",
                savingsRange: "structureel lagere warmtevraag",
                icon: "glass",
                imageSrc: "/images/maatregelen/hrplusplusglas.jpg",
                imageAlt: "Een kozijn met HR++ glas",
            }
        ],
    },
    {
        id: "vrijstaand",
        slug: "vrijstaand",
        title: "Vrijstaande woning",
        shortLabel: "Typisch voor een vrijstaande woning:",
        intro:
            "Een vrijstaande woning heeft aan alle kanten buitengevels. Zonder goede isolatie gaat hier veel warmte verloren, maar er is ook veel besparingspotentieel.",
        yearlySavings: "ongeveer €800–€1.500 per jaar",
        typicalIssues: [
            "Veel buitengevels en dakoppervlak",
            "Hoger gasverbruik dan rijwoningen",
            "Oudere isolatie of helemaal geen isolatie"
        ],
        imageSrc: "/images/woningtypes/vrijstaand.webp",
        imageAlt: "Vrijstaande woning met tuin",
        tagline: "Grote schil, veel oppervlak om te isoleren.",
        measures: [
            {
                title: "Dakisolatie",
                description:
                    "Bij grote dakoppervlakken is dakisolatie vaak een van de belangrijkste stappen.",
                costRange: "sterk afhankelijk van dakoppervlak",
                savingsRange: "kan honderden euro’s per jaar schelen",
                icon: "roof",
                imageSrc: "/images/maatregelen/dakisolatie.jpg",
                imageAlt: "Dakisolatie wordt aangebracht",
            },
            {
                title: "Gevelisolatie",
                description:
                    "Aan de buitenkant isoleren geeft zowel energetische als esthetische verbetering, maar vraagt een hogere investering.",
                costRange: "meestal enkele duizenden euro’s",
                savingsRange: "grote impact op verbruik en comfort",
                icon: "wall",
                imageSrc: "/images/maatregelen/gevelisolatie.jpeg",
                imageAlt: "Gevelisolatie",
            },
            {
                title: "Vloerisolatie",
                description:
                    "Maakt de woning minder kil en verlaagt het energieverbruik.",
                costRange: "± €2.000 – €4.000",
                savingsRange: "comfortverbetering en lagere stookkosten",
                icon: "floor",
                imageSrc: "/images/maatregelen/vloerisolatie.jpg",
                imageAlt: "Isolatiemateriaal dat onder een houten vloer wordt aangebracht",
            }
        ],
    },
    // {
    //     id: "appartement",
    //     slug: "appartement",
    //     title: "Appartement",
    //     shortLabel: "Typisch voor een appartement:",
    //     intro:
    //         "In een appartement heb je meestal minder eigen schil om te isoleren. Glas en kierdichting leveren vaak de meeste winst op.",
    //     yearlySavings: "afhankelijk van complex en installaties",
    //     typicalIssues: [
    //         "Beperkte eigen geveloppervlakken",
    //         "Afhankelijk van Vereniging van Eigenaren (VvE)",
    //         "Tocht langs ramen en balkon/deur"
    //     ],
    //     measures: [
    //         {
    //             title: "HR++-glas",
    //             description:
    //                 "Vervangt oud dubbel of enkel glas en vermindert tocht en kou bij ramen.",
    //             costRange: "afhankelijk van aantal ramen",
    //             savingsRange: "merkbaar meer comfort"
    //         },
    //         {
    //             title: "Kierdichting",
    //             description:
    //                 "Tochtstrips en naadafdichting bij ramen en deuren verminderen tocht tegen lage kosten.",
    //             costRange: "± €20 – €100",
    //             note: "Goed zelf te doen, direct merkbaar."
    //         },
    //         {
    //             title: "Afstemming met VvE",
    //             description:
    //                 "Voor grotere maatregelen (dak-, gevelisolatie, collectieve installaties) is vaak besluitvorming binnen de VvE nodig.",
    //             costRange: "afhankelijk van gekozen maatregelen",
    //             note: "Informeer bij de VvE welke plannen er al zijn."
    //         }
    //     ],
    //     imageSrc: "/images/appartement.jpg",
    //     imageAlt: "Appartementencomplex",
    //     tagline: "Glas en kierdichting leveren hier vaak de meeste winst op.",
    // }
];

export function getHousingTypeBySlug(slug: string): HousingType | undefined {
    return housingTypes.find((t) => t.slug === slug);
}