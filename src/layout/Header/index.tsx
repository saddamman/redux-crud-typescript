import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Button from "../../components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="shadow py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold">
            LOGO
          </Link>
          <Navigation />
          <div>
            <Button>
              <FontAwesomeIcon icon={faRightToBracket} className="me-2" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
