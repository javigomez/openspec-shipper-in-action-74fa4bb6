# hello-cli Delta

## MODIFIED Requirements

### Requirement: Default greeting

The CLI SHALL print a default hello world greeting unless the user provides a
name.

#### Scenario: Run without arguments

- **WHEN** the user runs `npm run start`
- **THEN** the program prints `Hello, world!`

#### Scenario: Run with a name

- **WHEN** the user runs `node src/hello.js Ada`
- **THEN** the program prints `Hello, Ada!`

#### Scenario: Blank name

- **WHEN** greeting logic receives a blank name
- **THEN** it returns `Hello, world!`
