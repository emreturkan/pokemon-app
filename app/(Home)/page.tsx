import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getPokemon } from "@/lib/actions/get-poke";
import PokeSlider from "@/components/poke-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default async function Component() {
  const pokemon = await getPokemon();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="w-full py-8 shadow-sm bg-white dark:bg-gray-950 dark:text-gray-50">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <Link
              className="flex items-center space-x-2 text-2xl font-semibold tracking-wider sm:text-3xl"
              href="#"
            >
              <FishIcon className="w-6 h-6 rounded-lg aspect-square overflow-hidden" />
              <span className="hidden md:inline">Pokémon</span>
            </Link>
          </div>
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="flex items-center px-2.5  border-transparent text-sm font-medium md:text-base lg:px-3 xl:text-sm xl:gap-1.5/2 border-gray-900 dark:border-gray-50"
              href="#"
            >
              Home
            </Link>
            <Link
              className="flex items-center px-2.5  border-transparent text-sm font-medium md:text-base lg:px-3 xl:text-sm xl:gap-1.5/2 border-gray-900 dark:border-gray-50"
              href="#"
            >
              Pokédex
            </Link>
            <Link
              className="flex items-center px-2.5  border-transparent text-sm font-medium md:text-base lg:px-3 xl:text-sm xl:gap-1.5/2 border-gray-900 dark:border-gray-50"
              href="#"
            >
              Types
            </Link>
            <Link
              className="flex items-center px-2.5 border-transparent text-sm font-medium md:text-base lg:px-3 xl:text-sm xl:gap-1.5/2 border-gray-900 dark:border-gray-50"
              href="#"
            >
              Abilities
            </Link>
            <Link
              className="flex items-center px-2.5  border-transparent text-sm font-medium md:text-base lg:px-3 xl:text-sm xl:gap-1.5/2 border-gray-900 dark:border-gray-50"
              href="#"
            >
              Moves
            </Link>
            <Link
              className="flex items-center px-2.5  border-transparent text-sm font-medium md:text-base lg:px-3 xl:text-sm xl:gap-1.5/2 border-gray-900 dark:border-gray-50"
              href="#"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <SearchIcon className="w-4 h-4" />
              <Input
                className="w-12 text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-32">
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
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The ultimate Pokémon experience. Catch and collect Pokémon.
                Battle other trainers. Explore different regions.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <EggIcon className="mx-auto w-10 h-10" />
                <h3 className="text-lg font-bold">Catch & Collect</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Catch and collect your favorite Pokémon. The world is full of
                  Pokémon waiting to be caught.
                </p>
              </div>
              <div className="grid gap-1">
                <EggIcon className="mx-auto w-10 h-10" />
                <h3 className="text-lg font-bold">Battle other Trainers</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Test your skills by battling other trainers. Become a Pokémon
                  master.
                </p>
              </div>
              <div className="grid gap-1">
                <EggIcon className="mx-auto w-10 h-10" />
                <h3 className="text-lg font-bold">Explore different Regions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Travel the world and explore different regions. Each region
                  has its own unique Pokémon.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Download the App
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Download the app and start your Pokémon adventure today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function EggIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" />
    </svg>
  );
}

function FishIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
function PokemonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#ffffff"
      viewBox="0 0 512 512"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title></title>
        <path d="M450.46,256.09C449.35,175.17,399.81,102.71,324,73.79,247.59,44.67,157.49,69,105.82,132.13,54.4,195,46.61,285.58,88.49,355.68c41.8,69.95,123.74,106,203.55,91.63,91-16.37,156.14-98.12,158.35-189.14A20.16,20.16,0,0,0,450.46,256.09ZM119.05,174.38C152.76,118,220.23,87,285,99.43c69.4,13.29,120.43,70.47,128.83,139H318.41c-8.26-27.36-32-48-62.62-48-29.65,0-55.15,20.65-63.11,48H97.74A158,158,0,0,1,119.05,174.38ZM286.13,256.1c-2,38.75-60.67,39.4-60.67,0S284.17,217.33,286.13,256.1Zm24,149.79C246.85,428.58,175,408.74,132.3,356.82a157.53,157.53,0,0,1-34.57-83H192.6c7.91,27.39,33.7,48,63.19,48,30.67,0,54.36-20.68,62.62-48h95.45C406.61,333,367.54,385.32,310.14,405.89Z"></path>
      </g>
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
