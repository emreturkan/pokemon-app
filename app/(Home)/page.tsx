import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getLastPokemon, getPokemon } from "@/lib/actions/get-poke";
import PokeSlider from "@/components/poke-slider/poke-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/header";
import { GitHubLogoIcon, StarIcon } from "@radix-ui/react-icons";
import { PokemonDetail } from "@/types";
import PokemonCard from "@/components/ui/pokemon-card";
import {
  BadgeIcon,
  CodeIcon,
  EggIcon,
  FishIcon,
  MonitorStopIcon,
  SearchIcon,
  ShieldIcon,
} from "@/assets/icons";
export default async function Component() {
  const pokemon = await getPokemon();
  const lastPokemon = await getLastPokemon();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full xl:pt-32">
          <div className="container flex flex-col gap-6 items-center justify-center space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to the World of Pokémon
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Catch, collect, and battle your favorite Pokémon. The ultimate
                Pokémon experience.
              </p>
            </div>
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="h-5 w-5" />
              </div>
              <Input
                className="pl-9 h-10 py-2.5 w-full rounded-md text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
            <PokeSlider pokemon={pokemon} />
          </div>
        </section>
        <section className="w-full py-12 md:pb-24">
          <div className=" grid items-center justify-center gap-4 text-center  lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The Pokémon app comes with a range of features to enhance your
                Pokémon experience.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[1200px] grid gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <EggIcon className="w-12 h-12" />
                <h3 className="text-xl font-semibold">Catch Pokémon</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Easily catch Pokémon using augmented reality.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FishIcon className="w-12 h-12" />
                <h3 className="text-xl font-semibold">Pokédex</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Access information about all known Pokémon species.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MonitorStopIcon className="w-12 h-12" />
                <h3 className="text-xl font-semibold">PokéStops</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Find and spin PokéStops to get items.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <BadgeIcon className="w-12 h-12" />
                <h3 className="text-xl font-semibold">Gyms</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Battle at Gyms and earn badges.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldIcon className="w-12 h-12" />
                <h3 className="text-xl font-semibold">Raid Battles</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Team up with other Trainers to defeat powerful Raid Bosses.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodeIcon className="w-12 h-12" />
                <h3 className="text-xl font-semibold">Friends</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with friends and send gifts.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-24">
          <div className="container grid gap-8 ">
            <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
              Last Added Pokemon
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {lastPokemon.results
                .slice(200, 220)
                .map((pokemon: PokemonDetail) => (
                  <PokemonCard key={pokemon.name} pokemon={pokemon.name} />
                ))}
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center space-y-4 my-24 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Visit Github
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Feel free to visit the Github repository to give stars.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link href={"https://github.com/emreturkan/pokemon"}>
                <Button className="gap-2">
                  <GitHubLogoIcon className="w-5 h-5" />
                  <span>Github</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © Created in 2024 by{" "}
          <Link
            className="underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition duration-300 ease-in-out"
            href={"https://github.com/emreturkan"}
          >
            emreturkan
          </Link>
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Github
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 flex gap-2"
            href="#"
          >
            <p>Star</p> <StarIcon className="w-4 h-4" />
          </Link>
        </nav>
      </footer>
    </div>
  );
}
