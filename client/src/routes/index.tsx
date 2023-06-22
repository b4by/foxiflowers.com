import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import config from "./config";
import { Loader } from "@/components/Loader/Loader";

export default function RouteBuilder() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {config.map(({ path, page: Page }, index) => (
          <Route key={index} element={<Page />} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
}
