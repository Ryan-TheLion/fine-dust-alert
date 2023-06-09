import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useOutletContext } from "react-router-dom";
import { useDataList } from "../hooks/useDataList";
import LoadingPage from "../pages/lodingPage";

function DustlistRouter() {
  const { ...screenSize } = useOutletContext();
  const { selectedCity } = useSelector((state) => state.appStore);

  const { data, isLoading, error } = useDataList(selectedCity);
  if (error) throw error;
  return isLoading ? (
    <LoadingPage />
  ) : (
    <Outlet context={{ dustList: data, ...screenSize }} />
  );
}

export default DustlistRouter;
