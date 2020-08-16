import { useState, useEffect } from "react";

import useAPI from "hooks/useAPI";
import useDebounce from "hooks/useDebounce";

const getPredictionsUrl = (params) =>
  `http://localhost:3001/predictions/${params.number}`;

function usePredictions(input) {
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { makeRequest, response, isLoading: isAPILoading, error } = useAPI(
    getPredictionsUrl
  );
  const debounce = useDebounce(500);

  // Get new predictions when input changes
  useEffect(() => {
    if (input) {
      setIsLoading(true);
      debounce(() => makeRequest({ params: { number: input } }));
    } else {
      setPredictions([]);
    }
  }, [debounce, makeRequest, input]);
  // API finished loading
  useEffect(() => {
    setIsLoading(isAPILoading);
  }, [isAPILoading]);
  // Update predictions on successful response
  useEffect(() => {
    if (response) {
      setPredictions(response.data);
    }
  }, [response]);

  return { predictions, isLoading, error };
}

export default usePredictions;
