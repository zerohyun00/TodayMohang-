import Layout from "../layout/Layout";
import BtnNav from "../components/BtnNav";
import TodayEvents from "./TodayEvents";
import useFetchEvents from "../hooks/useFetchEvents";

function TodayEventsLayout({ children }) {
  const events = useFetchEvents();

  return (
    <Layout title="오늘의 행사" isNav={true}>
      <TodayEvents events={events} />
      <BtnNav />
    </Layout>
  );
}

export default TodayEventsLayout;
