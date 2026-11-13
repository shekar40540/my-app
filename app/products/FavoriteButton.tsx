
"use client";

import { useState } from "react";
import Icon from "./Icon"; // no 'use client' here

export default function FavoriteButton() {
  const [favorited, setFavorited] = useState(false);

  return (
    <button
      onClick={() => setFavorited(!favorited)}
      className="border px-4 py-2 rounded-lg"
    >
      {/* {favorited ? "❤️ Favorited" : "🤍 Add to Favorite"} */}
      <div className="flex">
        <Icon filled={favorited} /> <span>{favorited ? "Favorited" : "Add to Favorite"}</span>
      </div>
    </button>
  );
}
