import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./context/GlobalContext.js";
import useGlobalContext from "./context/GlobalContextHook.js";
import EntryEditor from "./views/EntryEditor.jsx";
import HomePage from "./views/HomePage.jsx";

function App(props) {
  const context = useGlobalContext();

  return (
    <GlobalContext.Provider value={context}>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/entries/:id" element={<EntryEditor />} />
          </Routes>
        </BrowserRouter>
      </main>
    </GlobalContext.Provider>
  );
}

export default App;
