import { fetchEvents, getAllEvents } from "../api/events";
import { HandleLogin, HandleSignup } from "../api/tmp";
import BtnNav from "../components/BtnNav";
import BackHeader from "../components/Header";

function Home() {
  return (
    <section className="flex flex-col text-4xl ">
      <BackHeader />

      <button
        onClick={() => HandleLogin()}
        className="bg-primary text-white px-4 py-2 rounded-md"
      >
        login
      </button>
      <button onClick={() => fetchEvents()} className="p-4 bg-blue-500">
        get Evenet
      </button>
      <BtnNav />
    </section>
  );
}

export default Home;
