import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

test("global script tolerates pages without the home slider", () => {
	const handlers = [];
	const currentYear = {};
	const document = {
		addEventListener: (event, handler) => event === "DOMContentLoaded" && handlers.push(handler),
		getElementById: (id) => id === "currentYear" ? currentYear : null,
		querySelector: () => null,
		querySelectorAll: () => [],
	};

	vm.runInNewContext(readFileSync("public/js/ford.js", "utf8"), { document, window: {}, Date });
	assert.doesNotThrow(() => handlers.forEach((handler) => handler()));
	assert.equal(currentYear.textContent, new Date().getFullYear());
});
