import { useEffect, useState } from "react";
import { getPokemonDetail } from "@/lib/actions/get-poke";
import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";

const PokeCard = ({ name }: { name: string }) => {
  const [poke, setPoke] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await getPokemonDetail(name);
        setPoke(response);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [name]); // Run the effect only when `name` changes

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex items-center justify-center gap-4 px-4 md:gap-8 md:px-6">
      <Card className="bg-gray-200 text-card-foreground">
        <Link className="w-32 p-4 grid rounded-xl" href={`/pokemon/${name}`}>
          <Image
            src={poke?.sprites?.other?.["official-artwork"].front_default}
            alt={poke?.name}
            className="aspect-square overflow-hidden rounded-xl object-cover object-center"
            priority
            width="200"
            height="200"
          />
          <div className="text-sm font-medium text-center">{poke.name}</div>
        </Link>
      </Card>
    </div>
  );
};

export default PokeCard;
