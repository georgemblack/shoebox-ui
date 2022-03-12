import { useContext, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mergeWith from "lodash.mergewith";
import GlobalContext from "../context/GlobalContext.js";
import TextArea from "../components/TextArea.jsx";
import Button from "../components/Button.jsx";

function reducer(state, data) {
  return mergeWith({}, state, data);
}

function EntryEditor(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const { entries, putEntry } = useContext(GlobalContext);
  const entry = entries.find((entry) => entry.id === id);

  const [formState, formDispatch] = useReducer(reducer, entry);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await putEntry(formState);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextArea
          value={formState.text}
          onChange={(event) => formDispatch({ text: event.target.value })}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default EntryEditor;
