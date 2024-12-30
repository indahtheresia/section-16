import { useEffect } from 'react';

function useFetch() { //functions that start with use are treated as react hooks
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch user places.' });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);
}