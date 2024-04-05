export const getPokemon = async () => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon`, {
    next: {
      revalidate: 3600,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const getPokemonDetail = async (name: string) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    next: {
      revalidate: 3600,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const getLastPokemon = async () => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`, {
    next: {
      revalidate: 3600,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const getPokemonEvolution = async (name: string) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    const pokemonSpecies = await response.json();

    const evolutionUrl = pokemonSpecies.evolution_chain?.url;

    if (!evolutionUrl) {
      console.warn(`Evolution data not found for ${name}`);
      return null;
    }

    const evolutionResponse = await fetch(evolutionUrl);

    const evolutionData = await evolutionResponse.json();

    return evolutionData;
  } catch (error) {
    console.error("Error fetching evolution data:", error);
    return null; // Or handle the error differently
  }
};
