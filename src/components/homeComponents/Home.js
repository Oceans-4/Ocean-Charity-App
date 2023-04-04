import HomeInfo from "./HomeInfo";
import HomeMission from "./HomeMission";
import homePagePhoto from "./../../images/palm-tree.jpg";

const Home = () => {
  return (
    <>
      <div>
        <img src={homePagePhoto} />
        <div className="absolute bottom-14 right-2/4">
          <h1 className="text-white  p-4 text-4xl font-bold">Water pollution needs a fast solution.</h1>
          <button className="bg-white text-[#19376D] bottom-14 left-5 mb-5 ml-5 p-4 text-2xl font-bold rounded-3xl">Learn More</button>
        </div>
      </div>

      <HomeMission />
      <HomeInfo />
    </>
  );
};

export default Home;
