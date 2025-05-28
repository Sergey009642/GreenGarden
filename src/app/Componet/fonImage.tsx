import MiniImgs from "./MiniImgs";

function FonImage() {
  return (
    <div className="bg-[url('/images.jpg')] bg-cover bg-center w-full h-[100vh] max-sm:h-[60vh] ">
      <div className="w-full h-full flex justify-center"></div>
      <div className="">
        <MiniImgs/>
      </div>
    </div>
  );
}

export default FonImage;
