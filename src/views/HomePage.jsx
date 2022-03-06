import GlobalContext from "../context/GlobalContext.js";
import { useContext, useEffect } from "react";
import Time from "../components/Time.jsx";
import DeleteWithConfirmationButton from "../components/DeleteWithConfirmationButton.jsx";

function HomePage() {
  const { entries, getEntries, deleteEntry } = useContext(GlobalContext);

  useEffect(() => {
    getEntries();
  }, []);

  const handleDelete = async (id) => {
    await deleteEntry(id);
  };

  const entryDisplay = entries.map((entry) => {
    let text = "(No text)";
    let latitude = "";
    let longitude = "";
    let created = entry.created;

    if (entry.text) {
      text = entry.text;
    }
    if (entry.geopoint) {
      latitude = entry.geopoint.latitude;
      longitude = entry.geopoint.longitude;
    }

    let locationUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    return (
      <div
        className="mt-2 flex justify-between rounded bg-gray-50 py-2 px-4"
        key={entry.id}
      >
        <div>
          <p>{text}</p>
          <p className="mt-1 text-slate-400">
            <Time timestamp={created} />
          </p>
        </div>
        <div>{latitude && longitude && <a href={locationUrl}>🌎</a>}</div>
        <DeleteWithConfirmationButton
          handleDelete={() => handleDelete(entry.id)}
        />
      </div>
    );
  });

  return <>{entryDisplay}</>;
}

export default HomePage;
