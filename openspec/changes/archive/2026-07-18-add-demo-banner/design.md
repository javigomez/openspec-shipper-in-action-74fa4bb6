# Design

## Context

The current implementation exposes the hello greeting from `src/hello.js`. The
existing demo changes modify that greeting flow in sequence, which makes the
queue dependency behavior clear but does not demonstrate independent work.

## Decision

Add a separate `src/banner.js` module that exports `demoBanner()` and prints the
same value when executed directly. The banner should return
`OpenSpec Shipper Demo`.

Add a focused `tests/banner.test.js` file so this change can be implemented
without touching the greeting tests.

## Testing

Use `node:test` in `tests/banner.test.js`:

- banner function returns the expected project name
- package checks include the new banner source and test files
