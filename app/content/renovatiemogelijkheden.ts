export type RenovationOption = {
    slug: string;
    title: string;
    short: string;
    icon: "insulation" | "windows" | "heating" | "solar" | "ventilation";
    details: string;
};

export const renovationOptions: RenovationOption[] = [
    {
        slug: "isolatie",
        title: "Isolatie",
        short: "Voor uw woning (jaren '75-'91) is dit de fundering: Spouwmuurisolatie is eenvoudig en direct comfortverhogend.",
        icon: "insulation",
        details:
            "De meeste woningen hebben een spouw van 4-6 cm, ideaal voor na-isolatie. Dit, gecombineerd met dak- en vloerisolatie via de kruipruimte, verbetert de matige Rc-waarde (1,3-2,0) van de bouw aanzienlijk. Dit is essentieel voordat u een warmtepomp plaatst.",
    },
    {
        slug: "glas-en-kozijnen",
        title: "Glas & Kozijnen",
        short: "Vervang oud dubbel glas door HR++ glas voor merkbaar minder warmteverlies bij de ramen.",
        icon: "windows",
        details:
            "Veel woningen uit deze periode hebben nog verouderd dubbel glas (64%). Door te upgraden naar HR++ (streef U-waarde 1,0 W/m²K) wordt de thermische schil sterk verbeterd. Dit is een snelle stap om tocht te verminderen.",
    },
    {
        slug: "verwarming",
        title: "Verwarming",
        short: "Een hybride warmtepomp is technisch goed mogelijk in combinatie met uw bestaande HR-ketel.",
        icon: "heating",
        details:
            "Aangezien de basisisolatie van de woning al aanwezig is, is een hybride warmtepomp een logische vervolgstap. Dit systeem werkt samen met de huidige installatie en zorgt voor efficiëntere verwarming. Een volledig elektrische warmtepomp is pas aan te raden na maximale isolatie.",
    },
    {
        slug: "zonne-energie",
        title: "Zonne-energie",
        short: "Een gemiddeld dak is geschikt voor 10-12 zonnepanelen, waarmee u veel van uw eigen stroom opwekt.",
        icon: "solar",
        details:
            "De daken van de rijwoningen (25-35 m²) zijn zeer geschikt voor het opwekken van hernieuwbare energie. Zonnepanelen zijn een effectieve maatregel om het primaire energieverbruik te verlagen en de energielasten te drukken.",
    },
    {
        slug: "ventilatie",
        title: "Ventilatie",
        short: "Noodzakelijk na isoleren: voorkom vocht en schimmel met verbeterde mechanische ventilatie.",
        icon: "ventilation",
        details:
            "Bij een goed geïsoleerde en luchtdichte woning (klasse 2 of 3) is goede ventilatie cruciaal voor een gezond binnenklimaat. Het plaatsen van een mechanische ventilatie met warmteterugwinning (WTW) is dan een effectieve oplossing om warmteverlies door ventilatie te minimaliseren.",
    },
];

export function getRenovationOptionBySlug(slug: string) {
    return renovationOptions.find(o => o.slug === slug);
}