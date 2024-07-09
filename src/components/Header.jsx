import { BsBookmarkHeart } from "react-icons/bs";
import { useFavorites } from "../hooks/useFavorites";
import FavoritesList from "./FavoritesList";
import { useState } from "react";

export default function Header() {
  const [isFavList, setIsFavList] = useState(false);
  const favorites = useFavorites();

  return (
    <header className="header">
      <div className="container header__container">
        <div style={{ color: "white" }}>Recipes Site</div>
        <button onClick={() => setIsFavList(true)} className="header__fav">
          <BsBookmarkHeart color="white" width={32} />
          <span>{favorites.length}</span>
        </button>
      </div>
      <FavoritesList
        open={isFavList}
        toggleList={setIsFavList}
        favorites={favorites}
      />
    </header>
  );
}
