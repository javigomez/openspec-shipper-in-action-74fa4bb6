# add-demo-banner

## Why

The demo needs one independent change that can run concurrently with the greeting
chain, so OpenSpec Shipper can show parallel queue work instead of only
dependency-ordered work.

## What Changes

- Add a tiny demo banner command that prints the project name.
- Keep the existing hello greeting behavior unchanged.
- Add unit coverage for the banner output.

## Non-Goals

- No dependency on named greetings, Spanish greetings, or shout behavior.
- No styling, colors, or terminal UI framework.
- No remote push or archive until OpenSpec Shipper safety flags are enabled.
