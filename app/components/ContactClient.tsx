"use client";

import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";

export default function ContactClient() {
  return (
    <div
      className="
        w-full rounded-[20px]
        border border-[#3bb273]/30
        bg-[rgba(18,24,38,0.55)]
        p-6 sm:p-8
      "
    >
      <h3 className="text-[1.1rem] font-space font-bold text-white">
        Send a Message
      </h3>

      <p className="mt-1 text-[0.85rem] text-[#9fb6e5]">
        We’ll respond within 24 hours
      </p>

      <form className="mt-8 space-y-4">
        <Input icon={<User size={16} />} placeholder="Your full name" />
        <Input icon={<Mail size={16} />} placeholder="Your email address" />
        <Input icon={<MessageSquare size={16} />} placeholder="Subject" />
        <Input icon={<Phone size={16} />} placeholder="Phone (optional)" />

        <textarea
          rows={4}
          placeholder="Tell us about your project..."
          className="
            w-full rounded-xl
            border border-white/10
            bg-black/45
            px-4 py-3
            text-sm text-[#dbe6ff]
            placeholder:text-[#7f97c6]
            focus:outline-none
            focus:border-[#1f7aff]
          "
        />

        <button
          type="submit"
          className="
            flex w-full items-center justify-center gap-2
            rounded-xl
            bg-[linear-gradient(135deg,#1f7aff,#3bb273)]
            py-3 text-sm font-medium text-white
            transition-all
            hover:shadow-[0_0_28px_rgba(59,178,115,0.55)]
            active:scale-[0.98]
          "
        >
          Send Message <Send size={16} />
        </button>
      </form>
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
      <span
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          text-[#1f7aff]
        "
      >
        {icon}
      </span>

      <input
        placeholder={placeholder}
        className="
          h-12 w-full rounded-xl
          border border-white/10
          bg-black/45
          pl-11 pr-4
          text-sm text-[#dbe6ff]
          placeholder:text-[#7f97c6]
          focus:outline-none
          focus:border-[#1f7aff]
        "
      />
    </div>
  );
}
