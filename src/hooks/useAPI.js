import { useState, useCallback } from "react";
import axios from "axios";

function useAPI(url, method = "get") {
  const [isLoading, setIsLoading] = useState();
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const makeRequest = useCallback(
    ({ data, params } = {}) => {
      const handleRequest = async () => {
        setIsLoading(true);

        const headers = {};
        if (data) {
          headers["content-type"] = "application/json";
        }

        const requestOptions = {
          method,
          url,
          data,
          headers,
        };

        // Fill url template if necessary
        if (typeof url === "function") {
          if (!params) {
            throw new Error("URL requires parameters but none were supplied");
          }
          requestOptions.url = url(params);
        }

        try {
          const result = await axios(requestOptions);
          setError(null);
          setResponse(result);
        } catch (apiError) {
          setError(apiError);
          setResponse(null);
        } finally {
          setIsLoading(false);
        }
      };

      return handleRequest();
    },
    [url, method]
  );

  return { makeRequest, isLoading, response, error };
}

export default useAPI;
