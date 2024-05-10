import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Notification } from "@components/base";

export default function Layout() {
  return (
    <div>
      <Notification />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xs" />}
      >
        <Outlet />
      </Suspense>
    </div>
  );
}
