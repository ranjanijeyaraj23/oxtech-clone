"use client";

import {
  X,
  Send,
  User,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  SendHorizonal,
  Github,
} from "lucide-react";

export default function QuickInquiryPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* OVERLAY (below navbar) */}
     {/* OVERLAY (no blur, below navbar) */}
<div
  onClick={onClose}
  className={`fixed left-0 right-0 bottom-0 top-[72px]
  z-[50] bg-black/30 transition-opacity
  ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
/>

{/* PANEL (floating card style) */}
<div
  className={`fixed right-6 top-[96px] z-[60]
  w-[400px] max-h-[560px]
  overflow-hidden
  rounded-2xl
  border border-emerald-500/20
  bg-[#0b0f0d]/95
  shadow-[-12px_0_45px_rgba(16,185,129,0.28)]
  transition-transform duration-300
  ${open ? "translate-x-0" : "translate-x-[120%]"}`}
>

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h3 className="text-[0.95rem] font-medium text-white">
            Get In Touch
          </h3>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* BODY */}
        <div className="flex  flex-col justify-between px-6 py-5">
          {/* FORM */}
          <form className="space-y-4">
            <Input icon={<User size={14} />} placeholder="Name" />
            <Input icon={<Mail size={14} />} placeholder="Email" />
            <Input icon={<Phone size={14} />} placeholder="Phone (optional)" />

            <textarea
              rows={4}
              placeholder="Message"
              className="w-full rounded-[10px]
              border border-white/10 bg-black/40
              px-4 py-3 text-[0.95rem] text-white
              placeholder:text-neutral-500
              focus:border-emerald-400 focus:outline-none"
            />

            <button
              type="submit"
              className="mt-2 flex h-[44px] w-full items-center justify-center gap-2
               
              text-[0.95rem] font-medium text-white"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          {/* SOCIAL */}
          <div className="pt-6">
            <p className="mb-3 text-xs text-neutral-400">
              Connect With Us
            </p>
            <div className="flex gap-3">
              <SocialIcon icon={<Twitter size={14} />} />
              <SocialIcon icon={<Linkedin size={14} />} />
              <SocialIcon icon={<SendHorizonal size={14} />} />
              <SocialIcon icon={<Github size={14} />} />
              <SocialIcon icon={<Mail size={14} />} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Input({
  icon,
  placeholder,
}: {
  icon: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400">
        {icon}
      </span>
      <input
        placeholder={placeholder}
        className="h-[44px] w-full rounded-[10px]
        border border-white/10 bg-black/40
        pl-9 pr-3 text-[0.95rem] text-white
        placeholder:text-neutral-500
        focus:border-emerald-400 focus:outline-none"
      />
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div
      className="flex h-9 w-9 items-center justify-center rounded-full
      border border-white/10 bg-black/40
      text-neutral-300 transition
      hover:border-emerald-400 hover:text-emerald-400
      hover:shadow-[0_0_18px_rgba(16,185,129,0.6)]"
    >
      {icon}
    </div>
  );
}
