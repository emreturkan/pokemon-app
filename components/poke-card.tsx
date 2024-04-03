import { useEffect, useState } from "react";
import { getPokemonDetail } from "@/lib/actions/get-poke";
import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";
import { PokemonDetail } from "@/types";

type PokeCardProps = {
  name: string;
};

const PokeCard = ({ name }: PokeCardProps) => {
  const [poke, setPoke] = useState<PokemonDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await getPokemonDetail(name);
        setPoke(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [name]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const src = poke?.sprites?.other?.["official-artwork"].front_default || "";

  return (
    <div className=" w-full flex items-center justify-center gap-4 px-4 md:gap-8 md:px-6 ">
      {" "}
      {/* Added 'relative' for positioning */}
      <Card
        className={`hover:scale-110 transition duration-300 grid gap-2 ease-in-out p-3 ${
          isLoading ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <Image
          src={src}
          alt={poke?.name || ""}
          className="aspect-square overflow-hidden rounded-xl object-cover object-center"
          priority
          width={100}
          height={200}
        />
        <Link href={`/pokemon/${name}`}>
          <div className="text-sm font-medium text-center">{poke?.name}</div>
        </Link>
      </Card>
    </div>
  );
};

export default PokeCard;
