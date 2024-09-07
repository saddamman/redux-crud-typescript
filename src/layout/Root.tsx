import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
