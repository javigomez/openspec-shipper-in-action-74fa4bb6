# add-name-greeting

## Why

The demo needs a tiny, safe change that an OpenSpec Shipper apply worker can implement
end to end without domain complexity.

## What Changes

- Allow the hello CLI to accept an optional name.
- Keep `Hello, world!` as the default behavior.
- Add unit coverage for both default and named greetings.

## Non-Goals

- No argument parser dependency.
- No localization.
- No remote push or archive until OpenSpec Shipper safety flags are enabled.
