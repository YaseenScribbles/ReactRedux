import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import { Provider } from "react-redux";
import store from "../store/Store";

export default function Layout() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
}
