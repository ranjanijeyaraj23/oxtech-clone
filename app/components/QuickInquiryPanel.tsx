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
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[50] bg-black/40
          transition-opacity
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* PANEL */}
      <div
        className={`
          fixed z-[60] bg-[#0b0f0d]/95
          border border-emerald-500/20
          shadow-[0_0_45px_rgba(16,185,129,0.28)]
          transition-transform duration-300

          /* MOBILE: bottom sheet */
          left-0 right-0 bottom-0
          rounded-t-2xl
          w-full max-h-[85vh]

          /* TABLET */
          md:left-1/2 md:top-1/2 md:bottom-auto
          md:w-[420px] md:max-h-[560px]
          md:-translate-x-1/2 md:-translate-y-1/2
          md:rounded-2xl

          /* DESKTOP */
          lg:left-auto lg:right-6 lg:top-[96px]
          lg:translate-x-0 lg:translate-y-0

          ${open ? "translate-y-0" : "translate-y-full md:translate-y-[-50%] md:opacity-0"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
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
        <div className="flex max-h-[calc(85vh-56px)] flex-col justify-between overflow-y-auto px-5 py-5">
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
              className="
                flex h-[44px] w-full items-center justify-center gap-2
                rounded-lg bg-emerald-400
                text-[0.95rem] font-medium text-black
                hover:bg-emerald-300 transition"
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
function Input({
  icon,
  placeholder,
}: {
  icon: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div className="relative">
      {/* Icon */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400">
        {icon}
      </span>

      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        className="
          h-[44px] w-full
          rounded-[10px]
          border border-white/10
          bg-black/40
          pl-9 pr-3
          text-[0.95rem] text-white
          placeholder:text-neutral-500
          focus:border-emerald-400
          focus:outline-none
          focus:ring-1 focus:ring-emerald-400
        "
      />
    </div>
  );
}
function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button
      type="button"
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full
        border border-white/10
        bg-black/40
        text-neutral-300
        transition
        hover:border-emerald-400
        hover:text-emerald-400
        hover:shadow-[0_0_18px_rgba(16,185,129,0.6)]
      "
    >
      {icon}
    </button>
  );
}
