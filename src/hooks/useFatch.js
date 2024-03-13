import React, { useState, useEffect } from "react";
import axios from "axios";

function useFatch(url) {
  const [data, setData] = useState([]);
  const fetchMovie = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      const { data } = response;
      setData(data.results); // Assuming 'results' is the array containing movie data
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  useEffect(() => {
    fetchMovie(); // Corrected typo here
  }, []);

  return { data };
}

export default useFatch;
