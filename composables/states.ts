export const useCart = (): { value: { name: string }[] } => {
  return useState<{ name: string }[]>(() => [])
}