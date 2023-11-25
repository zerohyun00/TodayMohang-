import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRequireAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const nickname = sessionStorage.getItem("nickname");
    if (!nickname) {
      alert("로그인 정보가 없습니다.");
      navigate("/login");
    }
  }, [navigate]);
};

export default useRequireAuth;
