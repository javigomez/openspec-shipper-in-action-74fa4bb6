# Design

## Context

After `add-spanish-greeting`, `greeting()` can build English and Spanish
messages from a name and language.

## Decision

Add an optional `shout` flag to `greeting()`. Build the normal localized
message first, then uppercase it when shouting is enabled.

The CLI can accept `--shout` as a simple positional flag:

```bash
node src/hello.js Ada es --shout
```

## Testing

Use `node:test` in `tests/hello.test.js`:

- English shout
- Spanish shout
- Default behavior remains unchanged when `--shout` is absent
