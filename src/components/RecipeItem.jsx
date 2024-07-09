import { useActions } from "../hooks/useActions";
import { useFavorites } from "../hooks/useFavorites";

export default function RecipeItem({ recipe }) {
 
  const favorites = useFavorites();

  const actions = useActions();

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <div className="recipe-item">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <button onClick={() => actions.toggleFavorites(recipe)}>
        {isExists ? "delete" : "add"}
      </button>
    </div>
  );
}
