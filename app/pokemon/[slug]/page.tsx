import { DumbbellIcon, ScalingIcon, TypeIcon } from "@/assets/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider as UiSlider } from "@/components/ui/slider";
import { getPokemonDetail, getPokemonEvolution } from "@/lib/actions/get-poke";
import { formatStatName } from "@/lib/utils";
import { PokemonDetail, PokemonEvolution, PokemonStats } from "@/types";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const PokemonDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const pokemon = await getPokemonDetail(slug);

  const pokeEvolution = await getPokemonEvolution(pokemon.name);

  const evolvesTo = pokeEvolution?.chain.evolves_to;
  const evolutionList: string[] = [];
  evolvesTo?.forEach((evolution: PokemonEvolution) => {
    evolutionList?.push(evolution.species.name);

    if (evolution.evolves_to.length > 0) {
      evolution.evolves_to.forEach((subEvolution) => {
        evolutionList.push(subEvolution.species.name);
      });
    }
  });

  const evolutionPokemon = await Promise.all(
    evolutionList.map((name) => getPokemonDetail(name))
  );

  return (
    <>
      <div className=" border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container px-4 md:px-6 py-6 lg:py-12">
          <Link href={"/"}>
            <ArrowLeftIcon className="w-6 h-6 mt-6 mb-12" />
          </Link>
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h1>
          </div>
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <Image
                alt={pokemon.name}
                priority
                quality={75}
                className="aspect-square overflow-hidden rounded-xl object-cover border"
                height="300"
                src={pokemon.sprites?.other?.["official-artwork"].front_default}
                width="300"
              />
            </div>
            <div className="grid gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Characteristics
                </h2>
                <dl className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <ScalingIcon className="w-5 h-5 mr-1.5" />
                    <dt className="text-sm font-medium">Height</dt>
                    <dd className="text-sm ml-auto">{pokemon.height}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <DumbbellIcon className="w-5 h-5 mr-1.5" />
                    <dt className="text-sm font-medium">Weight</dt>
                    <dd className="text-sm ml-auto">{pokemon.weight}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <TypeIcon className="w-5 h-5 mr-1.5" />
                    <dt className="text-sm font-medium">Type</dt>
                    <dd className="text-sm ml-auto">
                      {pokemon.types.map((type: { type: { name: string } }) => (
                        <span
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                          key={type.type.name}
                        >
                          {type.type.name}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Abilities
                </h2>
                <ul className="list-disc list-inside grid gap-2">
                  {pokemon.abilities.map(
                    (ability: { ability: { name: string } }) => (
                      <li key={ability.ability.name}>{ability.ability.name}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Evolution
                </h2>
                {evolutionPokemon.length > 0 ? (
                  evolutionPokemon.map((pokemon: PokemonDetail) => (
                    <div key={pokemon.name} className="flex items-center gap-4">
                      <Image
                        alt={pokemon.name}
                        unoptimized
                        quality={75}
                        className="aspect-square overflow-hidden rounded-lg object-cover border"
                        height="100"
                        src={
                          pokemon.sprites?.other?.["official-artwork"]
                            .front_default
                        }
                        width="100"
                      />
                      <h3 className="text-lg font-medium">{pokemon.name}</h3>
                    </div>
                  ))
                ) : (
                  <div>
                    <Image
                      src={"/placeholder.svg"}
                      alt="no-evolution"
                      className="aspect-square overflow-hidden rounded-lg object-cover border"
                      height="100"
                      width="100"
                    />
                    <p>No evolution</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3 xl:gap-10">
            <div className="space-y-4 col-span-1">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Image Gallery
              </h2>
              <div className="grid grid-cols-2 gap-4 md:gap-2">
                <Image
                  alt={pokemon.name}
                  className="aspect-square overflow-hidden rounded-xl object-cover border"
                  height="150"
                  src={
                    pokemon.sprites.other.dream_world.front_default ||
                    "/placeholder.svg"
                  }
                  width="150"
                />
                <Image
                  alt={pokemon.name}
                  className="aspect-square overflow-hidden rounded-xl object-cover border"
                  height="150"
                  src={
                    pokemon.sprites.other.home.front_default ||
                    "/placeholder.svg"
                  }
                  width="150"
                />
                <Image
                  alt={pokemon.name}
                  className="aspect-square overflow-hidden rounded-xl object-cover border"
                  height="150"
                  src={
                    pokemon.sprites.other["official-artwork"].front_default ||
                    "/placeholder.svg"
                  }
                  width="150"
                />
                <Image
                  alt={pokemon.name}
                  className="aspect-square overflow-hidden rounded-xl object-cover border"
                  height="150"
                  src={
                    pokemon.sprites.other.showdown.front_default ||
                    "/placeholder.svg"
                  }
                  width="150"
                />
              </div>
            </div>
            <div className="space-y-4 col-span-2 ">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Moveset
              </h2>
              <div className="overflow-auto">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Base Stats</CardTitle>
                    <CardDescription>
                      The ranges shown are based on the best viable strategies
                      for competitive play.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    {pokemon.stats &&
                      pokemon.stats.map((pkStats: PokemonStats) => (
                        <div
                          key={pkStats.stat.name}
                          className="flex items-center gap-4"
                        >
                          <div className="w-16 text-sm font-medium">
                            {formatStatName(pkStats.stat.name)}
                          </div>
                          <UiSlider
                            aria-labelledby="hp"
                            defaultValue={[pkStats.base_stat]}
                            disabled
                          />
                          <div className="w-8 text-right">
                            {pkStats.base_stat}
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PokemonDetailPage;
