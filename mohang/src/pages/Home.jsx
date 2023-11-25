import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchEvents } from "../api/events";
import { HandleLogin } from "../api/tmp";
import BtnNav from "../components/BtnNav";
import Layout from "../layout/Layout";

function Home() {
  const navigate = useNavigate();
  // 바로 Redirection 으로 오늘의 행사로 이동
  useEffect(() => {
    navigate("/today");
  }, [navigate]);

  return (
    <Layout isBack={true} className="flex flex-col text-4xl ">
      <button
        onClick={() => HandleLogin()}
        className="bg-primary text-white px-4 py-2 rounded-md"
      >
        login
      </button>
      <button onClick={() => fetchEvents()} className="p-4 bg-blue-500">
        get Event
      </button>
      <BtnNav />
    </Layout>
  );
}

export default Home;
