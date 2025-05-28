import BigMiniImg from "./Componet/BigMin";
import Contact from "./Componet/contact";
import FonImage from "./Componet/fonImage";
import MapContact from "./Componet/map";
import ImageSwiper from "./Componet/SwiperImges";
import SwiperRoom from "./Componet/SwiperRoom";

export default function Home() {
  return (
    <div className="">
      <FonImage/>
      <div className="flex pt-[100px] w-full h-[100vh] bg-cover">
      <BigMiniImg/>
      </div>
      <div className="flex justify-center items-center w-full h-[100vh] max-sm:block max-sm:h-[80vh]">
      <ImageSwiper/>
      <SwiperRoom/>
      </div>
      <div className="flex justify-center items-center max-md:flex-col">
        <Contact/>
        <MapContact/>
      </div>
    </div>
  );
}
