import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRequireAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const nickname = sessionStorage.getItem("nickname");
    if (!nickname) {
      navigate("/login");
    }
  }, [navigate]);
};

export default useRequireAuth;
