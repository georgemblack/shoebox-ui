import { useState } from "react";
import { getEntriesAPI } from "../data/Api";

export default function useGlobalContext() {
  /**
   * Shoebox entries
   */
  const [entries, setEntries] = useState([]);

  const getEntries = async () => {
    const response = await getEntriesAPI();
    let entries = response.entries;

    // Sort entries by published timestamp
    entries.sort((a, b) => {
      return a.published > b.published ? -1 : 1;
    });

    setEntries(entries);
  };

  return {
    getEntries,
    entries,
  };
}
