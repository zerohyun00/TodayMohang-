import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";
import Layout from "../layout/Layout";

function CalendarPage() {
  const events = {
    "2023-11-13": 2,
    "2023-11-18": 2,
  };

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
    return toLocalISOString(date).slice(0, 7); // YYYY-MM format
  };

  return (
    <Layout title={"행사 캘린더"}>
      <Calendar tileContent={tileContent} formatMonthYear={formatMonthYear} />
    </Layout>
  );
}

export default CalendarPage;
