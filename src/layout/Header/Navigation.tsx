import { Link } from "react-router-dom";
import { NAVIGATION_MENU } from "../../lib/data";

const Navigation = () => {
  return (
    <ul className="flex items-center gap-5">
      {NAVIGATION_MENU &&
        NAVIGATION_MENU.length > 1 &&
        NAVIGATION_MENU.map((item) => <Link to={item.slug}>{item.title}</Link>)}
    </ul>
  );
};

export default Navigation;
