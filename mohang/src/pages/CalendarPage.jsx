import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";
import Layout from "../layout/Layout";
import TodayEvents from "./TodayEvents";
import BtnNav from "../components/BtnNav";

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
  const events = {
    // 여기에 이벤트 호출해와서 데이터 넣기
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
    return toLocalISOString(date).slice(0, 7);
  };

  const handleDateClick = (value) => {
    setSelectedDate(toLocalISOString(value)); // Update state when a date is clicked
  };

  return (
    <Layout title={"행사 캘린더"}>
      <Calendar
        tileContent={tileContent}
        formatMonthYear={formatMonthYear}
        onClickDay={handleDateClick} // Add the click handler
      />

      <h1>
        {selectedDate ? `선택된 날짜: ${selectedDate}` : "날짜를 선택해주세요"}
      </h1>
      <TodayEvents />
      <BtnNav />
    </Layout>
  );
}

export default CalendarPage;
