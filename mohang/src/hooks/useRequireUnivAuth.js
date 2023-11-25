import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRequireUnivAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const nickname = sessionStorage.getItem("nickname");
    const auhtenticated = sessionStorage.getItem("authenticated") === true;
    if (!nickname) {
      alert("로그인 정보가 없습니다.");
      navigate("/login");
    } else {
      if (auhtenticated) {
        alert("학교 인증이 필요합니다.");
        navigate("/univcert");
      }
    }
  }, [navigate]);
};

export default useRequireUnivAuth;
