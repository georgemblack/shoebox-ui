import { useContext } from "react";
import GlobalContext from "../context/GlobalContext.js";
import Time from "../components/Time.jsx";
import DeleteWithConfirmationButton from "../components/DeleteWithConfirmationButton.jsx";

function Entry(props) {
  const { deleteEntry } = useContext(GlobalContext);

  const handleDelete = async (id) => {
    await deleteEntry(props.entry.id);
  };

  let text = "(No text)";
  let latitude = "";
  let longitude = "";
  let created = props.entry.created;

  if (props.entry.text) {
    text = props.entry.text;
  }
  if (props.entry.geopoint) {
    latitude = props.entry.geopoint.latitude;
    longitude = props.entry.geopoint.longitude;
  }

  let locationUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <div
      className="mt-2 flex justify-between rounded bg-gray-50 py-2 px-4"
      key={props.entry.id}
    >
      <div>
        <p>{text}</p>
        <p className="mt-1 text-slate-400">
          <Time timestamp={created} />
        </p>
      </div>
      <div>
        {latitude && longitude && (
          <a href={locationUrl} target={"_blank"}>
            🌎
          </a>
        )}
      </div>
      <DeleteWithConfirmationButton
        handleDelete={() => handleDelete(props.entry.id)}
      />
    </div>
  );
}

export default Entry;
