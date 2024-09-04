import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex  justify-between items-center">
          <div>
            <Link to="/" className="font-bold">
              LOGO
            </Link>
          </div>
          <div>
            <Navigation />
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
