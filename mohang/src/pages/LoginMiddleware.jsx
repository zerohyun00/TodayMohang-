import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyProfile } from "../api/auth";
import { HashLoader } from "react-spinners";

function LoginMiddleware() {
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfileAndNavigate() {
      try {
        await getMyProfile();
        navigate("/today");
      } catch (err) {
        console.error("Error fetching profile:", err);
        navigate("/login");
      }
    }

    fetchProfileAndNavigate();
  }, [navigate]);

  return <HashLoader color="#FFC14A" />;
}

export default LoginMiddleware;
