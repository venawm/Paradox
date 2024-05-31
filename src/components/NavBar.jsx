import "./NavBar.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Feature", path: "/" },
  { name: "Download", path: "/" },
  { name: "Career", path: "/" },
  { name: "Pricing", path: "/" },
];

const NavBar = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.path}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
