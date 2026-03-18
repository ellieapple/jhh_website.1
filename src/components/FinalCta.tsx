"use client";

import { useModal } from "@/components/providers";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export default function FinalCta() {
  const { openModal } = useModal();
  return (
    <section id="contact" className="px-6 sm:px-10 py-20 text-center" style={{ background: "var(--slate-900)" }}>
      <h2
        className="font-serif mb-3"
        style={{ fontSize: "clamp(26px,4vw,40px)", color: "var(--warm-white)" }}
      >
        Ready to start your project?
      </h2>
      <p
        className="text-[17px] leading-relaxed mb-8 mx-auto"
        style={{ color: "rgba(245,242,237,0.56)", maxWidth: "520px" }}
      >
        Tell us about your construction, inspection, or consultation needs. We&rsquo;ll get back to you within 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button onClick={openModal} className="btn-primary justify-center">
          Contact Us
        </button>
        <a href={PHONE_HREF} className="btn-secondary justify-center">
          Call {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}

