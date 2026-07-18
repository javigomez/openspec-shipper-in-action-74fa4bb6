export function greeting(name) {
  if (name && name.trim()) {
    return `Hello, ${name.trim()}!`;
  }
  return "Hello, world!";
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greeting(process.argv[2]));
}
