export function demoBanner() {
  return "OpenSpec Shipper Demo";
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(demoBanner());
}
