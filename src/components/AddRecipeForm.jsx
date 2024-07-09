import { useState } from "react";
import { useAddRecipeMutation, useGetRecipesQuery } from "../store/api/api";

export default function AddRecipeForm() {
  const [recipe, setRecipe] = useState({ name: "", image: null });

  const [createRecipe] = useAddRecipeMutation();
  const { isLoading, data } = useGetRecipesQuery();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setRecipe({
        ...recipe,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setRecipe({...recipe, id: data.length + 1});
        createRecipe(recipe);
      }}
    >
      <input required
        value={recipe.name}
        onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
        type="text"
        placeholder="name"
      />
      <input required type="file" onChange={onImageChange} className="filetype" />
      <button type="submit">Submit new recipe</button>
    </form>
  );
}
