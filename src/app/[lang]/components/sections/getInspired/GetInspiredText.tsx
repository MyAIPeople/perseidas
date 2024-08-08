import React from "react";

const GetInspiredText = ({
  text,
}: {
  text: {
    p1: string;
    p2: string;
    p3: string;
  };
}) => {
  return (
    <p className="md:text-2xl text-white text-center md:text-start">
      <span>{text.p1}</span>
      <br className="hidden md:block" />
      <br />
      <span className="hidden md:block">{text.p2}</span>
      <br className="hidden md:block" />
      <br className="md:hidden block" />
      <span>{text.p3}</span>
    </p>
  );
};

export default GetInspiredText;
