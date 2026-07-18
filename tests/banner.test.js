import test from "node:test";
import assert from "node:assert/strict";
import { demoBanner } from "../src/banner.js";

test("returns the demo banner text", () => {
  assert.equal(demoBanner(), "OpenSpec Shipper Demo");
});
