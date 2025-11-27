// app/woningtypes/page.tsx
import {Metadata} from "next";
import Header from "../components/layout/Header";
import HousingTypeCard from "../components/housing/HousingTypeCard";
import {housingTypes} from "../content/housingTypes";
import {NAV} from "../content/navigation";
import GradientBlob from "../components/layout/GradientBlob";


export const metadata: Metadata = {
    title: "Voorbeelden per woningtype – welke maatregelen passen bij jouw huis?",
    description:
        "Kies jouw woningtype en bekijk welke maatregelen daar meestal het meeste opleveren, met globale kosten en besparingen per type woning.",
};

export default function HousingTypesPage() {
    return (
        <div className="bg-white">
            <Header navigation={NAV}/>

            <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
                {/* blob-achtergrond bovenin de pagina */}
                <div className="relative mx-auto max-w-5xl pb-4">
                    <GradientBlob
                        from="from-emerald-200"
                        via="via-yellow-200"
                        to="to-sky-200"
                    />

                    <header className="relative">
                        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                            Kies jouw woningtype
                        </h1>
                        <p className="mt-2 text-gray-700">
                            Niet elke maatregel past bij elke woning. Kies het type dat het
                            beste lijkt op jouw huis en bekijk welke stappen daar het meest
                            opleveren.
                        </p>
                    </header>

                    {/*Gradient divider*/}
                    <div className="h-px w-full bg-gradient-to-r from-amber-200 via-emerald-200 to-lime-200 mt-6 mb-0"/>

                </div>

                <section className="mx-auto mt-3 max-w-5xl pb-16">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {housingTypes.map((type) => (
                            <HousingTypeCard key={type.id} type={type}/>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
