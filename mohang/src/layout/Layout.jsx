import { useNavigate } from "react-router-dom";
import Icon from "../assets/images/logos.png";
import BackHeader from "../components/Header";
import Title from "../components/Title";

function Layout({ children, title, isNav, isBack }) {
  const navigate = useNavigate();
  return (
    <section
      className={`flex flex-col px-[22px] py-4 h-[100vh] overflow-scroll relative ${
        isNav ? "pb-[90px]" : ""
      }`}
    >
      {isBack ? <BackHeader /> : null}
      <img
        src={Icon}
        onClick={() => navigate("/today")}
        alt="logo"
        className={`object-cover w-[30px] h-[30px] ${
          isBack ? "mt-[60px]" : "mt-[20px]"
        }`}
      />
      {title ? <Title title={title} /> : null}
      {children}
    </section>
  );
}

export default Layout;
