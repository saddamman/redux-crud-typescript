import { Link } from "react-router-dom";
import { NAVIGATION_MENU } from "../../lib/data";

type NavigationItemParams = {
  title: string;
  slug: string;
};

const Navigation = () => {
  return (
    <ul className="flex items-center gap-5">
      {NAVIGATION_MENU.map((item: NavigationItemParams) => (
        <Link to={item.slug} key={item.title}>
          {item.title}
        </Link>
      ))}
    </ul>
  );
};

export default Navigation;
