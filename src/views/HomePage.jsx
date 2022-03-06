import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext.js";
import Entry from "../components/Entry.jsx";

function HomePage() {
  const { entries, getEntries } = useContext(GlobalContext);

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <>
      {entries.map((entry) => {
        return <Entry key={entry.id} entry={entry} />;
      })}
    </>
  );
}

export default HomePage;
