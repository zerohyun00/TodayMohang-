import React, { useEffect } from "react";
import { getMyProfile } from "../api/auth";
import { getBookMarkEvent } from "../api/bookmark";

function Test() {
  useEffect(() => {
    // getMyProfile();
    getBookMarkEvent();
  }, []);
  return <div>Test</div>;
}

export default Test;
