# hello-cli Delta

## MODIFIED Requirements

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
