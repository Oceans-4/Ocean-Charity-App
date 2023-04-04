import Nav from "./Nav";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className="text-4xl px-5 pt-7 text-white font-bold">Ocean Buddies</h1>
      <Nav />
      <div className="absolute bottom-14 right-2/4">
        <h1 className="text-white  p-4 text-4xl font-bold">Water pollution needs a fast solution.</h1>
        <button className="bg-white text-[#19376D] bottom-14 left-5 mb-5 ml-5 p-4 text-2xl font-bold rounded-3xl">Learn More</button>
      </div>
    </div>
  );
};

export default Header;
