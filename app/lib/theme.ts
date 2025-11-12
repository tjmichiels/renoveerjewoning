export const palettes = {
    indigoSkyEmerald: [
        "bg-emerald-50",
        "bg-indigo-50",
        "bg-amber-50",
        "bg-sky-50",
        "bg-fuchsia-50",
        "bg-rose-50",
    ],
    greenYellow: [
        "bg-emerald-50",
        "bg-lime-50",
        "bg-yellow-50",
        "bg-green-50",
        "bg-amber-50",
        "bg-sky-50",
    ],
} as const;

export type PaletteKey = keyof typeof palettes;

export const blobs = {
    indigoSkyEmerald: {from: "from-indigo-200", via: "via-sky-200", to: "to-emerald-200"},
    greenYellow: {from: "from-emerald-200", via: "via-lime-200", to: "to-yellow-200"},
} as const;