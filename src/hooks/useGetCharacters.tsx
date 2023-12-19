import React, { useState, useEffect } from "react";
import { Character } from "../interfaces/InCharacter";
import { Info } from "../interfaces/InInfo";

export const useGetCharacters = (url: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
      console.log(data.info);
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
