import { useEffect, useState } from "react";
import { eventDetail } from "../api/events";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import DetailLayout from "../layout/DetailLayout";
import Tag from "../components/Tag";
import { FaHeart } from "react-icons/fa";
import BackHeader from "../components/Header";
import Layout from "../layout/Layout";

function EventDetail() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    eventDetail(id)
      .then((data) => {
        setDetail(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setIsLoading(false);
      });
  }, [id]);
  return (
    <>
      <Layout title={detail.title || "제목을 가져오는 중..."} isBack={true}>
        {isLoading ? (
          <SyncLoader color="#36d7b7" />
        ) : (
          <section>
            <div className="flex flex-col py-5 gap-[6px]">
              <div className="flex items-center justify-between">
                <h4 className="text-xs semibold">
                  주최명 : {detail.organizer}
                </h4>
                <Tag category={detail.category} />
              </div>
              <h5 className="text-[8px] text-end">
                {detail.start} ~ {detail.end}
              </h5>
              <div className="flex items-center justify-between">
                <h1 className="text-[22px] semibold">{detail.title}</h1>
                <FaHeart className="text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col overflow-hidden ring-2 ring-primary h-fit rounded-2xl mt-5 pb-4">
              <img
                src={detail.imageUrls[0]}
                alt="event"
                className="w-full  object-cover h-[280px] "
              />
              <p className="p-4 min-h-[80px] max-h-[300px] overflow-scroll border-t-2 border-primary text-xs">
                {detail.content}
              </p>
            </div>
          </section>
        )}
      </Layout>
    </>
  );
}

export default EventDetail;
