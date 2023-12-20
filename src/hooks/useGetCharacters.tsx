import React, { useState, useEffect } from "react";

import axios from "axios";
import { info } from "../interfaces/InInfo";
import { character } from "../interfaces/InCharacter";

export const useGetCharacters = (url: string) => {
  const [characters, setCharacters] = useState<character[]>([]);
  const [info, setInfo] = useState<info>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setCharacters(response.data.results);
      setInfo(response.data.info);
      console.log(response.data.info);
    } catch (error) {
      console.error("Error fetching Data: ", error);
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

  return { characters, info, loading, error, reload };
};
