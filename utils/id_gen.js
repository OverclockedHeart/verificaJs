export function generateID() {
  const datestring = Date.now().toString(36).substring(0, 16);
  const random = Math.random().toString(36).substring(0, 16);
  return datestring + random;
}
