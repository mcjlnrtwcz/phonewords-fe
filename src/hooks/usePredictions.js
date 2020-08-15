import { useState, useEffect } from "react";

import useAPI from "hooks/useAPI";

const getPredictionsUrl = (params) =>
  `http://localhost:3001/predictions/${params.number}`;

function usePredictions(input) {
  const [predictions, setPredictions] = useState([]);
  const { makeRequest, response } = useAPI(getPredictionsUrl);

  // Get new predictions when input changes
  useEffect(() => {
    if (input) {
      makeRequest({ params: { number: input } });
    }
  }, [makeRequest, input]);
  // Update predictions on successful response
  useEffect(() => {
    if (response) {
      setPredictions(response.data);
    }
  }, [response]);

  return predictions;
}

export default usePredictions;
