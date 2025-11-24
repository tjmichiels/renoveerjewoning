import Image from "next/image";
import { ReactNode } from "react";

export type SplitImage = {
  src?: string; // Plaats afbeeldingen in /public/images en verwijs hier met "/images/naam.jpg"
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export default function SplitSection({
  eyebrow,
  title,
  description,
  children,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string | ReactNode;
  children?: ReactNode;
  image?: SplitImage;
}) {
  return (
    <section className="mx-auto max-w-5xl pt-8 pb-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: tekst */}
        <div>
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              {eyebrow}
            </p>
          )}
          <h2 className="font-emphasis text-3xl sm:text-4xl text-gray-900">
            {title}
          </h2>
          {typeof description === "string" ? (
            <p className="mt-3 text-gray-700 font-friendly">{description}</p>
          ) : (
            description
          )}

          {children && <div className="mt-6 text-gray-800">{children}</div>}
        </div>

        {/* Right: afbeelding met scheiding via border-l op grote schermen */}
        <div className="lg:border-l lg:border-gray-200 lg:pl-10">
          {image?.src ? (
            <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-sm sm:h-80 lg:h-full">
              <Image
                src={image.src}
                alt={image.alt || "Afbeelding"}
                fill
                sizes="(min-width: 1024px) 40rem, 100vw"
                priority={image.priority}
                className={
                  image.className || "object-cover object-center select-none"
                }
              />
            </div>
          ) : (
            <div className="flex h-64 w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 text-center text-gray-500 sm:h-80 lg:h-full">
              <div className="px-6 text-sm">
                <p className="font-semibold">Nog geen afbeelding toegevoegd</p>
                <p className="mt-1">Voeg eenvoudig een foto toe door:</p>
                <ol className="mt-2 list-decimal pl-5 text-left">
                  <li>Je bestand in <code>/public/images</code> te plaatsen</li>
                  <li>
                    In de pagina de <code>image</code>-prop te zetten, bijv.:<br />
                    <code className="whitespace-pre-wrap">
                      {`image={{ src: "/images/voorbeeld.jpg", alt: "Woning" }}`}
                    </code>
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
