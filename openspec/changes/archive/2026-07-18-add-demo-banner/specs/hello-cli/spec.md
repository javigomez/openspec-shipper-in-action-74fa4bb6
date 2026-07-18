# hello-cli Delta

## ADDED Requirements

### Requirement: Demo banner

The project SHALL provide a small demo banner command that identifies the demo
repository without changing the default hello greeting.

#### Scenario: Read demo banner

- **WHEN** banner logic is called
- **THEN** it returns `OpenSpec Shipper Demo`

#### Scenario: Run demo banner command

- **WHEN** the user runs `node src/banner.js`
- **THEN** the program prints `OpenSpec Shipper Demo`
