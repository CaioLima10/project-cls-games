"use client";

import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export default function FavoritesCards() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("");

  function handleButton() {
    setShowInput(!showInput);

    if (input !== "") {
      setGameName(input);
    }
    setInput("");
  }

  return (
    <div className="bg-slate-900 h-60 p-4 relative">
      {showInput ? (
        <div>
          <div className="flex items-center justify-center w-full h-14">
            <input
              type="text"
              placeholder="Escolha seu jogo favorito."
              className="p-3 pl-6 w-full text-slate-100 bg-slate-400/20 rounded-tl-xl rounded-bl-xl"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button
              onClick={handleButton}
              className="bg-green-500 h-12 w-12 flex items-center justify-center rounded-tr-xl rounded-br-xl"
            >
              <FiX size={20} className="text-slate-50" />
            </button>
          </div>
        </div>
      ) : (
        <button onClick={handleButton}>
          <FiEdit size={24} color="#FFFFFF" />
        </button>
      )}

      {gameName && (
        <div className="absolute bottom-4">
          <p className="font-semibold text-sm text-slate-100">jogo favorito</p>
          <span className="text-green-500 font-bold text-xl">{gameName}</span>
        </div>
      )}

      {!gameName && (
        <p className="font-semibold text-sm text-slate-100 absolute bottom-4">
          Qual é seu jogo favorito ?
        </p>
      )}
    </div>
  );
}
