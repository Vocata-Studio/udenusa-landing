'use client';

import { Fragment, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import CopyContact from '@/components/CopyContact';
import { CONTACT_EMAIL } from '@/lib/contact';

/**
 * Answers carry inline markup (<br> lists), so they are still injected as HTML
 * — but where one names the support address, that address becomes a copy
 * button instead of plain text. The translation stays a flat string so the
 * FAQPage JSON-LD can use it verbatim.
 */
function FaqAnswer({
  html,
  copyLabel,
  copiedLabel,
}: {
  html: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const parts = html.split(CONTACT_EMAIL);

  if (parts.length === 1) {
    return <p dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <p>
      {parts.map((part, index) => (
        <Fragment key={index}>
          <span dangerouslySetInnerHTML={{ __html: part }} />
          {index < parts.length - 1 && (
            <CopyContact
              value={CONTACT_EMAIL}
              copyLabel={copyLabel}
              copiedLabel={copiedLabel}
            />
          )}
        </Fragment>
      ))}
    </p>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>{t.faqTitle}</h2>
      <div id="faq-container">
        {t.faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <strong>{item.question}</strong>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>
            <div className="faq-answer">
              <FaqAnswer
                html={item.answer}
                copyLabel={t.copyLabel}
                copiedLabel={t.copiedLabel}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
