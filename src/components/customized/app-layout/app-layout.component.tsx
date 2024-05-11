import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Notification } from "@components/customized";
import { Header, Loader } from "@components/base";

export default function AppLayout() {
  return (
    <div>
      <Notification />
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
