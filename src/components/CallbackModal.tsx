"use client";

import { useEffect, useRef, useState } from "react";
import { useModal, useToast } from "@/components/providers";

type FormData = {
  phone: string;
  fullname: string;
  email: string;
  message: string;
  file: File | null;
};

const EMPTY: FormData = {
  phone: "",
  fullname: "",
  email: "",
  message: "",
  file: null,
};

export default function CallbackModal() {
  const { isOpen, closeModal } = useModal();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setStep(1);
      setForm(EMPTY);
      setErrors({});
    }, 300);
  };

  const validate = (s: number): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (s === 1) {
      if (!form.phone.trim()) e.phone = "Phone number is required.";
      else if (!/^[\d\s\-()+.]{7,}$/.test(form.phone))
        e.phone = "Please enter a valid phone number.";
    }
    if (s === 2) {
      if (!form.fullname.trim()) e.fullname = "Full name is required.";
      if (!form.email.trim()) e.email = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = "Please enter a valid email address.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextStep = () => {
    if (!validate(step)) return;
    setStep((s) => s + 1);
  };

  const prevStep = () => {
    setErrors({});
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    if (!validate(3)) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: form.phone,
          fullname: form.fullname,
          email: form.email,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = (data as { error?: string }).error ?? "Something went wrong. Please call us directly.";
        setErrors({ message: msg });
        return;
      }

      handleClose();
      showToast("Message sent! We'll be in touch within 24 hours.");
    } catch {
      setErrors({ message: "Network error. Please call us directly at (267) 566-7725." });
    } finally {
      setSubmitting(false);
    }
  };

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    };

  const inputClass =
    "w-full px-4 py-3.5 text-[15px] outline-none transition-[border-color] duration-200 font-[inherit]";
  const inputStyle = (hasError: boolean) => ({
    border: hasError ? "1px solid var(--error)" : "1px solid var(--sand)",
    background: "var(--warm-white)",
    color: "var(--text-dark)",
    fontFamily: "var(--font-plus-jakarta)",
  });

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[2000] flex items-center justify-center p-5 transition-opacity duration-300"
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "all" : "none",
        }}
        onClick={handleClose}
        aria-modal="true"
        role="dialog"
        aria-label="Request a callback"
      >
        {/* Modal */}
        <div
          className="relative w-full max-w-[480px] p-11 transition-transform duration-[400ms]"
          style={{
            background: "#fff",
            transform: isOpen ? "translateY(0)" : "translateY(20px)",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-2xl bg-transparent border-none cursor-pointer transition-colors duration-200"
            style={{ color: "var(--text-light)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-dark)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-light)")
            }
            aria-label="Close"
          >
            ×
          </button>

          {/* Step dots */}
          <div className="flex gap-2 mb-7">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-[3px] w-8 transition-colors duration-300"
                style={{
                  background:
                    n < step
                      ? "var(--success)"
                      : n === step
                      ? "var(--accent-gold)"
                      : "var(--sand)",
                }}
              />
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h3
                className="text-2xl mb-1"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Request a Callback
              </h3>
              <p
                className="text-sm mb-7"
                style={{ color: "var(--text-light)" }}
              >
                Step 1 — How can we reach you?
              </p>
              <Field label="Phone Number" required error={errors.phone}>
                <input
                  ref={firstInputRef}
                  type="tel"
                  placeholder="(xxx) xxx-xxxx"
                  value={form.phone}
                  onChange={set("phone")}
                  className={inputClass}
                  style={inputStyle(!!errors.phone)}
                  autoComplete="tel"
                />
              </Field>
              <Actions>
                <span />
                <NextBtn onClick={nextStep}>Next →</NextBtn>
              </Actions>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h3
                className="text-2xl mb-1"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                A Few More Details
              </h3>
              <p
                className="text-sm mb-7"
                style={{ color: "var(--text-light)" }}
              >
                Step 2 — Who are we speaking with?
              </p>
              <Field label="Full Name" required error={errors.fullname}>
                <input
                  ref={firstInputRef}
                  type="text"
                  placeholder="John Doe"
                  value={form.fullname}
                  onChange={set("fullname")}
                  className={inputClass}
                  style={inputStyle(!!errors.fullname)}
                  autoComplete="name"
                />
              </Field>
              <Field label="Email" required error={errors.email}>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                  className={inputClass}
                  style={inputStyle(!!errors.email)}
                  autoComplete="email"
                />
              </Field>
              <Actions>
                <BackBtn onClick={prevStep}>← Back</BackBtn>
                <NextBtn onClick={nextStep}>Next →</NextBtn>
              </Actions>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h3
                className="text-2xl mb-1"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Tell Us More
              </h3>
              <p
                className="text-sm mb-7"
                style={{ color: "var(--text-light)" }}
              >
                Step 3 — What&apos;s on your mind?
              </p>
              <Field label="Message">
                <textarea
                  placeholder="Tell us about your project, inspection, or consultation needs"
                  value={form.message}
                  onChange={set("message")}
                  className={`${inputClass} resize-y min-h-[100px]`}
                  style={inputStyle(false)}
                />
              </Field>
              <Field label="Attachments" sublabel="(optional)">
                <label
                  className="block border-2 border-dashed p-6 text-center cursor-pointer text-[13px] transition-[border-color] duration-200"
                  style={{
                    borderColor: "var(--sand)",
                    color: "var(--text-light)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent-gold)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--sand)")
                  }
                >
                  {form.file
                    ? form.file.name
                    : "Click to upload or drag & drop"}
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        file: e.target.files?.[0] ?? null,
                      }))
                    }
                  />
                </label>
              </Field>
              <Actions>
                <BackBtn onClick={prevStep}>← Back</BackBtn>
                <NextBtn onClick={handleSubmit} disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message →"}
                </NextBtn>
              </Actions>
            </>
          )}
        </div>
      </div>
    </>
  );
}

// Sub-components
function Field({
  label,
  required,
  sublabel,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  sublabel?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <label
        className="block text-[12px] font-bold tracking-[0.06em] uppercase mb-2"
        style={{ color: "var(--text-mid)" }}
      >
        {label}
        {required && (
          <span style={{ color: "var(--error)" }} aria-hidden>
            {" "}
            *
          </span>
        )}
        {sublabel && (
          <span
            className="ml-1 font-normal normal-case tracking-normal text-[12px]"
            style={{ color: "var(--text-light)" }}
          >
            {sublabel}
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          className="text-[12px] mt-1.5"
          style={{ color: "var(--error)" }}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function Actions({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-3 mt-7">{children}</div>
  );
}

function NextBtn({
  onClick,
  children,
  disabled,
}: {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="ml-auto flex items-center gap-1.5 px-7 py-3.5 text-[13px] font-bold tracking-[0.06em] uppercase transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      style={{
        background: "var(--accent-gold)",
        color: "var(--slate-900)",
        border: "none",
      }}
      onMouseEnter={(e) => {
        if (!disabled)
          e.currentTarget.style.background = "var(--accent-gold-light)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--accent-gold)";
      }}
    >
      {children}
    </button>
  );
}

function BackBtn({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-6 py-3.5 text-[13px] font-semibold bg-transparent cursor-pointer transition-[border-color] duration-200"
      style={{
        border: "1px solid var(--sand)",
        color: "var(--text-mid)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--text-mid)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--sand)")
      }
    >
      {children}
    </button>
  );
}
