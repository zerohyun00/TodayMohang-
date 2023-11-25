import React from "react";
import { FaRegCalendarCheck, FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import logo_active from "../assets/images/logo_active.png";
import logo_inactive from "../assets/images/logo_inactive.png";
import { Link } from "react-router-dom";

function BtnNav() {
  const { pathname } = window.location;
  console.log(pathname);

  const isActive = (path) => pathname === path;

  const NAV_STYLE =
    "flex gap-1 flex-col items-center justify-center overflow-hidden";
  const ACTIVE_CLASS = "text-primary semibold text-[11px]";
  const INACTIVE_CLASS = "text-gray0 regular text-[10px]";

  return (
    <section className="z-10 fixed left-0 bottom-0 w-[100%] overflow-hidden grid grid-cols-4 h-20 bg-white">
      <Link
        to="/today"
        className={`${NAV_STYLE} ${
          isActive("/today") ? ACTIVE_CLASS : INACTIVE_CLASS
        }`}
      >
        <img
          src={isActive("/today") ? logo_active : logo_inactive}
          alt="logo"
          className={`w-[24px] h-[24px] ${
            isActive("/today") ? ACTIVE_CLASS : INACTIVE_CLASS
          }`}
        />
        <span className="text-xs">오늘의 행사</span>
      </Link>
      <Link
        to="/calendar"
        className={`${NAV_STYLE} ${
          isActive("/calendar") ? ACTIVE_CLASS : INACTIVE_CLASS
        }`}
      >
        <FaRegCalendarCheck size={24} />
        <span className="text-xs">캘린더</span>
      </Link>
      <Link
        to="/bookmark"
        className={`${NAV_STYLE} ${
          isActive("/bookmark") ? ACTIVE_CLASS : INACTIVE_CLASS
        }`}
      >
        <FaRegHeart size={24} />
        <span className="text-xs">즐겨찾기</span>
      </Link>
      <Link
        to="/mypage"
        className={`${NAV_STYLE} ${
          isActive("/mypage") ? ACTIVE_CLASS : INACTIVE_CLASS
        }`}
      >
        <GoPerson size={24} />
        <span className="text-xs">마이페이지</span>
      </Link>
    </section>
  );
}

export default BtnNav;
