# Design

## Context

The current implementation exposes `greeting()` from `src/hello.js` and prints
that value when the file is executed directly.

## Decision

Change `greeting()` to accept an optional `name` string. When no usable name is
provided, return `Hello, world!`. When a name is provided, trim it and return
`Hello, <name>!`.

The CLI entrypoint can read `process.argv[2]` and pass it to `greeting()`.

## Testing

Use `node:test` in `tests/hello.test.js`:

- default greeting remains unchanged
- named greeting uses the provided name
- blank input falls back to `world`
