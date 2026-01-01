import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  SendHorizonal,
} from "lucide-react";
import ContactClient from "../components/ContactClient";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden
      bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_0),
      linear-gradient(90deg,rgba(0,255,234,0.02)_1px,transparent_0)]
      bg-[size:25px_25px,25px_25px]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24">

        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-[0.8rem] tracking-[0.35em] text-[#00ff84]">
            CONNECT
          </span>
          <h2 className="mt-4 text-[2.2rem] sm:text-[2.6rem] md:text-[2.9rem]
            font-space font-extrabold leading-tight text-[#00ff84]">
            Get In <span className="text-white">Touch</span>
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-[60px]
            bg-[linear-gradient(90deg,transparent,#00ff84,transparent)]" />
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <div className="rounded-[22px] border border-emerald-500/25
            bg-[rgba(26,26,26,.5)] p-6 sm:p-8 space-y-8">

            <p className="text-[0.95rem] leading-[1.7] text-[#e0e0e0]">
              Have a project in mind? Our team is ready to help turn your
              vision into reality.
            </p>

            <InfoCard
              icon={<Mail size={18} />}
              title="Email"
              value="contact@0xtechnologies.com"
              sub="General inquiries & partnerships"
            />

            <InfoCard
              icon={<MapPin size={18} />}
              title="Office"
              value="Chowk, Rajkot, Gujarat 360001"
              sub="Mon–Fri, 9AM–6PM IST"
            />

            <InfoCard
              icon={<Phone size={18} />}
              title="Phone"
              value="+91 99999 88888"
              sub="24/7 Business Support"
            />

            <div>
              <p className="mb-3 font-space font-semibold text-white">
                Connect With Us
              </p>
              <div className="flex flex-wrap gap-2">
                <SocialButton icon={<Twitter size={16} />} text="Twitter" />
                <SocialButton icon={<Linkedin size={16} />} text="LinkedIn" />
                <SocialButton icon={<SendHorizonal size={16} />} text="Telegram" />
              </div>
            </div>
          </div>

          {/* RIGHT (CLIENT FORM) */}
          <ContactClient />
        </div>

        {/* STATS */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3
          overflow-hidden rounded-lg border border-white/10
          bg-[rgba(26,26,26,.4)]">
          <Stat value="24h" label="Response Time" />
          <Stat value="150+" label="Clients Worldwide" />
          <Stat value="98%" label="Client Satisfaction" />
        </div>
      </div>
    </section>
  );
}

/* ================== SSR HELPERS ================== */

function InfoCard({
  icon,
  title,
  value,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5
      transition hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]">
      <div className="flex gap-4">
        <div className="flex h-11 w-11 items-center justify-center
          rounded-xl border border-emerald-400/30 bg-black/40 text-emerald-400">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-sm uppercase font-semibold text-white">
            {title}
          </p>
          <p className="mt-1 text-sm text-[#d0d0d0] break-all sm:break-words">
            {value}
          </p>
          <p className="mt-1 text-xs text-[#a0a0a0]">
            {sub}
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialButton({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg
        border border-white/10 bg-black/40
        px-4 py-2 text-sm text-neutral-300
        hover:border-emerald-400 hover:text-emerald-400 transition"
    >
      {icon}
      {text}
    </button>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="bg-black/50 py-8 text-center">
      <p className="text-2xl font-semibold text-emerald-400">
        {value}
      </p>
      <p className="mt-1 text-sm text-neutral-400">
        {label}
      </p>
    </div>
  );
}
