import AddRecipeForm from "./components/AddRecipeForm";
import Header from "./components/Header";
import RecipesList from "./components/RecipesList";

function App() {



  return (
    <>
      <Header />
      <section>
        <div className="container">
          <AddRecipeForm />
        </div>
      </section>
      <section>
        <div className="container">
          <RecipesList />
        </div>
      </section>
    </>
  );
}

export default App;
