import { fetchEvents, getAllEvents } from "../api/events";
import { HandleLogin, HandleSignup } from "../api/tmp";
import BtnNav from "../components/BtnNav";

function Home() {
  return (
    <section className="text-4xl text-primary">
      <button
        onClick={() => HandleSignup()}
        className="bg-primary text-white px-4 py-2 rounded-md"
      >
        signup
      </button>
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
