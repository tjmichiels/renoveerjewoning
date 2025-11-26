export default function GradientBlob({
                                         from = "from-indigo-200",
                                         via = "via-sky-200",
                                         to = "to-emerald-200",
                                     }: {
    from?: string;
    via?: string;
    to?: string;
}) {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 transform-gpu overflow-hidden blur-3xl"
        >
            <div
                className={`mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr ${from} ${via} ${to} opacity-40`}
                style={{
                    clipPath:
                        "polygon(74% 44%, 100% 59%, 94% 90%, 74% 100%, 52% 92%, 35% 78%, 22% 61%, 15% 42%, 26% 19%, 48% 7%, 68% 12%, 78% 26%)",
                }}
            />
        </div>
    );
}
