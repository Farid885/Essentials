export function dp<T>(val: T) {
  return JSON.parse(JSON.stringify(val)) as T;
}
