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
