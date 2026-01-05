"use client";

import { useState } from "react";
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
import { useEffect } from "react";



export default function QuickInquiryPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formEl = e.currentTarget as HTMLFormElement;

    // 🔥 Native browser validation popup
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
  if (open) {
    // reset everything when form opens
    setSuccess(false);
    setLoading(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }
}, [open]);
  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[40] bg-transparent transition-opacity duration-300 ease-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* PANEL */}
      <div
        className={`fixed z-[50] bg-[rgba(18,18,18,.92)] border border-white/10 backdrop-blur-[6px] transition-all duration-300 ease-out
        left-0 right-0 bottom-0 w-full max-h-[85vh] rounded-t-2xl
        md:left-1/2 md:top-1/2 md:bottom-auto md:w-[380px] md:max-h-[560px] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl
        lg:left-auto lg:right-6 lg:top-[96px] lg:translate-x-0 lg:translate-y-0
        ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95 pointer-events-none"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h3 className="relative inline-block text-[1.3rem] font-space font-bold text-white after:absolute after:-bottom-[4px] after:left-0 after:w-[30px] after:h-[2px] after:bg-[linear-gradient(90deg,#1f7aff,#3bb273)] hover:after:w-full">
            Get In Touch
          </h3>

          <button onClick={onClose} className="text-white">
            <X size={18} />
          </button>
        </div>

        {/* BODY */}
        <div className="flex flex-col justify-between px-5 py-5">
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <Input
              name="name"
              icon={<User size={14} />}
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <Input
              name="email"
              icon={<Mail size={14} />}
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <Input
              name="phone"
              icon={<Phone size={14} />}
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            {/* TEXTAREA */}
            <div className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[linear-gradient(90deg,#1f7aff,transparent)] hover:after:w-full focus-within:after:w-full">
              <textarea
  rows={4}
  required
  value={form.message}
  placeholder="Message"
  onChange={(e) => {
    e.currentTarget.setCustomValidity("");
    setForm({ ...form, message: e.target.value });
  }}
  onInvalid={(e) =>
    e.currentTarget.setCustomValidity("Please enter your message.")
  }
  className="
    w-full rounded-[10px]
    border border-white/10 bg-black/40
    px-4 py-3 text-[0.95rem] text-white
    placeholder:text-neutral-500
    resize-none
    focus:outline-none
    focus:ring-0
    focus:border-[#3bb273]
    hover:border-[#3bb273]
  "
/>

            </div>

            {/* SEND BUTTON */}
          <button
  type="submit"
  disabled={loading || success}
  className="
    group relative overflow-hidden
    flex h-[42px] w-full items-center justify-center gap-2
    rounded-full px-[22px]
    bg-transparent
    text-[0.95rem] font-semibold text-white
    transition-all duration-300 ease-out
    hover:-translate-y-[3px]
    hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]
    active:scale-[0.97]
    disabled:opacity-70 disabled:cursor-not-allowed
  "
>
  {/* animated gradient sweep */}
  <span
    className="
      pointer-events-none
      absolute top-0 left-[-100%]
      h-full w-full
      bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]
      transition-all duration-600 ease-out
      group-hover:left-[100%]
    "
  />

  <span className="relative z-10 flex items-center gap-2">
  {success ? (
    <>
      <span className="text-[#3bb273]">✓</span>
      Sent Successfully!
    </>
  ) : loading ? (
    "Sending..."
  ) : (
    <>
      Send Message <Send size={16} />
    </>
  )}
</span>

</button>



            
          </form>

          {/* SOCIAL */}
          <div className="pt-[15px] px-[20px] pb-[20px] border-t border-[rgba(40,40,40,.8)]">
            <h4 className="mb-[15px] text-center text-[#d0d0d0] font-semibold">
              Connect With Us
            </h4>
            <div className="flex gap-4 justify-center">
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

/* INPUT */
function Input({
  icon,
  placeholder,
  value,
  name,
  onChange,
}: {
  icon: React.ReactNode;
  placeholder: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const inputType =
    name === "email"
      ? "email"
      : name === "phone"
      ? "number"
      : "text";

  return (
    <div
      className="
        relative
        after:content-['']
        after:absolute
        after:left-0
        after:bottom-0
        after:h-[2px]
        after:w-[0%]
        after:bg-[linear-gradient(90deg,#1f7aff,transparent)]
        after:rounded-b-[4px]
        after:transition-[width]
        after:duration-300
        after:ease-in-out
        hover:after:w-full
        focus-within:after:w-full
        hover:[&>span]:text-[#3bb273]
        focus-within:[&>span]:text-[#3bb273]
        hover:[&>input]:border-[#3bb273]
        focus-within:[&>input]:border-[#3bb273]
      "
    >
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 transition-colors">
        {icon}
      </span>

      <input
        name={name}
        type={inputType}
        required={name !== "phone"}
        value={value}
        onChange={(e) => {
          e.currentTarget.setCustomValidity(""); // clear popup
          onChange?.(e);
        }}
        onInvalid={(e) => {
          const el = e.currentTarget;

          if (name === "email") {
            el.setCustomValidity(
              "Please include an '@' in the email address."
            );
          } else if (name !== "phone") {
            el.setCustomValidity("This field is required.");
          }
        }}
        placeholder={placeholder}
        className="
          h-[44px] w-full
          rounded-[10px]
          bg-[rgba(30,30,30,.5)]
          pl-9 pr-3
          text-[0.95rem] text-white
          placeholder:text-neutral-500
          border border-white/10
          transition-colors
          focus:outline-none
          focus:ring-0
          appearance-none
        "
      />
    </div>
  );
}



/* SOCIAL ICON */
function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(70,70,70,.3)] text-[#808080] hover:border-[#3bb273] hover:text-[#3bb273]">
      {icon}
    </button>
  );
}
