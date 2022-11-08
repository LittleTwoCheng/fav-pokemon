import { getPokemonList } from ".";
import { useQuery } from "@tanstack/react-query";

export function useGetPokemonList(offset: number = 0, limit: number = 20) {
  return useQuery(
    ["pokemon", { offset, limit }],
    () => {
      return getPokemonList(offset, limit);
    },
    {
      enabled: offset >= 0 && limit > 0,
      staleTime: 15 * 60 * 1000,
    }
  );
}
