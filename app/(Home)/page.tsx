import PokeCard from "@/components/poke-card";
import { getPokemon } from "@/lib/actions/get-poke";
import { basePokemon } from "@/types";
import React from "react";

const Home = async () => {
  const pokemons = await getPokemon();

  return (
    <div>
      <div>Home</div>
      {pokemons.results.map((pokemon: basePokemon) => (
        <PokeCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export default Home;
