# add-spanish-greeting

## Why

The demo needs a second small change that builds naturally on named greetings
and shows queue dependencies.

## What Changes

- Allow the hello CLI to greet in Spanish when requested.
- Keep English as the default language.
- Add unit coverage for Spanish output and unknown-language fallback.

## Non-Goals

- No localization framework.
- No language auto-detection.
- No remote push or archive until OpenSpec Shipper safety flags are enabled.
