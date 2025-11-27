// app/not-found.tsx
import Link from "next/link";
import GradientBlob from "./components/layout/GradientBlob";

export default function NotFound() {
    return (
        <div className="bg-white">

            <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
                <section
                    className="relative mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center text-center">
                    <GradientBlob
                        from="from-emerald-200"
                        via="via-yellow-200"
                        to="to-sky-200"
                    />

                    <p className="text-sm font-semibold tracking-wide text-emerald-700">
                        404
                    </p>
                    <h1 className="mt-2 font-emphasis text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                        Deze pagina konden we niet vinden.
                    </h1>

                    <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-700 font-friendly">
                        Het lijkt erop dat deze pagina niet meer bestaat. Vanaf de startpagina kun je makkelijk
                        opnieuw je weg kiezen.
                    </p>


                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="font-emphasis inline-flex items-center rounded-full bg-gradient-to-r from-emerald-700 to-lime-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90 hover:shadow-lg"
                        >
                            Terug naar home
                        </Link>


                    </div>
                </section>
            </main>
        </div>
    );
}
