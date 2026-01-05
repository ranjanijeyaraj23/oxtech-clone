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
      bg-[linear-gradient(rgba(31,122,255,0.03)_1px,transparent_0),
      linear-gradient(90deg,rgba(59,178,115,0.03)_1px,transparent_0)]
      bg-[size:26px_26px,26px_26px]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-24">

        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-[0.8rem] tracking-[0.35em] text-[#3bb273]">
            CONNECT
          </span>

          <h2
            className="
              mt-4
              text-[2.2rem] sm:text-[2.6rem] md:text-[2.9rem]
              font-space font-extrabold leading-tight
              bg-[linear-gradient(135deg,#1f7aff,#3bb273)]
              bg-clip-text text-transparent
            "
          >
            Get In <span className="text-white">Touch</span>
          </h2>

          <div
            className="
              mx-auto mt-4 h-[2px] w-[60px]
              bg-[linear-gradient(90deg,transparent,#1f7aff,#3bb273,transparent)]
            "
          />
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <div
            className="
              rounded-[22px]
              border border-[#3bb273]/30
              bg-[rgba(18,24,38,0.55)]
              p-6 sm:p-8 space-y-8
            "
          >
            <p className="text-[0.95rem] leading-[1.7] text-[#dbe6ff]">
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

          {/* RIGHT */}
          <ContactClient />
        </div>

        {/* STATS */}
        <div
          className="
            mt-24 grid grid-cols-1 sm:grid-cols-3
            overflow-hidden rounded-lg
            border border-white/10
            bg-[rgba(18,24,38,0.5)]
          "
        >
          <Stat value="24h" label="Response Time" />
          <Stat value="150+" label="Clients Worldwide" />
          <Stat value="98%" label="Client Satisfaction" />
        </div>
      </div>
    </section>
  );
}

/* ================== HELPERS ================== */

function InfoCard({ icon, title, value, sub }: any) {
  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-black/45 p-5
        transition
        hover:border-[#3bb273]
        hover:shadow-[0_0_30px_rgba(59,178,115,0.35)]
      "
    >
      <div className="flex gap-4">
        <div
          className="
            flex h-11 w-11 items-center justify-center
            rounded-xl
            border border-[#1f7aff]/40
            bg-black/50
            text-[#1f7aff]
          "
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-sm uppercase font-semibold text-white">
            {title}
          </p>
          <p className="mt-1 text-sm text-[#dbe6ff] break-all sm:break-words">
            {value}
          </p>
          <p className="mt-1 text-xs text-[#9fb6e5]">
            {sub}
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialButton({ icon, text }: any) {
  return (
    <button
      type="button"
      className="
        flex items-center gap-2 rounded-lg
        border border-white/10 bg-black/45
        px-4 py-2 text-sm text-[#c7d8ff]
        hover:border-[#1f7aff]
        hover:text-[#1f7aff]
        transition
      "
    >
      {icon}
      {text}
    </button>
  );
}

function Stat({ value, label }: any) {
  return (
    <div className="bg-black/55 py-8 text-center">
      <p className="text-2xl font-semibold text-[#3bb273]">
        {value}
      </p>
      <p className="mt-1 text-sm text-[#a8b9e6]">
        {label}
      </p>
    </div>
  );
}