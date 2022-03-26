import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setLoading] = useState(false);
  const [err, serErr] = useState("");

  const fetching = async () => {
    try {
      setLoading(true);
      await callback()
    } catch (error) {
      serErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetching, isLoading, err];
};
