import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getPokemonDetail } from "@/lib/actions/get-poke";
import Image from "next/image";
import React from "react";

const PokemonDetail = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const pokemon = await getPokemonDetail(slug);
  console.log("====================================");
  console.log(pokemon);
  console.log("====================================");
  return (
    <Card>
      <CardHeader>
        <h2>{pokemon.name}</h2>
      </CardHeader>
      <CardContent>
        <Image
          src={pokemon.sprites?.other?.["official-artwork"].front_default}
          width={200}
          height={200}
          loading="lazy"
          alt={pokemon.name}
        />
      </CardContent>
    </Card>
  );
};

export default PokemonDetail;
