const memeQuotes = [
  '"One does not simply fix a cold house without insulation."',
  '"Brace yourselves, winter bills are coming."',
  '"Shut up and take my isolation... eh, isolatie!"',
  '"This is fine." (said no one in a tochtige woonkamer)',
];

export default function MemeQuotes() {
  return (
    <section
      aria-labelledby="meme-quotes"
      className="mx-auto mt-8 max-w-3xl rounded-2xl border border-fuchsia-100 bg-gradient-to-r from-fuchsia-50 via-violet-50 to-indigo-50 px-5 py-5 shadow-sm"
    >
      <h2 id="meme-quotes" className="font-emphasis text-lg font-semibold text-gray-900">
        Meme quotes van de dag 😄
      </h2>
      <ul className="mt-3 grid gap-2 text-left text-sm text-gray-800 sm:grid-cols-2">
        {memeQuotes.map((quote) => (
          <li key={quote} className="rounded-lg border border-white/80 bg-white/70 px-3 py-2">
            {quote}
          </li>
        ))}
      </ul>
    </section>
  );
}
