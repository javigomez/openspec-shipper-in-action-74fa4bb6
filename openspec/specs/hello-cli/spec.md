# hello-cli Specification

## Purpose

Provide a simple CLI tool that prints a personalized greeting to standard output.
## Requirements
### Requirement: Default greeting

The CLI SHALL print a greeting in English by default and SHALL print a Spanish
greeting when the caller requests Spanish.

#### Scenario: Run with a Spanish name

- **WHEN** the user runs `node src/hello.js Ada es`
- **THEN** the program prints `Hola, Ada!`

#### Scenario: Run in Spanish without a name

- **WHEN** greeting logic receives no usable name and language `es`
- **THEN** it returns `Hola, mundo!`

#### Scenario: Unknown language

- **WHEN** greeting logic receives language `fr`
- **THEN** it returns the English greeting

### Requirement: Demo banner

The project SHALL provide a small demo banner command that identifies the demo
repository without changing the default hello greeting.

#### Scenario: Read demo banner

- **WHEN** banner logic is called
- **THEN** it returns `OpenSpec Shipper Demo`

#### Scenario: Run demo banner command

- **WHEN** the user runs `node src/banner.js`
- **THEN** the program prints `OpenSpec Shipper Demo`

