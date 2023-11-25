import { useState, useEffect } from "react";
import { fetchEvents } from "../api/events";

const useFetchEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return events;
};

export default useFetchEvents;
