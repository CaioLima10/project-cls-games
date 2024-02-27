"use client";

import { BsSearch } from "react-icons/bs";
import Container from "./container";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Input() {
  const [input, setInput] = useState("");

  const navigate = useRouter();

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (input === "") return;

    navigate.push(`/game/search/${input}`);
  }

  return (
    <form className="w-full flex items-center my-5" onSubmit={handleSearch}>
      <Container>
        <div className="flex items-center justify-center w-full h-14">
          <input
            type="text"
            placeholder="Procurando algum jogo ?"
            className="p-3 pl-6 w-full bg-slate-400/20 rounded-tl-xl rounded-bl-xl"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Link
            href={`/game/search/${input}`}
            className="bg-green-500 h-12 w-12 flex items-center justify-center rounded-tr-xl rounded-br-xl"
          >
            <BsSearch size={20} className="text-slate-50" />
          </Link>
        </div>
      </Container>
    </form>
  );
}
