import BtnNav from "../components/BtnNav";
import { BASE_URL } from "../static";

function Home() {
  console.log(BASE_URL);
  return (
    <section className="text-4xl text-primary">
      <BtnNav />
    </section>
  );
}

export default Home;
