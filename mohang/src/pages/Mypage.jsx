import Profile from "../assets/images/profile.jpeg";
import CTABtn from "../components/CTABtn";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import useRequireAuth from "../hooks/useRequireAuth";
import BtnNav from "../components/BtnNav";

function Mypage() {
  const univAuth = sessionStorage.getItem("authenticated") === "true";
  const nickname = sessionStorage.getItem("nickname");
  const navigate = useNavigate();
  useRequireAuth();

  const handleLogin = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <Layout isBack={true} isNav={true}>
      <div className="flex flex-col items-center relative h-[100vh] px-5 pt-[100px] gap-5">
        <Link
          to={univAuth ? "" : "/univCert"}
          className={`${
            univAuth ? "bg-primary" : "bg-gray2"
          } w-[140px] rounded-full text-center text-xs py-1 mb-[30px]`}
        >
          {univAuth ? "대학인증 완료" : "대학 인증하기"}
        </Link>
        <h2 className="semibold text-xl ">{nickname || "사자는 구구"}</h2>
        <img
          src={Profile}
          alt="profile"
          className="w-[100px] h-[100px] rounded-full ring-2 ring-primary"
        />
        <CTABtn url={"/myevent"} title={"나의 행사 보러가기"} />
        <button
          onClick={() => handleLogin()}
          className="fixed bottom-10 text-gray1 text-xs"
        >
          로그아웃하기
        </button>
      </div>
      <BtnNav />
    </Layout>
  );
}

export default Mypage;
