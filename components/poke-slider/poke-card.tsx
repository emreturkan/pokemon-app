import { getPokemonDetail } from "@/lib/actions/get-poke";
import Link from "next/link";
import Image from "next/image";
import { Card } from "../ui/card";

type PokeCardProps = {
  name: string;
};

const PokeCard = async ({ name }: PokeCardProps) => {
  const response = await getPokemonDetail(name);

  return (
    <div className="w-full flex items-center justify-center gap-4 px-4 md:gap-8 md:px-6">
      <Card
        className={`hover:scale-110 transition duration-300 grid gap-2 ease-in-out p-3 cursor-pointer`}
      >
        {response && (
          <Image
            src={response.sprites?.other?.["official-artwork"].front_default}
            alt={response?.name || ""}
            className="aspect-square overflow-hidden rounded-xl object-cover object-center"
            loading="lazy"
            width={100}
            height={200}
          />
        )}
        {response?.name && (
          <Link href={`/pokemon/${name}`}>
            <div className="text-sm font-medium text-center">
              {response.name}
            </div>
          </Link>
        )}
      </Card>
    </div>
  );
};

export default PokeCard;
