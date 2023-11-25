import React from "react";
import Layout from "../layout/Layout";
import BtnNav from "../components/BtnNav";
import TodayEventPage from "./TodayEventPage";
import useFetchDayEvents from "../hooks/useFetchDayEvents";
import { format } from "date-fns";
import useRequireAuth from "../hooks/useRequireAuth";

function TodayEventsLayout({ children }) {
  const today = format(new Date(), "yyyy-MM-dd");
  const dayEvents = useFetchDayEvents(today);
  useRequireAuth();

  return (
    <Layout title="오늘의 행사" isNav={true}>
      <TodayEventPage events={dayEvents} />
      <BtnNav />
    </Layout>
  );
}

export default TodayEventsLayout;
