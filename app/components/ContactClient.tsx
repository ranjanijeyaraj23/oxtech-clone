"use client";

import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";

export default function ContactClient() {
  return (
    <div className="w-full rounded-[20px] border border-emerald-500/20
      bg-[rgba(26,26,26,.5)] p-6 sm:p-8">

      <h3 className="text-[1.1rem] font-space font-bold text-white">
        Send a Message
      </h3>
      <p className="mt-1 text-[0.85rem] text-[#a0a0a0]">
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
          className="w-full rounded-xl border border-white/10
          bg-black/40 px-4 py-3 text-sm text-white"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2
          rounded-xl bg-emerald-400 py-3 text-sm font-medium text-black">
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
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400">
        {icon}
      </span>
      <input
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-white/10
        bg-black/40 pl-11 pr-4 text-sm text-white"
      />
    </div>
  );
}
