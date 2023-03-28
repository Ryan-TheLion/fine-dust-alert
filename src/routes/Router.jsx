import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/common";
import {
  FavoritesPage,
  LocationFineDustPage,
  MyLocationFineDustPage,
} from "../pages";
import ErrorPage from "../pages/errorPage";
import LoadingPage from "../pages/lodingPage";
import DustlistRouter from "./DustlistRouter";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            element={
              <ErrorBoundary FallbackComponent={ErrorPage}>
                <DustlistRouter />
              </ErrorBoundary>
            }
          >
            <Route index element={<MyLocationFineDustPage />} />
            <Route path="finedust" element={<LocationFineDustPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>

          <Route path="*" element={<>not found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
