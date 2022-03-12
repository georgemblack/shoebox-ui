import { useContext } from "react";
import GlobalContext from "../context/GlobalContext.js";
import Time from "../components/Time.jsx";
import DeleteWithConfirmationButton from "../components/DeleteWithConfirmationButton.jsx";
import { Link } from "react-router-dom";

function Entry(props) {
  const { deleteEntry } = useContext(GlobalContext);

  const handleDelete = async (id) => {
    await deleteEntry(id);
  };

  let text = "";
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
  let locationUrl = `https://maps.apple.com?q=${latitude},${longitude}`;

  return (
    <div
      className="mt-2 flex justify-between rounded bg-gray-50 py-2 px-4"
      key={props.entry.id}
    >
      <div>
        <p>{text}</p>
        <p className="mt-1 text-sm text-slate-400">
          <Time timestamp={created} />
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <div>
          <a
            className="inline-block rounded-full bg-blue-100 p-2"
            href={locationUrl}
            target={"_blank"}
          >
            🌎
          </a>
        </div>
        <Link to={`/entries/${props.entry.id}`}>
          <div className="inline-block cursor-pointer rounded-full bg-orange-200 p-2">
            ✏️
          </div>
        </Link>
        <DeleteWithConfirmationButton
          handleDelete={() => handleDelete(props.entry.id)}
        />
      </div>
    </div>
  );
}

export default Entry;
