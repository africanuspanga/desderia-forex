import Image from "next/image";
import MicroText from "@/components/MicroText";
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/lib/format";

export default function VisitSection() {
  return (
    <section className="bg-ink text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[560px]">
          <Image
            src="/photos/skyline-moon.jpg"
            alt="Dar es Salaam skyline at night"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="px-4 py-16 sm:px-10 lg:max-w-[40rem] lg:px-16 lg:py-24">
          <p className="eyebrow eyebrow-light">Visit the counter</p>
          <h2 className="font-display mt-5 text-5xl leading-[0.92] sm:text-6xl">
            Sky City Mall,
            <br />
            <span className="text-gold-bright">Dar es Salaam</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Bring your currency to the Desderia counter. If you&apos;re exchanging a
            large amount, call ahead and we&apos;ll confirm the rate and make sure we
            have the notes you need.
          </p>

          <MicroText className="mt-10" />
          <dl className="divide-y divide-white/10">
            <div className="flex items-baseline justify-between gap-6 py-4">
              <dt className="engraved text-sm text-gold">Address</dt>
              <dd className="text-right text-white/85">{ADDRESS}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-4">
              <dt className="engraved text-sm text-gold">Phone</dt>
              <dd>
                <a href={`tel:${PHONE_TEL}`} className="tabular text-lg font-semibold hover:text-gold-bright">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-4">
              <dt className="engraved text-sm text-gold">WhatsApp</dt>
              <dd>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-gold-bright"
                >
                  Send a message
                </a>
              </dd>
            </div>
          </dl>
          <MicroText />

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`tel:${PHONE_TEL}`} className="btn btn-primary">
              Call Desderia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
