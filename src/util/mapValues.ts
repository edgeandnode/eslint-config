export function mapValues<K extends string, A, B>(
  record: Record<K, A>,
  func: (v: A) => B
): Record<K, B> {
  return Object.fromEntries(
    Object.entries<A>(record).map(([k, v]) => [k, func(v)])
  ) as Record<K, B>; // needs to be asserted, because `fromEntries` assumes `string` key
}
