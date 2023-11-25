import Layout from "../layout/Layout";
import BtnNav from "../components/BtnNav";
import TodayEvents from "./TodayEvents";

function TodayEventsLayout({ children }) {
  return (
    <Layout title="오늘의 행사" isNav={true}>
      <TodayEvents />
      <BtnNav />
    </Layout>
  );
}

export default TodayEventsLayout;
