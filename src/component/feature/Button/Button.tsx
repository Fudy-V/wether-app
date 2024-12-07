import React from "react";

const getWether = async () => {};

const Button = ({ text }: { text: string }) => {
  return (
    <button
      className=" block font-bold border-2 text-center border-gray-400 ms-1 p-2"
      onClick={getWether}
    >
      {text}
    </button>
  );
};

export default Button;
