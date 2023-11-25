import React, { useState } from "react";
import EventCard from "../components/EventCard";
import { kcategories } from "../static/category";
import { parseISO, isToday } from "date-fns";

function TodayEventPage({ events }) {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredEvents = events.filter((event) => {
    const isEventToday = isToday(parseISO(event.start));
    return (
      (selectedCategory === "전체" || event.category === selectedCategory) &&
      isEventToday
    );
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.name);

    const categorySelectedElement = document.getElementById("categoryselected");
    if (categorySelectedElement) {
      categorySelectedElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex items-center justify-around mb-6">
        {kcategories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`p-1 w-[50px] h-[50px] rounded-full text-white text-[10px] ${
              selectedCategory === category.name ? "active-class" : "bg-gray1"
            }`}
            style={{
              backgroundColor:
                selectedCategory === category.name ? category.color : undefined,
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div id="categoryselected" className="grid grid-cols-2 gap-4 w-full">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </>
  );
}

export default TodayEventPage;
