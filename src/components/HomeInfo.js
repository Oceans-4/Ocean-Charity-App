import water from "./../images/deep-blue.jpg";
import beach from "./../images/beach.jpg";
import TextInfo from "./TextInfo";

const HomeInfo = () => {
  return (
    <div>
      <section className="m-6">
        <div className="flex flex-wrap py-8 justify-center">
          <TextInfo title="Helping the Ocean, one day at a time" text="Text goes here" image={water} />
          <img style={{ height: "350px", width: "350px" }} src={water} />
        </div>
        <div className="flex flex-wrap py-8 justify-center">
          <img style={{ height: "350px", width: "350px" }} src={beach} />
          <TextInfo title="Helping the Ocean, one day at a time" text="Text goes here" image={water} />
        </div>
      </section>
    </div>
  );
};

export default HomeInfo;
