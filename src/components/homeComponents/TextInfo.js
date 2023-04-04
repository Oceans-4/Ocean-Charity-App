import { useState } from "react";

const TextInfo = (props) => {
  return (
    <div className="w-3/5 p-5 py-4 relative max-xl:text-center">
      <h1 className="font-bold text-5xl text-[#0B2447] mx-2 max-xl:order-1">{props.title}</h1>
      <p className="m-8 font-light mx-5 max-xl:order-2">{props.text}</p>
      <button className="bg-[#0B2447] text-white p-4 absolute bottom-4 left-36 font-bold max-xl:relative">{props.buttonText}</button>
    </div>
  );
};

export default TextInfo;
