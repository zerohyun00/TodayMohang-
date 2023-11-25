import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";

function CalendarPage() {
  // An example events object, you would replace this with your actual event data
  const events = {
    "2023-11-13": 2,
    "2023-11-18": 2,
    // Add more dates and event counts as needed
  };

  const tileContent = ({ date, view }) => {
    // Convert the date to a simple string format 'yyyy-mm-dd'
    const dateString = date.toISOString().split("T")[0];
    // Check if there are events for this date
    if (view === "month" && events[dateString]) {
      // Return a div with the number of events for this date
      return <div className="events-number">{events[dateString]}</div>;
    }
  };

  return (
    <div>
      <Calendar
        tileContent={tileContent}
        // Other props as needed
      />
    </div>
  );
}

export default CalendarPage;
