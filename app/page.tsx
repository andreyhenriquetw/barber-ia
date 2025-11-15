import Image from "next/image";
import Header from "./_components/header";
import Banner from "../public/banner011.png";

const Home = () => {
  return (
    <div>
      <Header />

      <Image
        src={Banner}
        alt="Agende agora!"
        sizes="100vw"
        className="h-auto w-full"
      />
      <div className="px-5"></div>
    </div>
  );
};

export default Home;
