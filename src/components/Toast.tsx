"use client";

import { useEffect, useState } from "react";

export default function Toast() {
  const [message, setMessage] = useState("Portfolio coming soon — we're adding project photos!");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setMessage(detail);
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => setMessage("Portfolio coming soon — we're adding project photos!"), 400);
      }, 3500);
    };

    window.addEventListener("jhh:toast", handler);
    return () => window.removeEventListener("jhh:toast", handler);
  }, []);

  const showDefault = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3500);
  };

  // Expose to window so Hero can reference it
  useEffect(() => {
    (window as Window & { jhhShowToast?: () => void }).jhhShowToast = showDefault;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="fixed bottom-8 left-1/2 z-[3000] px-7 py-3.5 text-sm font-medium transition-transform duration-[400ms]"
      style={{
        background: "var(--slate-900)",
        color: "var(--warm-white)",
        borderLeft: "3px solid var(--accent-gold)",
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(100px)",
        transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
      }}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
