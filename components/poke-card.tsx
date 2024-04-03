import { getPokemonDetail } from "@/lib/actions/get-poke";
import Link from "next/link";
import React from "react";

const PokeCard = async ({ name }: { name: string }) => {
  const poke = await getPokemonDetail(name);
  return <Link href={`/pokemon/${name}`}>{poke.name}</Link>;
};

export default PokeCard;
