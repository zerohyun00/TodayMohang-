import { useState } from "react";
import Profile from "../assets/images/profile.jpeg";
import { FaChevronRight } from "react-icons/fa";

function Mypage() {
  const [univAuth, setUnivAuth] = useState(false);
  return (
    <div className="flex flex-col items-center relative h-[100vh] pt-[100px] gap-5">
      <button
        className={`${
          univAuth ? "bg-primary" : "bg-gray2"
        } w-[140px] rounded-full text-xs py-1 mb-[30px]`}
      >
        대학인증하기
      </button>
      <h2 className="semibold text-xl ">사자는 구구</h2>
      <img
        src={Profile}
        alt="profile"
        className="w-[100px] h-[100px] rounded-full ring-2 ring-primary"
      />
      <div className="bg-primary text-white flex items-center justify-center w-[90%] p-5 rounded-[10px] mt-[50px]">
        <FaChevronRight size={20} className=" invisible" />
        <div className="flex-grow" />
        <h1 className="flex-grow-0 text-center">나의 행사 보러가기</h1>
        <div className="flex-grow" />
        <FaChevronRight size={20} />
      </div>
      <button className="fixed bottom-10 text-gray1 text-xs">
        로그아웃하기
      </button>
    </div>
  );
}

export default Mypage;
