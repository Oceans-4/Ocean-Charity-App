import { useState } from "react";

const TextInfo = (props) => {
  return (
    <div className="w-3/5 p-5 text-center py-4 relative">
      <h1 className="font-bold text-5xl text-[#0B2447] mx-2">{props.title}</h1>
      <p className="mt-8 font-light mx-5">{props.text}</p>
      <button className="bg-[#0B2447] text-white p-4 absolute bottom-4 left-36">{props.buttonText}</button>
    </div>
  );
};

export default TextInfo;
