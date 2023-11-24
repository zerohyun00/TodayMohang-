import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import Layout from "../layout/Layout";
import BtnNav from "../components/BtnNav";
import { getAllEvents } from "../api/events";
import apiInstance from "../api";

function TodayEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    apiInstance
      .get("/posts")
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Layout title="오늘의 행사" isNav={true}>
      <div>Filter Part</div>
      <div className="grid grid-cols-2 gap-4 w-full">
        {events &&
          events.map((event, index) => <EventCard key={index} {...event} />)}
      </div>
      <BtnNav />
    </Layout>
  );
}

export default TodayEvents;
