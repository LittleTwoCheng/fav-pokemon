import { useMutation } from "@tanstack/react-query";
import { submitFavPokemon } from ".";

export function useSubmitFavPokemon(onSuccess) {
  return useMutation(submitFavPokemon, { onSuccess });
}
