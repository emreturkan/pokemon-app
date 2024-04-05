"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { useRouter } from "next/navigation";

const CommandSearch = () => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);
  const [data, setData] = useState([]);

  return (
    <>
      <Button
        variant={"outline"}
        size={"lg"}
        onClick={() => setOpenMenu(true)}
        className="h-9 w-full whitespace-nowrap px-4"
      >
        <p className="text-sm text-muted-foreground">
          Search city...{" "}
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hover:bg-primary md:ml-28">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
      </Button>
      <CommandDialog open={openMenu} onOpenChange={setOpenMenu}>
        <CommandInput placeholder="Search Pokemon..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {data.length > 0 &&
              data.map((item) => <CommandItem>Test Bra</CommandItem>)}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandSearch;
