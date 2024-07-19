import { useEffect, useState } from "react";

// Hook manages both state & data fetching
export default function useVehicles() {
  const [loading, setLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:1234/api/vehicles")
      .then((res) => res.json())
      .then((vehicles) => {
        setLoading(false);
        setVehicles(vehicles);
      });
  }, []);

  return { loading, vehicles };
}

/*
loading/setLoading: tracks whether the data is being fetched from the server (loading is true) or if it's available (loading is false).

vehicles/setVehicles: stores the fetched vehicle data from the server. It starts as an empty array ([]) because initially there's no data. When the fetch request is successful, the response is parsed as JSON, and the resulting array of vehicles is set using setVehicles(vehicles).
*/
