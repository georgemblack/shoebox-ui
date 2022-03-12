import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext.js";
import TextArea from "../components/TextArea.jsx";
import Button from "../components/Button.jsx";
import Time from "../components/Time.jsx";

const placeholderEntry = {
  text: "Loading...",
  created: new Date(),
};

function EntryEditor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { putEntry, getEntry } = useContext(GlobalContext);
  const [entry, setEntry] = useState(placeholderEntry);

  useEffect(async () => {
    const current = await getEntry(id);
    setEntry(current);
  }, []);

  const handleTextChange = (event) => {
    const newEntry = { ...entry, text: event.target.value };
    setEntry(newEntry);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await putEntry(entry);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextArea value={entry.text} onChange={handleTextChange} />
        <Button type="submit">Submit</Button>
      </form>
      <p className="mt-1 text-sm text-slate-400">
        <Time timestamp={entry.created} />
      </p>
    </>
  );
}

export default EntryEditor;
