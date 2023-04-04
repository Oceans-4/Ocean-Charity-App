import { useState } from "react";

const TextInfo = (props) => {
  const [isLeft, setIsLeft] = useState(false);
  return (
    <div className="w-3/5 p-5 text-center py-4">
      <h1 className="font-bold text-4xl text-[#0B2447]">{props.title}</h1>
      <p className="mt-8">{props.text}</p>
    </div>
  );
};

export default TextInfo;
