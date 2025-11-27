export type RenovationOption = {
    slug: string;
    title: string;
    short: string;
    icon: "insulation" | "windows" | "heating" | "solar" | "ventilation";
    image: string; // relative path in /public
    imageAlt: string;
    renovationdetails: string; // Uitgebreide, menselijke uitleg voor de detailpagina
};

export const renovationOptions: RenovationOption[] = [
    {
        slug: "isolatie",
        title: "Isolatie",
        short: "Voor uw woning (jaren '75-'91) is dit de fundering: Spouwmuurisolatie is eenvoudig en direct comfortverhogend.",
        icon: "insulation",
        image: "/images/renovatiemogelijkheden/Isolatie.jpg",
        imageAlt: "Voorbeeld van spouwmuurisolatie in een woning",
        renovationdetails: `
### De warmte vasthouden waar het nodig is
Bij woningen uit de periode 1975–1991 is er vaak al isolatie aanwezig, maar deze is naar huidige maatstaven beperkt. Door de isolatie te verbeteren, blijft de warmte beter hangen. Dit zorgt voor een constantere temperatuur in huis en minder stookkosten. Er zijn drie logische plekken om naar te kijken.

* **De spouwmuur:** Veel woningen hebben een luchtspouw van ongeveer 4 tot 6 centimeter breed. Deze ruimte is vaak goed geschikt om na te isoleren. Dit kan meestal van buitenaf, zonder ingrijpende verbouwing in huis.
* **Het dak:** Warmte stijgt op, waardoor een matig geïsoleerd dak voor veel warmteverlies zorgt. Het dak kan vaak aan de binnenzijde (tegen het plafond op zolder) worden geïsoleerd met materiaal zoals steenwol of glaswol. Dit houdt de warmte in de winter binnen en in de zomer langer buiten.
* **De vloer:** Als er een kruipruimte is, kan de onderkant van de vloer worden geïsoleerd met schuim of folie. Dit vermindert optrekkende kou en voelt prettiger aan de voeten.
`
    },
    {
        slug: "glas-en-kozijnen",
        title: "Glas & Kozijnen",
        short: "Vervang oud dubbel glas door HR++ glas voor merkbaar minder warmteverlies bij de ramen.",
        icon: "windows",
        image: "/images/renovatiemogelijkheden/Glasenkozijnen.jpg",
        imageAlt: "Voorbeeld van vervanging naar HR++ glas en moderne kozijnen",
        renovationdetails: `
### Prettiger wonen zonder tocht bij het raam
Veel ramen in deze woningen hebben standaard dubbel glas (thermopane) of soms nog enkel glas. Dit glas isoleert minder goed dan het moderne HR++ glas.

* **HR++ glas:** Dit glas heeft een isolerende coating en een gasvulling tussen de glasplaten, waardoor het de warmte veel beter binnenhoudt dan oud dubbel glas. Vaak past dit glas in de bestaande kozijnen.
* **Comfort:** Het grootste verschil merk je direct bij het raam. Bij oud glas voel je daar vaak kou vallen, wat als tocht aanvoelt. Met HR++ glas vermindert dit effect en voelt de ruimte behaaglijker.
* **Kozijnen:** Als de kozijnen nog goed zijn, is vervangen vaak niet nodig. Zijn ze aan vervanging toe? Dan kun je kijken naar nieuwe kozijnen met nog dikker (triple) glas voor een optimaal resultaat.
`
    },
    {
        slug: "verwarming",
        title: "Verwarming",
        short: "Een hybride warmtepomp is technisch goed mogelijk in combinatie met uw bestaande HR-ketel.",
        icon: "heating",
        image: "/images/renovatiemogelijkheden/Verwarming.jpg",
        imageAlt: "Hybride warmtepomp naast HR-ketel in technische ruimte",
        renovationdetails: `
### Slimmer verwarmen met de installatie die bij je past
De meeste woningen in de wijk worden verwarmd met een HR-ketel en radiatoren. Dit systeem werkt prima, maar er zijn mogelijkheden om het gasverbruik te verlagen.

* **Hybride warmtepomp:** Dit apparaat werkt samen met je huidige cv-ketel. De warmtepomp verwarmt het huis op de meeste dagen, en de ketel springt alleen bij als het buiten erg koud is of voor warm water. Omdat er al een HR-ketel hangt, is dit vaak technisch goed in te passen.
* **Volledig elektrisch:** Wil je helemaal van het gas af? Dan is een volledig elektrische warmtepomp een optie. Dit vraagt wel meer van je woning: de isolatie moet goed op orde zijn en vaak is vloerverwarming nodig om het huis met een lage temperatuur warm te krijgen.
`
    },
    {
        slug: "zonne-energie",
        title: "Zonne-energie",
        short: "Een gemiddeld dak is geschikt voor 10-12 zonnepanelen, waarmee u veel van uw eigen stroom opwekt.",
        icon: "solar",
        image: "/images/renovatiemogelijkheden/zonne-energie.jpg",
        imageAlt: "Zonnepanelen op een Nederlands hellend dak in de zon",
        renovationdetails: `
### Je eigen stroom opwekken
De daken van de rijwoningen in deze bouwperiode zijn vaak geschikt voor zonnepanelen. Ze zijn sterk genoeg en hebben voldoende oppervlakte.

* **Ruimte op het dak:** Op een gemiddeld dak van 25 tot 35 m² passen vaak zo’n 10 tot 12 zonnepanelen.
* **Opbrengst:** Met dit aantal panelen wek je jaarlijks ongeveer 3.500 tot 4.500 kWh op. Voor veel huishoudens dekt dit een groot deel van het stroomverbruik.
* **Aansluiting:** De installatie is technisch overzichtelijk. De panelen worden aangesloten op de meterkast, waarbij soms een extra groep of aanpassing nodig is.
`
    },
    {
        slug: "ventilatie",
        title: "Ventilatie",
        short: "Noodzakelijk na isoleren: voorkom vocht en schimmel met verbeterde mechanische ventilatie.",
        icon: "ventilation",
        image: "/images/renovatiemogelijkheden/Ventilatie.jpg",
        imageAlt: "Mechanische ventilatie unit met kanalen in woning",
        renovationdetails: `
### Frisse lucht in een goed geïsoleerd huis
Als je kieren en naden dichtmaakt om warmteverlies te voorkomen, is het belangrijk om goed te blijven ventileren. Verse lucht is nodig voor een gezond huis en om vochtproblemen te voorkomen.

* **Huidige situatie:** Veel woningen hebben nu natuurlijke ventilatie (roosters) of een eenvoudige mechanische box die lucht afzuigt. Hierbij komt frisse, koude lucht rechtstreeks van buiten naar binnen.
* **Warmteterugwinning (WTW):** Bij een renovatie kun je kiezen voor ventilatie met warmteterugwinning. Dit systeem zorgt voor frisse lucht, maar warmt deze eerst op met de warmte van de lucht die naar buiten gaat. Zo heb je wel frisse lucht, maar verlies je geen warmte.
`
    },
];

export function getRenovationOptionBySlug(slug: string) {
    return renovationOptions.find(o => o.slug === slug);
}