// app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import FaqList from "./components/FaqList";
import {faqMore, faqTopSix} from "./content/faqs";
import { palettes } from "./lib/theme";

const navigation = [
  { name: "Placeholder", href: "#" },
  { name: "Placeholder", href: "#" },
  { name: "Placeholder", href: "#" },
  { name: "Placeholder", href: "#" },
];

export default function Home() {
  return (
      <div className="bg-white">
        <Header navigation={navigation} />

        <main className="relative isolate min-h-screen px-6 pt-14 lg:px-8">
          <Hero
              title="Weet je dat jouw woning je elk jaar honderden euro’s kan opleveren?"
              subtitle="In veel woningen verdwijnt tot een kwart van de warmte via muren, vloeren en ramen. Door te isoleren en oude installaties te vervangen, kun je elk jaar honderden euro’s besparen, terwijl je woning comfortabeler en duurzamer wordt."
              ctaPrimary={{ label: "Ik wil renoveren", href: "#" }}
              ctaSecondary={{ label: "Vertel me meer", href: "#" }}
              blob={{ from: "from-emerald-200", via: "via-yellow-200", to: "to-sky-200" }} // groen/geel tint
          />

          <section
              aria-labelledby="faq"
              className="mx-auto max-w-5xl py-12 sm:py-16"
          >
            <h2 id="faq" className="sr-only">
              Veelgestelde vragen
            </h2>

            <FaqList
                items={faqTopSix}
                palette={palettes.greenYellow}
                columns={2}
            />
            <FaqList
                items={faqMore}
                palette={palettes.greenYellow}
                columns={2}
            />
          </section>
        </main>
      </div>
  );
}
