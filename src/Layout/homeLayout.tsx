import { Header, Footer} from "../Component/homeIndex";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
