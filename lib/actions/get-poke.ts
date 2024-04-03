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
