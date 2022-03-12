import { useState } from "react";
import { getEntriesAPI, putEntryAPI, deleteEntryAPI } from "../data/Api";

export default function useGlobalContext() {
  /**
   * Shoebox entries
   */
  const [entries, setEntries] = useState([]);

  const getEntries = async () => {
    const response = await getEntriesAPI();
    let entries = response.entries;

    // Sort entries by created timestamp
    entries.sort((a, b) => {
      return a.created > b.created ? -1 : 1;
    });

    setEntries(entries);
  };

  const putEntry = async (entry) => {
    await putEntryAPI(entry);
    await getEntries();
  };

  const deleteEntry = async (id) => {
    await deleteEntryAPI(id);
    await getEntries();
  };

  return {
    getEntries,
    putEntry,
    deleteEntry,
    entries,
  };
}
