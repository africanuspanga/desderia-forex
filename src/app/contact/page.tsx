import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/lib/format";

export const metadata: Metadata = {
  title: "Contact | Desderia Bureau de Change",
  description: "Visit or contact Desderia Bureau de Change at Sky City Mall, Dar es Salaam.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent("Sky City Mall, Dar es Salaam, Tanzania");

  return (
    <>
      <PageHeader kicker="Contact" title="Find the Desderia counter" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        <div className="lg:col-span-5">
          <dl className="border-t-[3px] border-double border-gold-dark">
            <div className="border-b border-black/10 py-5">
              <dt className="engraved text-sm text-gold-dark">Address</dt>
              <dd className="mt-1 text-xl text-foreground">{ADDRESS}</dd>
            </div>
            <div className="border-b border-black/10 py-5">
              <dt className="engraved text-sm text-gold-dark">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${PHONE_TEL}`} className="tabular text-xl font-semibold text-foreground hover:text-gold-dark">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div className="border-b border-black/10 py-5">
              <dt className="engraved text-sm text-gold-dark">WhatsApp</dt>
              <dd className="mt-1">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-foreground hover:text-gold-dark"
                >
                  Send us a message
                </a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="engraved text-sm text-gold-dark">Opening hours</dt>
              <dd className="mt-1 text-muted">
                Please call ahead to confirm. Hours may change on public holidays.
              </dd>
            </div>
          </dl>
        </div>

        <div className="border border-gold/50 p-1.5 lg:col-span-7">
          <iframe
            title="Map showing Desderia Bureau de Change at Sky City Mall"
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-full min-h-[380px] w-full sepia-[.35]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}
