# hello-cli Specification

## Purpose

Provide a simple CLI tool that prints a personalized greeting to standard output.
## Requirements
### Requirement: Default greeting

The CLI SHALL support a shout option that uppercases the final greeting.

#### Scenario: Shout in English

- **WHEN** the user runs `node src/hello.js Ada --shout`
- **THEN** the program prints `HELLO, ADA!`

#### Scenario: Shout in Spanish

- **WHEN** the user runs `node src/hello.js Ada es --shout`
- **THEN** the program prints `HOLA, ADA!`

#### Scenario: No shout flag

- **WHEN** the user runs `node src/hello.js Ada es`
- **THEN** the program prints `Hola, Ada!`

### Requirement: Demo banner

The project SHALL provide a small demo banner command that identifies the demo
repository without changing the default hello greeting.

#### Scenario: Read demo banner

- **WHEN** banner logic is called
- **THEN** it returns `OpenSpec Shipper Demo`

#### Scenario: Run demo banner command

- **WHEN** the user runs `node src/banner.js`
- **THEN** the program prints `OpenSpec Shipper Demo`

