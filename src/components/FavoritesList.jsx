export default function FavoritesList({ favorites, open, toggleList }) {
  return (
    <>
      <ul className={open ? "favorites-list open" : "favorites-list"}>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <img src={favorite.image} alt={favorite.name} />
            <div>{favorite.name}</div>
          </li>
        ))}
        <button onClick={() => toggleList(false)} className="favorites-list__close">close</button>
      </ul>
    </>
  );
}
