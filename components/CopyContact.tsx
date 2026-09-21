'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const TOAST_MS = 2200;

/**
 * Puts the address on the clipboard instead of firing a mailto:, which hands
 * the visitor an empty draft in whatever client the OS decided to register —
 * often none at all on a phone that only has webmail.
 */
async function writeToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Permission denied, or an insecure context: fall through.
  }

  // execCommand is deprecated but still the only route on http:// origins.
  try {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.top = '0';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand('copy');
    document.body.removeChild(field);
    return copied;
  } catch {
    return false;
  }
}

type CopyContactProps = {
  /** The value put on the clipboard, and shown unless `label` overrides it. */
  value: string;
  /** Verb for the accessible name, e.g. "kopier" — the button carries no
   * visible affordance, so this is the only thing telling assistive tech that
   * activating it copies rather than navigates. */
  copyLabel: string;
  /** Toast confirmation, e.g. "Kopieret". */
  copiedLabel: string;
  label?: string;
  className?: string;
};

export default function CopyContact({
  value,
  copyLabel,
  copiedLabel,
  label,
  className,
}: CopyContactProps) {
  const [toast, setToast] = useState<'copied' | 'failed' | null>(null);
  const [mounted, setMounted] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const handleCopy = useCallback(async () => {
    const copied = await writeToClipboard(value);
    setToast(copied ? 'copied' : 'failed');

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), TOAST_MS);
  }, [value]);

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className={className ? `copy-contact ${className}` : 'copy-contact'}
        aria-label={`${label ?? value} – ${copyLabel}`}
      >
        <span className="copy-contact-value">{label ?? value}</span>
      </button>

      {/* The live region stays mounted and only its contents change: screen
          readers announce a region inserted mid-flight unreliably. */}
      {mounted &&
        createPortal(
          <div role="status" aria-live="polite">
            {toast && (
              <div className="copy-toast">
                {toast === 'copied' && (
                  <>
                    <svg
                      className="copy-toast-check"
                      viewBox="0 0 20 20"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 10.5 8 14.5 16 5.5" />
                    </svg>
                    <span className="copy-toast-label">{copiedLabel}</span>
                  </>
                )}
                <span className="copy-toast-value">{value}</span>
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
