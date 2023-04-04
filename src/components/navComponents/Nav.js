import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className="flex flex-row px-3 text-white pt-5  text-lg font-bold items-center">
      <li className="px-5">Home</li>
      <li className="px-5">About</li>
      <li className="px-5">Support</li>
      <li className="px-5">Shop</li>
      <li className={classes.glass}>Contact</li>
    </ul>
  );
};

export default Nav;
