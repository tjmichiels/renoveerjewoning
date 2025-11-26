// app/components/SocialProofStrip.tsx
export default function SocialProofStrip() {
    return (
        <section
            aria-label="Wat andere huiseigenaren vaak doen"
            className="mx-auto max-w-5xl pt-6"
        >
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-4 sm:px-5 sm:py-5">
                <h2 className="text-sm font-semibold text-emerald-800">
                    Wat andere huiseigenaren vaak als eerste doen
                </h2>

                <p className="mt-2 text-sm text-emerald-900">
                    Veel mensen beginnen niet met een grote verbouwing, maar met één stap die snel iets oplevert.
                </p>

                <ul className="mt-2 space-y-1.5 text-sm text-emerald-900">
                    <li>• HR++-glas voor minder kou en meer comfort bij de ramen.</li>
                    <li>• Spouwmuurisolatie omdat het relatief weinig overlast geeft.</li>
                    <li>• Kleine maatregelen zoals tochtstrips, omdat je die makkelijk zelf kunt doen.</li>
                </ul>
            </div>
        </section>
    );
}
