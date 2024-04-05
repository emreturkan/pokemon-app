import React from "react";
import { Card, CardContent, CardFooter } from "./card";
import Image from "next/image";
import { getPokemonDetail } from "@/lib/actions/get-poke";
import Link from "next/link";
import { formatStatName } from "@/lib/utils";

const PokemonCard = async ({ pokemon }: { pokemon: string }) => {
  const poke = await getPokemonDetail(pokemon);

  return (
    <Link href={`/pokemon/${pokemon}`}>
      <Card className="hover:scale-105 transition duration-300 flex flex-col p-2 items-center justify-center">
        <CardContent>
          <Image
            src={
              poke.sprites?.other?.["official-artwork"].front_default ||
              "/placeholder.svg"
            }
            alt={poke.name}
            className="aspect-square overflow-hidden rounded-xl object-cover object-center"
            loading="lazy"
            width={100}
            height={200}
          />
        </CardContent>
        <CardFooter>
          <div className="text-sm font-medium text-center">
            {formatStatName(poke.name)}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PokemonCard;
