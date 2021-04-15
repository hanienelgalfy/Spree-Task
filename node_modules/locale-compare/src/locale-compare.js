"use strict";

function detectCollator(locale) {
	return (
		Intl
		&& "Collator" in Intl
		&& (typeof locale === "undefined" || Intl.Collator.supportedLocalesOf(locale).length > 0)
	);
}

function localeCompare(locale) {
  return detectCollator(locale)
    ? new Intl.Collator(locale).compare
    : function(a, b) {
        return a.localeCompare(b);
      };
}

module.exports = localeCompare;
