export function generateId(): number {
  const min = 100000;
  const max = 9999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
