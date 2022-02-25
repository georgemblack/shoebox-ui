import GlobalContext from "../context/GlobalContext.js";
import { useContext, useEffect } from "react";
import Time from "../components/Time.jsx";
import DeleteWithConfirmationButton from "../components/DeleteWithConfirmationButton.jsx";

function HomePage() {
  const { entries, getEntries } = useContext(GlobalContext);

  useEffect(() => {
    getEntries();
  }, []);

  const entryDisplay = entries.map((entry) => {
    let text = "No text provided.";
    let latitude = "";
    let longitude = "";
    let published = entry.published;

    for (item of entry.content) {
      if (item.type === "text") {
        text = item.text;
      }
      if (item.type === "geopoint") {
        latitude = item.geopoint.latitude;
        longitude = item.geopoint.longitude;
      }
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
            <Time timestamp={published} />
          </p>
        </div>
        <div>{latitude && longitude && <a href={locationUrl}>🌎</a>}</div>
        <DeleteWithConfirmationButton />
      </div>
    );
  });

  return <>{entryDisplay}</>;
}

export default HomePage;
