const H1hero = ({ text }: { text: string }) => {
  return (
    <h1 className="font-oswald text-center text-3xl md:text-4xl lg:text-9xl text-white text-shadow-lg shadow-gray-500">
      {text}
    </h1>
  );
};

export default H1hero;
