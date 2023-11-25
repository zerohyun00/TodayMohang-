import CTABtn from "../components/CTABtn";
import Layout from "../layout/Layout";

function Bookmark() {
  return (
    <Layout title="즐겨찾기">
      <div className="flex flex-col justify-center items-center h-[60vh]">
        <p className="flex flex-col items-center text-xl text-gray1">
          <span>즐겨찾기에 담은</span>
          <span>행사가 없어요</span>
        </p>
        <CTABtn title={"행사 보러가기"} />
      </div>
    </Layout>
  );
}

export default Bookmark;
