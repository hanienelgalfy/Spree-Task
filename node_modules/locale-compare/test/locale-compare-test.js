"use strict";

const assert = require("assert");

const compare = require("../src/locale-compare");

(function test_works() {
	assert.ok(compare()("ä", "z") < 0);
})();

if (Intl
		&& "Collator" in Intl
		&& Intl.Collator.supportedLocalesOf("sv").length > 0) {
	(function test_works_with_specified_locale() {
		assert.ok(compare("sv")("ä", "z") > 0);
	})();
}

console.log("All tests passed.");
