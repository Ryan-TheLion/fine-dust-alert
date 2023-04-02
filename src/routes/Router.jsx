import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/common";
import {
  FavoritesPage,
  LocationFineDustPage,
  MyLocationFineDustPage,
  ErrorPage,
  NotFoundPage,
} from "../pages";
import LoadingPage from "../pages/lodingPage";
import DustlistRouter from "./DustlistRouter";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            element={
              <Suspense fallback={<LoadingPage />}>
                <ErrorBoundary FallbackComponent={ErrorPage}>
                  <DustlistRouter />
                </ErrorBoundary>
              </Suspense>
            }
          >
            <Route index element={<MyLocationFineDustPage />} />
            <Route path="finedust" element={<LocationFineDustPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
