import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import Layout from "../layout/Layout";
import BtnNav from "../components/BtnNav";
import { fetchEvents } from "../api/events";
import { kcategories } from "../static/category";

function TodayEvents() {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체"); // 초기값을 "전체"로 설정

  useEffect(() => {
    fetchEvents()
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  // 선택된 카테고리에 따라 이벤트 필터링
  const filteredEvents =
    selectedCategory === "전체"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  // 카테고리 선택 핸들러
  const handleCategoryChange = (category) => {
    setSelectedCategory(category.name);
  };
  return (
    <Layout title="오늘의 행사" isNav={true}>
      <div className="flex items-center justify-around mb-6">
        {kcategories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`p-1 w-[50px] h-[50px] rounded-full text-white text-[10px] ${
              selectedCategory === category.name ? "active-class" : "bg-gray1"
            }`} // 조건부 클래스 적용
            style={{
              backgroundColor:
                selectedCategory === category.name ? category.color : undefined,
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
      <BtnNav />
    </Layout>
  );
}

export default TodayEvents;
