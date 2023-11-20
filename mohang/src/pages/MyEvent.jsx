import CTABtn from "../components/CTABtn";
import Layout from "../layout/Layout";

function MyEvent() {
  return (
    <Layout title="즐겨찾기">
      <div className="flex flex-col justify-center items-center h-[60vh]">
        <p className="flex flex-col items-center text-xl text-gray1">
          <span>행사를 등록하기 위해</span>
          <span>대학교 인증을 완료해주세요</span>
        </p>
        <CTABtn title={"학교 인증하러 가기"} />
      </div>
    </Layout>
  );
}

export default MyEvent;
