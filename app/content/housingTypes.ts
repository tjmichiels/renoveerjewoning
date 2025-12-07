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

    socialProof?: string;

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

        socialProof:
            "Bij tussenwoningen beginnen veel eigenaren met spouwmuur- en dakisolatie. Dat zijn vaak de stappen met de meeste winst per euro.",

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

        socialProof:
            "Eigenaren van hoekwoningen kiezen vaak eerst voor gevelisolatie en HR++-glas aan de windzijde. Dat vermindert tocht en warmteverlies langs de extra buitenmuur.",

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

        socialProof:
            "Bij vrijstaande woningen leveren dak- en gevelisolatie meestal de grootste besparing op, omdat er veel buitenoppervlak is om te isoleren.",

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
    {
        id: "appartement",
        slug: "appartement",
        title: "Appartement",
        shortLabel: "Typisch voor een appartement:",
        intro:
            "In een appartement heb je vaak minder eigen buitengevels om te isoleren. Glas en kierdichting leveren hier meestal de meeste winst op. Voor grotere maatregelen ben je vaak afhankelijk van de Vereniging van Eigenaren (VvE).",
        yearlySavings: "sterk afhankelijk van het complex en de installaties",
        typicalIssues: [
            "Beperkt eigen geveloppervlak om te isoleren",
            "Afhankelijkheid van de VvE voor grotere maatregelen",
            "Tocht langs ramen, balkondeuren en kozijnen"
        ],

        imageSrc: "/images/woningtypes/appartement.jpg",
        imageAlt: "Appartementencomplex met meerdere etages",
        tagline: "Met beter glas en kierdichting kun je het comfort al flink verhogen.",

        socialProof:
            "Appartementbewoners beginnen vaak met HR++-glas en kierdichting bij ramen en balkondeuren. Grotere stappen lopen meestal via de VvE.",

        measures: [
            {
                title: "HR++-glas",
                description:
                    "Vervangt oud dubbel of enkel glas. Dit vermindert kou en tocht bij ramen en maakt de woning merkbaar comfortabeler.",
                costRange: "afhankelijk van aantal ramen",
                savingsRange: "meer comfort en een lagere warmtevraag",
                icon: "glass",
                imageSrc: "/images/maatregelen/hrplusplusglas.jpg",
                imageAlt: "Een appartement met nieuw HR++-glas",
            },
            {
                title: "Kierdichting & kleine maatregelen",
                description:
                    "Tochtstrips, naadafdichting en rubberprofielen bij ramen en deuren verminderen tocht tegen lage kosten.",
                costRange: "± €20 – €150",
                note: "Goed zelf te doen en direct merkbaar in comfort.",
                icon: "small",
                imageSrc: "/images/maatregelen/kleinemaatregelen.jpg",
                imageAlt: "Tochtstrips bij een raam in een appartement",
            },
            {
                title: "Dak- of gevelisolatie via de VvE",
                description:
                    "Voor dakisolatie, gevelisolatie of collectieve installaties (zoals een warmtepomp of ventilatiesysteem) is vaak een besluit binnen de VvE nodig.",
                costRange: "afhankelijk van gekozen maatregelen en verdeelsleutel",
                note: "Informeer bij de VvE of er al plannen of een meerjarenonderhoudsplan zijn.",
                icon: "wall",
                imageSrc: "/images/maatregelen/gevelisolatie.jpeg",
                imageAlt: "Gevelisolatie aan een appartementencomplex",
            },
        ],
    },
    {
        id: "twee-onder-een-kap",
        slug: "twee-onder-een-kap",
        title: "Twee-onder-één-kapwoning",
        shortLabel: "Typisch voor een twee-onder-één-kapwoning:",
        intro:
            "Een twee-onder-één-kapwoning deelt één muur met de buren, maar heeft verder veel eigen buitengevels en dakoppervlak. Dat betekent meer warmteverlies, maar ook meer mogelijkheden om te besparen.",
        yearlySavings: "ongeveer €600–€1.000 per jaar",
        typicalIssues: [
            "Extra buitengevels vergeleken met een tussenwoning",
            "Groot dakoppervlak waar warmte kan ontsnappen",
            "Tocht bij kozijnen en koude hoeken aan de buitenzijde"
        ],

        imageSrc: "/images/woningtypes/twee-onder-een-kap.webp",
        imageAlt: "Twee-onder-een-kapwoning in een woonwijk",
        tagline: "Meer buitengevel en dak betekent ook meer ruimte om te isoleren en te besparen.",

        socialProof:
            "Eigenaren van twee-onder-een-kapwoningen beginnen vaak met spouw- of gevelisolatie en HR++-glas. Daarna volgt het dak om de grootste warmtelekken aan te pakken.",

        measures: [
            {
                title: "Spouw- of gevelisolatie",
                description:
                    "Door de spouw of buitengevel te isoleren pak je direct een groot deel van het warmteverlies aan, vooral bij de vrijliggende gevels.",
                costRange: "± €1.500 – €3.500",
                savingsRange: "duidelijke daling in gasverbruik en minder koude muren",
                icon: "cavity",
                imageSrc: "/images/maatregelen/gevelofspouwmuurisolatie.jpg",
                imageAlt: "Gevel of spouwmuur die geïsoleerd wordt",
            },
            {
                title: "Dakisolatie",
                description:
                    "Het grote dakoppervlak isoleren voorkomt dat warmte naar boven wegtrekt en maakt zolder en bovenverdieping comfortabeler.",
                costRange: "± €2.500 – €5.000 (afhankelijk van dakoppervlak)",
                savingsRange: "kan honderden euro’s per jaar schelen",
                icon: "roof",
                imageSrc: "/images/maatregelen/dakisolatie.jpg",
                imageAlt: "Dakisolatie bij een hellend dak",
            },
            {
                title: "HR++-glas",
                description:
                    "Nieuwe beglazing vermindert warmteverlies en tocht bij ramen, vooral aan de wind- en tuinkant.",
                costRange: "afhankelijk van aantal ramen",
                savingsRange: "structureel lagere warmtevraag en meer comfort",
                icon: "glass",
                imageSrc: "/images/maatregelen/hrplusplusglas.jpg",
                imageAlt: "Kozijnen met HR++-glas",
            },
            {
                title: "Vloerisolatie",
                description:
                    "Isolatie boven de kruipruimte voorkomt koude vloeren, vooral aan de zij- en tuinkant van de woning.",
                costRange: "± €1.500 – €3.000",
                savingsRange: "comfortverbetering en lagere stookkosten",
                icon: "floor",
                imageSrc: "/images/maatregelen/vloerisolatie.jpg",
                imageAlt: "Vloerisolatie in een kruipruimte",
            },
        ],
    },
];

export function getHousingTypeBySlug(slug: string): HousingType | undefined {
    return housingTypes.find((t) => t.slug === slug);
}