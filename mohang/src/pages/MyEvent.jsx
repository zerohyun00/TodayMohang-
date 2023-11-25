import { useState, useEffect } from "react";
import CTABtn from "../components/CTABtn";
import Layout from "../layout/Layout";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useRequireAuth from "../hooks/useRequireAuth";
import { getMyEvents } from "../api/events";
import EventCard from "../components/EventCard";

function MyEvent() {
  const [univAuth, setUnivAuth] = useState(true);
  const navigate = useNavigate();
  useRequireAuth();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getMyEvents();
        setEvents(fetchedEvents);
      } catch (err) {
        console.error("Error fetching bookmarked events:", err);
      }
    };
    fetchEvents();
  }, []);
  return (
    <Layout title="나의 행사" isBack={true}>
      <div className="flex flex-col justify-center items-center">
        {univAuth ? (
          <>
            {events.length > 0 ? (
              <div className="flex flex-col justify-center items-center">
                <div
                  id="categoryselected"
                  className="grid grid-cols-2 gap-4 w-full"
                >
                  {events.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="text-center text-xl semibold text-gray3 space-y-7">
                  <span>아직 등록한 행사가 없어요!</span>
                  <div>
                    <h4>아래의 플러스 버튼을 눌러</h4>
                    <h4>행사를 등록해보세요</h4>
                  </div>
                </div>
                <IoMdAddCircle
                  onClick={() => navigate("/event/regist")}
                  size={60}
                  className="fixed bottom-10 right-7 text-primary"
                />
              </>
            )}
          </>
        ) : (
          <>
            <p className="text-center text-xl text-gray1">
              <span>행사를 등록하기 위해</span>
              <br />
              <span>대학교 인증을 완료해주세요</span>
            </p>
            <CTABtn title={"학교 인증하러 가기"} />
          </>
        )}
      </div>
    </Layout>
  );
}

export default MyEvent;
