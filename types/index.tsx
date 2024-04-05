export type basePokemon = {
  name: string;
  url: string;
};

export type PokemonDetail = {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

export type PokemonEvolution = {
  species: { name: string; url: string };
  evolves_to: { species: { name: string; url: string } }[];
};

export type PokemonStats = { base_stat: number; stat: { name: string } };
