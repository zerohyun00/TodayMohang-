import { useState } from "react";
import CTABtn from "../components/CTABtn";
import Layout from "../layout/Layout";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function MyEvent() {
  const [univAuth, setUnivAuth] = useState(true);
  const navigate = useNavigate();
  return (
    <Layout title="나의 행사">
      <div className="flex flex-col justify-center items-center h-[60vh]">
        {univAuth ? (
          <>
            <div className="text-center text-xl semibold text-gray3 space-y-7">
              <span>아직 등록한 행사가 없어요!</span>
              <p>
                <h4>아래의 플러스 버튼을 눌러</h4>
                <h4>행사를 등록해보세요</h4>
              </p>
            </div>
            <IoMdAddCircle
              onClick={() => navigate("/form/regist")}
              size={60}
              className="fixed bottom-10 right-7 text-primary"
            />
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
