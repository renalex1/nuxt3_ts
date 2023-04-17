export const useCart = (): { value: { name: string }[] } => {
  return useState<{ name: string }[]>(() => [])
};

export const useAuth = () => useState<{ isAuthenticated: boolean }>(() => ({
  isAuthenticated: false
}));

export const usePageVisitCount = () => useState(() => 0)