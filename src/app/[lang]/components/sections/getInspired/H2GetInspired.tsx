const H2GetInspired = ({ text }: { text: { span1: string; span2: string } }) => {
  return (
    <h1 className={"font-oswald text-3xl md:text-5xl text-white font-semibold text-shadow-lg shadow-black"}>
      {text.span1}
      <span className="text-yellow-500"> {text.span2}</span>
    </h1>
  );
};

export default H2GetInspired;
