import { getPokemonDetail } from ".";
import { useQuery } from "@tanstack/react-query";

export function useGetPokemonDetail(name?: string | null) {
  return useQuery(
    ["pokemon", name],
    async () => {
      return await getPokemonDetail(name || "");
    },
    {
      enabled: !!name && name.length > 0,
      staleTime: 15 * 60 * 1000,
    }
  );
}
