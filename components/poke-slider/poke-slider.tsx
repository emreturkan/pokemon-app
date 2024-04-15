import { basePokemon } from "@/types";
import React, { Suspense } from "react";
import PokeCard from "./poke-card";
import CardSkeleton from "./card-skeleton";

const PokeSlider = ({ pokemon }: { pokemon: { results: basePokemon[] } }) => {
  return (
    <div className="w-full md:w-7/12 h-72 relative flex">
      <Suspense fallback={<CardSkeleton />}>
        {pokemon?.results.slice(0, 5).map((pokemon: basePokemon, index) => (
          <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
        ))}
      </Suspense>
    </div>
  );
};

export default PokeSlider;
