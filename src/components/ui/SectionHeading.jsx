import React from "react";

export const SectionHeading = ({ title, subtitle, highlightedText }) => {
  let highlightedSubtitle;
  if (highlightedText) {
    // Replace the word with a span containing accent color
    highlightedSubtitle = subtitle.replace(
      highlightedText,
      `<span class="text-accent-orange">${highlightedText}</span>`
    );
  } else {
    // If no text is provided, keep the subtitle as is
    highlightedSubtitle = subtitle;
  }

  return (
    <header className="section-heading">
      <h1>{title}</h1>
      {subtitle && (
        <h2
          dangerouslySetInnerHTML={{
            __html: highlightedSubtitle,
          }}
        />
      )}
    </header>
  );
};
