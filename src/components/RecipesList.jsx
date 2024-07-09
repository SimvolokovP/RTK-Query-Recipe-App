import { useGetRecipesQuery } from "../store/api/api";
import RecipeItem from "./RecipeItem";

export default function RecipesList() {
  const { isLoading, data } = useGetRecipesQuery();

  return (
    <ul className="recipes-list">
      {isLoading ? (
        <div>loading...</div>
      ) : data ? (
        data.map((recipe) => (
          <li key={recipe.id}>
            <RecipeItem recipe={recipe} />
          </li>
        ))
      ) : (
        <div>not found</div>
      )}
    </ul>
  );
}
