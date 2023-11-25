import { useState, useEffect } from "react";
import { getEventsByDate } from "../api/events";

const useFetchDayEvents = (date) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    if (date) {
      getEventsByDate(date)
        .then((data) => setEvents(data))
        .catch((err) => console.error("Error FetchDayEvents", err));
    }
  }, [date]);
  return events;
};

export default useFetchDayEvents;
