export function merge<O extends object>(obj: O) {
  return <K extends object>(sObj: K) => ({
    ...obj,
    ...sObj,
  })
}
