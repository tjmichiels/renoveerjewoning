import { BoltIcon, BanknotesIcon, HomeModernIcon } from "@heroicons/react/24/outline";

export default function QuickBenefits() {
    const benefits = [
        {
            icon: BoltIcon,
            text: "Tot 20% minder gasverbruik",
            color: "bg-green-50 text-green-700 border-green-300",
            iconColor: "text-green-600",
        },
        {
            icon: BanknotesIcon,
            text: "Binnen 2–5 jaar terugverdiend",
            color: "bg-indigo-50 text-indigo-700 border-indigo-300",
            iconColor: "text-indigo-600",
        },
        {
            icon: HomeModernIcon,
            text: "Meer wooncomfort",
            color: "bg-amber-50 text-amber-700 border-amber-300",
            iconColor: "text-amber-600",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-10">
            {benefits.map(({ icon: Icon, text, color, iconColor }, i) => (
                <div
                    key={i}
                    className={`flex items-center gap-2 rounded-full border px-5 py-2.5 shadow-sm transition hover:shadow-md ${color}`}
                >
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                    <span className="text-sm font-semibold tracking-wide uppercase">{text}</span>
                </div>
            ))}
        </div>
    );
}
