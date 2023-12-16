import React, { useState, useEffect } from "react";
import { Character } from "../interfaces/InCharacter";
import { Info } from "../interfaces/InInfo";
import axios from "axios";
export const useGetCharacters = (url: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info>();
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
