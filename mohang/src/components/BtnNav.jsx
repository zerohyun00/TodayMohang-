import React from "react";
import { FaRegCalendarCheck, FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import logo from "../assets/images/logo2.png";
import { Link } from "react-router-dom";

function BtnNav() {
  const NAV_STYLE = "flex gap-1 flex-col items-center justify-center";
  return (
    <section className="fixed bottom-0 w-[99%] h-20 bg-white grid grid-cols-4 items-center text-center">
      <Link to="/today" className={NAV_STYLE}>
        <img src={logo} alt="logo" className="w-[24px] h-[24px]" />
        <span className="text-xs">오늘의 행사</span>
      </Link>
      <Link to="/calendar" className={NAV_STYLE}>
        <FaRegCalendarCheck size={24} />
        <span className="text-xs">캘린더</span>
      </Link>
      <Link to="/bookmark" className={NAV_STYLE}>
        <FaRegHeart size={24} />
        <span className="text-xs">즐겨찾기</span>
      </Link>
      <Link to={"/mypage"} className={NAV_STYLE}>
        <GoPerson size={24} />
        <span className="text-xs">마이페이지</span>
      </Link>
    </section>
  );
}

export default BtnNav;
