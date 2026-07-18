const greetings = {
  es: { named: "Hola, %s!", default: "Hola, mundo!" },
};

export function greeting(name, language) {
  const lang = greetings[language];
  if (name && name.trim()) {
    const person = name.trim();
    return lang ? lang.named.replace("%s", person) : `Hello, ${person}!`;
  }
  return lang ? lang.default : "Hello, world!";
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greeting(process.argv[2], process.argv[3]));
}
