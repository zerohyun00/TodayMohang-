import { HandleLogin, HandleSignup } from "../api/tmp";
import BtnNav from "../components/BtnNav";
import { BASE_URL } from "../static";

function Home() {
  console.log(BASE_URL);
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
      <BtnNav />
    </section>
  );
}

export default Home;
