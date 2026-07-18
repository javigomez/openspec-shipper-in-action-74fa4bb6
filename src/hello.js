const greetings = {
  es: { named: "Hola, %s!", default: "Hola, mundo!" },
};

export function greeting(name, language, shout) {
  const lang = greetings[language];
  let result;
  if (name && name.trim()) {
    const person = name.trim();
    result = lang ? lang.named.replace("%s", person) : `Hello, ${person}!`;
  } else {
    result = lang ? lang.default : "Hello, world!";
  }
  return shout ? result.toUpperCase() : result;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const shout = process.argv.includes("--shout");
  const positional = process.argv.slice(2).filter((a) => a !== "--shout");
  console.log(greeting(positional[0], positional[1], shout));
}
