import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white py-4 shadow-lg z-50">
      <ul className="flex justify-center space-x-10 text-lg font-semibold">
        {["Hero", "Projects", "About", "Contact"].map((section) => (
          <li key={section}>
            <Link
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-300 transition-colors"
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
