"use client";
import { basePokemon } from "@/types";
import React, { Suspense } from "react";
import Slider from "react-slick";
import PokeCard from "./poke-card";
import CardSkeleton from "./card-skeleton";
import { settings } from "@/lib/slider-settings";

const PokeSlider = ({ pokemon }: { pokemon: { results: basePokemon[] } }) => {
  return (
    <div className="w-full md:w-7/12 h-72 relative">
      <Suspense fallback={<CardSkeleton />}>
        <Slider {...settings}>
          {pokemon?.results.map((pokemon: basePokemon, index) => (
            <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
          ))}
        </Slider>
      </Suspense>
    </div>
  );
};

export default PokeSlider;
