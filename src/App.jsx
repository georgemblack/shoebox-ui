import GlobalContext from "./context/GlobalContext.js";
import useGlobalContext from "./context/GlobalContextHook.js";
import HomePage from "./views/HomePage.jsx";

function App(props) {
  const context = useGlobalContext();

  return (
    <GlobalContext.Provider value={context}>
      <main>
        <HomePage />
      </main>
    </GlobalContext.Provider>
  );
}

export default App;
