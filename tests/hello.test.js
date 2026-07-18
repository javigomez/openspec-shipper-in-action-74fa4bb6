import test from "node:test";
import assert from "node:assert/strict";
import { greeting } from "../src/hello.js";

test("returns the default hello world greeting", () => {
  assert.equal(greeting(), "Hello, world!");
});

test("returns a named greeting when a name is provided", () => {
  assert.equal(greeting("Ada"), "Hello, Ada!");
});

test("falls back to world when given a blank name", () => {
  assert.equal(greeting(""), "Hello, world!");
  assert.equal(greeting("  "), "Hello, world!");
});

test("returns a Spanish greeting when language is es", () => {
  assert.equal(greeting("Ada", "es"), "Hola, Ada!");
});

test("returns Spanish default greeting when no name and language is es", () => {
  assert.equal(greeting(undefined, "es"), "Hola, mundo!");
  assert.equal(greeting("", "es"), "Hola, mundo!");
  assert.equal(greeting("  ", "es"), "Hola, mundo!");
});

test("falls back to English for unknown language", () => {
  assert.equal(greeting("Ada", "fr"), "Hello, Ada!");
  assert.equal(greeting(undefined, "fr"), "Hello, world!");
});
