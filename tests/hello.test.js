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
