import { appRouter } from "@navigation/navigation.router";
import { observer } from "mobx-react-lite";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default observer(App);
