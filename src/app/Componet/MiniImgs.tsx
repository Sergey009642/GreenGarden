import Image from "next/image";

function MiniImgs() {
  const images = ["/home1.jpg", "/Images.jpg", "/Home5.jpg"];

  return (
    <div className="flex justify-center items-center m-auto relative top-[-70px]">
      <div className="flex items-center justify-center gap-[80px] max-md:gap-[60px] max-sm:gap-[20px]">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            width={400}
            height={400}
            alt={`Mini ${index + 1}`}
            className="w-[200px] h-[200px] rounded-[50%] max-md:w-[160px] max-md:h-[160px] max-sm:w-[80px] max-sm:h-[80px]"
          />
        ))}
      </div>
    </div>
  );
}

export default MiniImgs;
