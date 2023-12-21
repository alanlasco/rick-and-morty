import { useState, useEffect } from "react";

import axios from "axios";
import { info } from "../interfaces/inInfo";
import { character } from "../interfaces/inCharacter";

export const useGetCharacters = (url: string) => {
  const [characters, setCharacters] = useState<character[]>([]);
  const [info, setInfo] = useState<info>();
  const [loading, setLoading] = useState<boolean>(true);

  const loadApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setCharacters(response.data.results);
      setInfo(response.data.info);
      console.log(response.data.info);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching Data: ", error.message);
      } else if (axios.isAxiosError(error)) {
        console.error("Axios error: ", error.message);
      } else {
        console.error("Unexpected error: ", error);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadApi();
  }, []);
  const reload = () => {
    loadApi();
  };

  return { characters, info, loading, reload };
};
