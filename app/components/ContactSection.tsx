"use client";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  MessageSquare,
  Twitter,
  Linkedin,
  SendHorizonal,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_0),
        linear-gradient(90deg,rgba(0,255,234,0.02)_1px,transparent_0)]
    bg-[size:25px_25px,25px_25px] py-36"
    >
      {/* BACKGROUND GLOW */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.22),transparent_45%),radial-gradient(circle_at_75%_70%,rgba(16,185,129,0.16),transparent_45%)]" /> */}

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-24 text-center">
          <span className="text-[0.85rem] font-medium tracking-[0.35em] text-[#00ff84]">
            CONNECT
          </span>
          <h2 className="mt-4 text-[2.8rem] font-space font-extrabold leading-[1.15] text-[#00ff84]">
            Get In <span className="text-[#ffffff]">Touch</span>
          </h2>
          <div className="mx-auto mb-4 h-[2px] w-[60px] bg-[linear-gradient(90deg,transparent,#00ff84,transparent)]" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-[480px_minmax(0,1fr)]">
          {/* LEFT */}
          {/* LEFT ACTIVE CARD */}
<div className="rounded-[22px] border border-emerald-500/25 bg-[rgba(26,26,26,.5)] p-8 shadow-[0_10_30px_rgba(0,0,0,0.25),0_0_1px_rgba(255,255,255,0.05)] space-y-8">

            <p className="max-w-md text-[0.95rem] leading-[1.7] text-[#e0e0e0]">
              Have a project in mind? Our team is ready to help turn your
              vision into reality. Let’s discuss your goals and requirements.
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

            {/* SOCIAL */}
            <div className="pt-2">
              <p className="mb-3 text-[1.1rem] text-[#ffffff] font-space font-semibold">
                Connect With Us
              </p>
              <div className="flex flex-wrap gap-[10px]">
      <SocialButton icon={<Twitter size={16} />} text="Twitter" />
      <SocialButton icon={<Linkedin size={16} />} text="LinkedIn" />
      <SocialButton icon={<SendHorizonal size={16} />} text="Telegram" />
    </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="mx-auto w-full max-w-[640px] rounded-[20px] border border-emerald-500/20 bg-[rgba(26,26,26,.5)] p-10 ">
            {/* <span className="text-[11px] tracking-[0.2em] text-emerald-300">
              Getting Started
            </span> */}

            <h3 className="mt-2 text-[1.1rem] font-bold  text-white font-space">
              Send a Message
            </h3>
            <p className="mt-1 text-[0.85rem] text-[#a0a0a0]">
              We’ll respond within 24 hours
            </p>

            <form className="mt-10 space-y-5">
              <Input icon={<User size={16} />} placeholder="Your full name" />
              <Input icon={<Mail size={16} />} placeholder="Your email address" />
              <Input icon={<MessageSquare size={16} />} placeholder="Subject" />
              <Input icon={<Phone size={16} />} placeholder="Phone (optional)" />

              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-neutral-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(16,185,129,0.8)] transition hover:bg-emerald-300"
              >
                Send Message <Send size={16} />
              </button>

              <p className="text-center text-xs text-neutral-400">
                By submitting, you agree to our{" "}
                <span className="text-emerald-400">
                  Privacy Policy
                </span>
              </p>
            </form>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-32 grid grid-cols-1 bg-[rgba(26,26,26,.4)] border border-[rgba(255,255,255,.07)] rounded-lg md:grid-cols-3">
          <Stat value="24h" label="Response Time" />
          <Stat value="150+" label="Clients Worldwide" />
          <Stat value="98%" label="Client Satisfaction" />
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPONENTS ---------- */

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
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-[rgba(255,255,255,.07)]
        bg-[rgba(30,30,30,.4)] p-5
        
        transition-all duration-300
        hover:border-emerald-400
        hover:shadow-[inset_0_0_60px_rgba(16,185,129,0.25),0_0_35px_rgba(16,185,129,0.25)]
        hover:-translate-y-[2px] 
      "
    >
      {/* subtle glow layer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.12),transparent_60%)] opacity-70" />

      <div className="relative z-10 flex gap-4">
        {/* ICON */}
        <div
          className="
            flex h-11 w-11 items-center justify-center rounded-xl
            bg-[] border text-[#00ff84]
        
            
          "
        >
          {icon}
        </div>

        {/* TEXT */}
        <div>
          <p className="text-[1rem] font-space uppercase tracking-wide font-semibold text-[#ffffff]">
            {title}
          </p>
          <p className="mt-1 text-[0.85rem] font-medium text-[#d0d0d0]">
            {value}
          </p>
          <p className="mt-1 text-[0.75rem] text-[#a0a0a0]">
            {sub}
          </p>
        </div>
      </div>
    </div>
  );
}


function Input({
  icon,
  placeholder,
}: {
  icon: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400">
        {icon}
      </span>
      <input
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-white/10 bg-black/40 pl-11 pr-4 text-sm text-white placeholder:text-neutral-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
      />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className=" bg-black/50 py-8 text-center">
      <p className="text-2xl font-semibold text-emerald-400">
        {value}
      </p>
      <p className="mt-1 text-sm text-neutral-400">{label}</p>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-neutral-300 hover:text-emerald-400 hover:border-emerald-400 transition">
      {icon}
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
      className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-neutral-300 transition
      hover:border-emerald-400 hover:text-emerald-400
      hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]"
    >
      {icon}
      {text}
    </button>
  );
}
