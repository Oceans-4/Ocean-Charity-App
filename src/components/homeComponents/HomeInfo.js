import water from "./../../images/deep-blue.jpg";
import beach from "./../../images/beach.jpg";
import TextInfo from "./TextInfo";

const HomeInfo = () => {
  return (
    <div>
      <section className="m-6">
        <div className="flex flex-wrap py-8 justify-center">
          <TextInfo title="We can make a difference, this won't be our first time." text="Our leadership team bring years of experience to bear on the greatest challenge of our time. We’re results driven, with a proven record of previous successes." image={water} buttonText="Learn More" link="/about" />
          <img style={{ height: "380px", width: "400px" }} src={water} />
        </div>
        <div className="flex flex-wrap py-8 justify-center">
          <img style={{ height: "380px", width: "400px" }} src={beach} className="max-xl:order-3" />
          <TextInfo title="Helping the Ocean is a team effort. What can you do to help?" text="You can support Ocean Buddies and our cause in numerous ways, by donating, volunteering in our effort, or just purchasing items in our shop, you are helping change the ocean and our environment." image={water} buttonText="Make a Change" />
        </div>
      </section>
    </div>
  );
};

export default HomeInfo;
