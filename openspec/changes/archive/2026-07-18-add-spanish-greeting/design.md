# Design

## Context

After `add-name-greeting`, `greeting()` accepts an optional name and the CLI can
pass one argument from `process.argv`.

## Decision

Extend `greeting()` with an optional language parameter. `es` returns
`Hola, <name>!`; missing or unknown languages keep the English behavior.

The CLI can accept the language as a second positional argument:

```bash
node src/hello.js Ada es
```

## Testing

Use `node:test` in `tests/hello.test.js`:

- Spanish greeting with a name
- Spanish default greeting
- Unknown language falls back to English
