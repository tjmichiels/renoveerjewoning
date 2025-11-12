import { BoltIcon, BanknotesIcon, HomeModernIcon } from "@heroicons/react/24/outline";

export default function QuickBenefits() {
    const benefits = [
        {
            icon: BoltIcon,
            text: "Tot 20% minder gasverbruik",
            color: "bg-green-50 text-green-700 border-green-300 ring-green-200",
            iconColor: "text-green-600",
        },
        {
            icon: BanknotesIcon,
            text: "Binnen 2–5 jaar terugverdiend",
            color: "bg-indigo-50 text-indigo-700 border-indigo-300 ring-indigo-200",
            iconColor: "text-indigo-600",
        },
        {
            icon: HomeModernIcon,
            text: "Meer wooncomfort",
            color: "bg-amber-50 text-amber-800 border-amber-300 ring-amber-200",
            iconColor: "text-amber-600",
        },
    ];

    return (
        <ul className="mt-6 flex flex-wrap justify-center gap-4">
            {benefits.map(({ icon: Icon, text, color, iconColor }, i) => (
                <li key={i}>
          <span
              className={`inline-flex h-10 items-center gap-2 rounded-full border px-5 shadow-sm ring-1 transition ${color}`}
              role="text"
          >
            <Icon className={`h-5 w-5 ${iconColor}`} aria-hidden="true" />
            <span className="font-emphasis text-sm font-semibold tracking-wide uppercase">
              {text}
            </span>
          </span>
                </li>
            ))}
        </ul>
    );
}
