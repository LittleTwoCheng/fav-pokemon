export async function getPokemonList(offset: number = 0, limit: number = 20) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`API error ${response.status}`);
  }

  return await response.json();
}

export async function getPokemonDetail(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    headers: {
      method: "GET",
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  if (!response.ok) {
    throw new Error(`API error ${response.status}`);
  }

  return await response.json();
}

export async function submitFavPokemon(name: string) {
  const response = await fetch(`/api/fav/${name}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  if (!response.ok) {
    throw new Error(`API error ${response.status}`);
  }

  return await response.json();
}
