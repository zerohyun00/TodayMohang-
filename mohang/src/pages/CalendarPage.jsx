import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";
import Layout from "../layout/Layout";
import TodayEvents from "./TodayEvents";
import BtnNav from "../components/BtnNav";
import useFetchEvents from "../hooks/useFetchEvents";
import useFetchDayEvents from "../hooks/useFetchDayEvents";
import { eachDayOfInterval, format, parseISO } from "date-fns";

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const allEvents = useFetchEvents();
  const [events, setEvents] = useState({});
  const dayEvents = useFetchDayEvents(selectedDate);

  useEffect(() => {
    const eventCounts = allEvents.reduce((acc, event) => {
      const startDate = parseISO(event.start);
      const endDate = parseISO(event.end);

      eachDayOfInterval({ start: startDate, end: endDate }).forEach((date) => {
        const formattedDate = format(date, "yyyy-MM-dd");
        acc[formattedDate] = (acc[formattedDate] || 0) + 1;
      });

      return acc;
    }, {});

    setEvents(eventCounts);
  }, [allEvents]);

  const toLocalISOString = (date) => {
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - offset * 60 * 1000);
    return localDate.toISOString().split("T")[0];
  };

  const tileContent = ({ date, view }) => {
    const dateString = toLocalISOString(date);
    if (view === "month" && events[dateString]) {
      return <div className="events-number">{events[dateString]}</div>;
    }
  };

  const formatMonthYear = (locale, date) => {
    return toLocalISOString(date).slice(0, 7);
  };

  const handleDateClick = (value) => {
    const dateString = toLocalISOString(value);
    setSelectedDate(events[dateString] ? dateString : null);
  };

  const todayEventsData = selectedDate ? dayEvents : [];
  useEffect(() => {
    if (selectedDate) {
      const selectedElement = document.getElementById("selected");
      if (selectedElement) {
        selectedElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedDate]);
  return (
    <Layout title={"행사 캘린더"} isNav={true}>
      <Calendar
        tileContent={tileContent}
        formatMonthYear={formatMonthYear}
        onClickDay={handleDateClick}
      />

      <h1 className="my-4 text-center semibold text-lg">
        {selectedDate
          ? `선택된 날짜: ${selectedDate}`
          : "원하시는 날짜를 선택해주세요"}
      </h1>
      <div id="selected">
        <TodayEvents events={todayEventsData} />
      </div>
      <BtnNav />
    </Layout>
  );
}

export default CalendarPage;
