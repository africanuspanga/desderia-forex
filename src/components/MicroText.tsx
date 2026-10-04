const PHRASE = "Desderia Bureau de Change · Sky City Mall · Dar es Salaam · ";

/** A rule made of microprinted text, as on a banknote border. */
export default function MicroText({ className = "", text = PHRASE }: { className?: string; text?: string }) {
  return (
    <span className={`microtext ${className}`} aria-hidden="true">
      {text.repeat(12)}
    </span>
  );
}
