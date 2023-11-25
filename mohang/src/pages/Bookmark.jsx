import React, { useEffect, useState } from "react";
import BtnNav from "../components/BtnNav";
import CTABtn from "../components/CTABtn";
import useRequireAuth from "../hooks/useRequireAuth";
import Layout from "../layout/Layout";
import { getBookMarkEvent } from "../api/bookmark";
import EventCard from "../components/EventCard";

function Bookmark() {
  useRequireAuth();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getBookMarkEvent();
        setEvents(fetchedEvents);
      } catch (err) {
        console.error("Error fetching bookmarked events:", err);
      }
    };
    fetchEvents();
  }, []);
  return (
    <Layout title="즐겨찾기" isBack={true}>
      {events.length > 0 ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl text-gray1">즐겨찾기한 행사</p>
          <div id="categoryselected" className="grid grid-cols-2 gap-4 w-full">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center h-[60vh]">
            <p className="flex flex-col items-center text-xl text-gray1">
              <span>즐겨찾기에 담은</span>
              <span>행사가 없어요</span>
            </p>
            <CTABtn url={"/today"} title={"행사 보러가기"} />
          </div>
          <BtnNav />
        </>
      )}
    </Layout>
  );
}

export default Bookmark;
