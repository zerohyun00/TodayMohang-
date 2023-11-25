import { useState } from "react";
import Profile from "../assets/images/profile.jpeg";
import { FaChevronRight } from "react-icons/fa";
import CTABtn from "../components/CTABtn";
import { Link } from "react-router-dom";
import BackHeader from "../components/Header";
import Layout from "../layout/Layout";

function Mypage() {
  const [univAuth, setUnivAuth] = useState(false);
  return (
    <Layout isBack={true}>
      <div className="flex flex-col items-center relative h-[100vh] px-5 pt-[100px] gap-5">
        <Link
          to={univAuth ? "" : "/univAuth"}
          className={`${
            univAuth ? "bg-primary" : "bg-gray2"
          } w-[140px] rounded-full text-center text-xs py-1 mb-[30px]`}
        >
          {univAuth ? "대학인증 완료" : "대학 인증하기"}
        </Link>
        <h2 className="semibold text-xl ">사자는 구구</h2>
        <img
          src={Profile}
          alt="profile"
          className="w-[100px] h-[100px] rounded-full ring-2 ring-primary"
        />
        <CTABtn title={"나의 행사 보러가기"} />
        <Link to={"/login"} className="fixed bottom-10 text-gray1 text-xs">
          로그아웃하기
        </Link>
      </div>
    </Layout>
  );
}

export default Mypage;
