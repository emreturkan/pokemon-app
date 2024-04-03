"use client";
import { basePokemon } from "@/types";

import React from "react";
import PokeCard from "./poke-card";
import Slider from "react-slick";

const PokeSlider = ({ pokemon }: { pokemon: { results: basePokemon[] } }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerPadding: "1px",
    arrows: false,
    cssEase: "linear",
  };
  return (
    <div className="w-full h-72">
      <Slider {...settings}>
        {pokemon?.results.map((pokemon: basePokemon, index) => (
          <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
        ))}
      </Slider>
    </div>
  );
};

export default PokeSlider;
