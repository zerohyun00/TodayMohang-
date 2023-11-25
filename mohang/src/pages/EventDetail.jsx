import { useEffect, useState } from "react";
import { eventDetail } from "../api/events";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import DetailLayout from "../layout/DetailLayout";
import Tag from "../components/Tag";
import { FaHeart } from "react-icons/fa";
import BackHeader from "../components/Header";

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
      <BackHeader />
      <DetailLayout title={detail.title || "제목을 가져오는 중..."}>
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
                {detail.content}국회는 국가의 예산안을 심의·확정한다. 제3항의
                승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을
                상실한다. 이 경우 그 명령에 의하여 개정 또는 폐지되었던 법률은
                그 명령이 승인을 얻지 못한 때부터 당연히 효력을 회복한다.
                국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여
                국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다.
                대통령은 제4항과 제5항의 규정에 의하여 확정된 법률을 지체없이
                공포하여야 한다. 제5항에 의하여 법률이 확정된 후 또는 제4항에
                의한 확정법률이 정부에 이송된 후 5일 이내에 대통령이 공포하지
                아니할 때에는 국회의장이 이를 공포한다. 공무원의 직무상
                불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여 국가
                또는 공공단체에 정당한 배상을 청구할 수 있다. 이 경우 공무원
                자신의 책임은 면제되지 아니한다.
              </p>
            </div>
          </section>
        )}
      </DetailLayout>
    </>
  );
}

export default EventDetail;
