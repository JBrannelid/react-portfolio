import React from "react";

export const SectionHeading = ({ title, subtitle, highlightedText }) => {
  let highlightedSubtitle;
  if (highlightedText) {
    // Replace the word with a span containing accent color
    highlightedSubtitle = subtitle.replace(
      highlightedText,
      `<span class="text-[var(--accent-orange-color)]">${highlightedText}</span>`
    );
  } else {
    // If no text is provided, keep the subtitle as is
    highlightedSubtitle = subtitle;
  }

  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {/* If subtitle exists, display it */}
      {subtitle && (
        <h2
          className="text-xl max-w-2xl mx-auto"
          // If highlightedText is provided, use dangerouslySetInnerHTML
          dangerouslySetInnerHTML={{
            __html: highlightedSubtitle,
          }}
        />
      )}
    </header>
  );
};
