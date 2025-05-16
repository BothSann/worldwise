import { createContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch (err) {
        console.alert(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();

    return () => {};
  }, []);

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export default CitiesProvider;
