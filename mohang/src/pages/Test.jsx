import React, { useEffect } from "react";
import { getMyProfile } from "../api/auth";

function Test() {
  useEffect(() => {
    getMyProfile();
  }, []);
  return <div>Test</div>;
}

export default Test;
