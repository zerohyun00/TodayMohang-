import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { eventDetail } from "../api/events";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
function EventDetail() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  //   useEffect(() => {
  //     setIsLoading(true);
  //     eventDetail(id)
  //       .then((data) => {
  //         setDetail(data);
  //         setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         console.error("Error fetching events:", err);
  //         setIsLoading(false);
  //       });
  //   }, [id]);
  return (
    <Layout title={detail.title || "제목을 가져오는 중..."}>
      {isLoading ? (
        <SyncLoader color="#36d7b7" />
      ) : (
        <div>{/* 상세 정보 렌더링 */}</div>
      )}
    </Layout>
  );
}

export default EventDetail;
